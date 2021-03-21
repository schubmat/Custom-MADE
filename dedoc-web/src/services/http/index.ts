export class FetchFileResponse {
    wasSuccessful: boolean;
    hasFile: boolean;
    startDownload : () => void;
    info: string;

    constructor(wasSuccessful: boolean, hasFile: boolean, download: () => void, info: string) {
        this.wasSuccessful = wasSuccessful;
        this.hasFile = hasFile;
        this.startDownload = download;
        this.info = info;
    }
}

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const fetchAPI = (input: RequestInfo, init?: RequestInit): Promise<any> => {
  return _fetchAPI(input, init).then(result => {
      if (typeof result === "string") {
          throw Error(result);
      }
      return result;
  });
};

const _fetchAPI = (input: RequestInfo, init?: RequestInit): Promise<any> => {
    return fetch(input, init)
        .then(response => {
            if (!response.ok) {
                return response.text();
            }
            return response.json();
        })
        .catch((error: Error) => {
            throw error;
        })
};

export const fetchAuthAPI = (input: RequestInfo, init?: RequestInit): Promise<any> => {
    return _fetchAuthAPI(input, init).then(result => {
        if (typeof result === "string") {
            throw Error(result);
        }
        return result;
    });
};

export const fetchAuthGetFile = (input: RequestInfo, init?: RequestInit): Promise<FetchFileResponse> => {
    return _fetchAuthGetFile(input, init);
};

const _fetchAuthAPI = (input: RequestInfo, init?: RequestInit): Promise<any> => {
    let token = localStorage.getItem('id_token');
    if (token) {
        let rest = init && init.headers;
        init && delete (init.headers);
        return fetch(input, {
            headers: {
                'Authorization': "Bearer ".concat(token),
                ...rest,
            }, ...init
        })
            .then(response => {
                if (!response.ok) {
                    console.log("Response status is: " + response.statusText);
                    return response.text();
                }
                return response.json();
            })
            .catch((error: Error) => {
                console.log(error);
                throw error;
            })
    }
    return new Promise((resolve) => {
        return resolve([]);
    })
};

const _fetchAuthGetFile = (input: RequestInfo, init?: RequestInit): Promise<FetchFileResponse> => {
    let token = localStorage.getItem('id_token');
    if (token) {
        let rest = init && init.headers;
        init && delete (init.headers);
        return fetch(input, {
            headers: {
                'Authorization': "Bearer ".concat(token),
                ...rest,
            }, ...init
        })
            .then(response => {
                const contentDisposition = response.headers.get('Content-Disposition');
                if (contentDisposition === null) {
                    return response.text().then((text) => {
                        return new FetchFileResponse(response.ok, false, () => {}, text)
                    });
                }

                return response.blob().then((blob) => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = contentDisposition.split('filename=')[1];
                    a.download = a.download.substr(1, a.download.length-2);
                    return new FetchFileResponse(response.ok, true, () => a.click(), "");
                });
            })
            .catch((error: Error) => {
                console.log(error);
                throw error;
            })
    }
    return new Promise((resolve) => {
        return resolve(new FetchFileResponse(false, false, ()=>{}, "Your session has expired"));
    })
};
export const authGet = <T>(url: string, params: any): Promise<T> => {
    let searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => searchParams.append(key, params[key]));
    url = url + "?" + searchParams.toString();
    return fetchAuthAPI(url, {
        method: 'GET'
    });
};