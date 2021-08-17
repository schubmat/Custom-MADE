#include "../includes/FindGitRepos.h"

#if defined(_WIN32)
#define S_ISDIR(m) ((m & 0170000 == 0040000))
#define S_ISLNK(m) ((m & 0170000 == 0120000))
#endif

NAN_METHOD(FindGitRepos)
{
  if (info.Length() < 1 || !info[0]->IsString())
    return ThrowError("Must provide starting path as first argument.");

  if (info.Length() < 2 || !info[1]->IsUint32())
    return ThrowError("Must provide throttle timeout as second argument.");

  if (info.Length() < 3 || !info[2]->IsFunction())
    return ThrowError("Must provide progress callback as third argument.");

  if (info.Length() < 4 || !info[3]->IsFunction())
    return ThrowError("Must provide completion callback as fourth argument.");

  Nan::Utf8String utf8Path(Nan::To<v8::String>(info[0]).ToLocalChecked());
  std::string path = std::string(*utf8Path);

  Callback *progressCallback = new Callback(info[2].As<v8::Function>()),
           *completionCallback = new Callback(info[3].As<v8::Function>());

  AsyncQueueWorker(new FindGitReposWorker(path, Nan::To<uint32_t>(info[1]).FromJust(), progressCallback, completionCallback));
}

FindGitReposWorker::FindGitReposWorker(std::string path, uint32_t throttleTimeoutMS, Callback *progressCallback, Callback *completionCallback):
  AsyncWorker(completionCallback), mPath(path), mThrottleTimeoutMS(throttleTimeoutMS)
{
  mLastScheduledCallback = uv_hrtime() / 1000000;
  mProgressAsyncHandle = new uv_async_t;

  uv_async_init(uv_default_loop(), mProgressAsyncHandle, &FindGitReposWorker::FireProgressCallback);

  mBaton = new FindGitReposProgressBaton;
  mBaton->progressCallback = progressCallback;
  mProgressAsyncHandle->data = reinterpret_cast<void *>(mBaton);
}

void FindGitReposWorker::Execute() {
  uv_dirent_t directoryEntry;
  uv_fs_t scandirRequest;
  std::list<std::string> foundPaths;
  foundPaths.push_back(mPath);

  while (foundPaths.size()) {
    std::list<std::string> temp;
    bool isGitRepo = false;
    std::string currentPath = foundPaths.front();
    foundPaths.pop_front();

    if (uv_fs_scandir(NULL, &scandirRequest, (currentPath + '/').c_str(), 0, NULL) < 0) {
      continue;
    }

    while (uv_fs_scandir_next(&scandirRequest, &directoryEntry) != UV_EOF) {
      std::string nextPath = currentPath + '/' + directoryEntry.name;

      if (directoryEntry.type == UV_DIRENT_UNKNOWN) {
        uv_fs_t lstatRequest;
        if (
          uv_fs_lstat(NULL, &lstatRequest, nextPath.c_str(), NULL) < 0
          || !S_ISDIR(lstatRequest.statbuf.st_mode)
          || S_ISLNK(lstatRequest.statbuf.st_mode)
        ) {
          continue;
        }
      } else if (directoryEntry.type != UV_DIRENT_DIR) {
        continue;
      }

      if (strcmp(directoryEntry.name, ".git")) {
        temp.push_back(nextPath);
        continue;
      }

      isGitRepo = true;
      mBaton->progressQueue.enqueue(nextPath);
      mRepositories.push_back(nextPath);
      ThrottledProgressCallback();
    }

    if (!isGitRepo) {
      foundPaths.splice(foundPaths.end(), temp);
    }
  }
}

void FindGitReposWorker::FireProgressCallback(uv_async_t *progressAsyncHandle) {
  Nan::HandleScope scope;
  FindGitReposProgressBaton *baton = reinterpret_cast<FindGitReposProgressBaton *>(progressAsyncHandle->data);

  int numRepos = baton->progressQueue.count();

  v8::Local<v8::Array> repositoryArray = Nan::New<v8::Array>(numRepos);

  for (unsigned int i = 0; i < (unsigned int)numRepos; ++i) {
    Nan::Set(repositoryArray, i, Nan::New<v8::String>(baton->progressQueue.dequeue()).ToLocalChecked());
  }

  v8::Local<v8::Value> argv[] = { repositoryArray };

  baton->progressCallback->Call(1, argv);
}

void FindGitReposWorker::CleanUpProgressBatonAndHandle(uv_handle_t *progressAsyncHandle) {
  // Libuv is done with this handle in this callback
  FindGitReposProgressBaton *baton = reinterpret_cast<FindGitReposProgressBaton *>(progressAsyncHandle->data);
  baton->progressQueue.clear();
  delete baton->progressCallback;
  delete baton;
  delete reinterpret_cast<uv_async_t *>(progressAsyncHandle);
}

void FindGitReposWorker::HandleOKCallback() {
  uv_close(reinterpret_cast<uv_handle_t*>(mProgressAsyncHandle), &FindGitReposWorker::CleanUpProgressBatonAndHandle);

  // dump vector of repositories into js callback
  v8::Local<v8::Array> repositoryArray = Nan::New<v8::Array>((int)mRepositories.size());

  for (unsigned int i = 0; i < mRepositories.size(); ++i) {
    Nan::Set(repositoryArray, i, Nan::New<v8::String>(mRepositories[i]).ToLocalChecked());
  }

  v8::Local<v8::Value> argv[] = { repositoryArray };

  callback->Call(1, argv);
}

void FindGitReposWorker::ThrottledProgressCallback() {
  if (mThrottleTimeoutMS == 0) {
    uv_async_send(mProgressAsyncHandle);
    return;
  }

  uint32_t now = uv_hrtime() / 1000000;
  if ((now - mLastScheduledCallback) < mThrottleTimeoutMS) {
    return;
  }

  uv_async_send(mProgressAsyncHandle);

  mLastScheduledCallback = now;
}

NAN_MODULE_INIT(Init)
{
  Nan::Set(
    target,
    Nan::New("findGitRepos").ToLocalChecked(),
    Nan::GetFunction(Nan::New<v8::FunctionTemplate>(FindGitRepos)).ToLocalChecked()
  );
}

NODE_MODULE(findGitRepos, Init)
