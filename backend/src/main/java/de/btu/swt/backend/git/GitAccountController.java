package de.btu.swt.backend.git;

import de.btu.swt.backend.storage.FileSystemStorageService;
import de.btu.swt.backend.storage.StorageService;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.html.Option;
import java.io.File;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/gits")
public class GitAccountController {

    private final GitAccountRepository gitRepository;
    private final UserRepository userRepository;

    public GitAccountController(GitAccountRepository gitRepository, UserRepository userRepository) {
        this.gitRepository = gitRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("")
    public ResponseEntity all(@AuthenticationPrincipal UserDetails userDetails) {
        Optional<User> opt = userRepository.findByUsername(userDetails.getUsername());
        if (!opt.isPresent())
            return null;

        User user = opt.get();
        return ResponseEntity.ok(
                gitRepository.findAll().stream()
                        .filter(g -> validate(user, g)).collect(Collectors.toList())
        );
    }

    @GetMapping("/{id}/branches")
    public ResponseEntity getBranches(@AuthenticationPrincipal User user, @PathVariable long id, @RequestParam final String subUrl) {
        Optional<GitAccount> opt = gitRepository.findById(id);
        if (!opt.isPresent())
            return null;

        GitAccount account = opt.get();
        if (!validate(user, account))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("GitAccount does not exist or user does not have access rights");
        return ResponseEntity.ok(account.getBranches(subUrl));
    }

    @GetMapping("/{id}/dirs")
    public ResponseEntity getDirectories(@AuthenticationPrincipal User user, @PathVariable long id, @RequestParam final String subUrl, @RequestParam final String branch) {
        Optional<GitAccount> opt = gitRepository.findById(id);
        if (!opt.isPresent())
            return null;

        GitAccount account = opt.get();
        if (!validate(user, account))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("GitAccount does not exist or user does not have access rights");
        String[] dirs = account.getDirs(subUrl, branch);
        if (dirs.length == 0)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Remote repository is empty or user has no access rights");
        return ResponseEntity.ok(dirs);
    }


    @PostMapping("")
    public ResponseEntity create(@AuthenticationPrincipal UserDetails userDetails,
                                      @RequestParam("file") MultipartFile sshKey,
                                      @RequestParam String plattformUrl)  {

        Optional<User> opt = userRepository.findByUsername(userDetails.getUsername());
        if (!opt.isPresent())
            return null;

        User user = opt.get();
        GitAccount newAccount = GitAccount.builder()
                .isPublic(false)
                .creator(user)
                .name("tmp_"+System.currentTimeMillis())
                .plattformUrl(plattformUrl)
                .build();

        newAccount = gitRepository.save(newAccount);

        StorageService storage = new FileSystemStorageService();
        File file = newAccount.getDir().toFile().getAbsoluteFile();
        storage.store(sshKey, file.getParentFile().toPath(), file.getName());

        String gitLabName = newAccount.getGitLabName();
        String errorMessage;
        if (!gitLabName.isEmpty()) {
            if (gitRepository.findGitAccount(newAccount.getPlattformUrl(), gitLabName) == null) {
                newAccount.setName(gitLabName);
                file.renameTo(newAccount.getDir().toFile());
                newAccount = gitRepository.save(newAccount);
                return ResponseEntity.ok(newAccount);
            }
            errorMessage = "The GitLab account with name '"+gitLabName+"' is already registered";
        }
        else
            errorMessage = "Unvalid SSH key";
        file.delete();
        gitRepository.delete(newAccount);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
    }

    // TODO Parameter user never used.
    private boolean validate(User user, GitAccount account) {
        if (account == null)
            return false;
        return true;
    }
}
