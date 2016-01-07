// Based on json-xhr-promise by Jonathan Warning
// https://github.com/jwarning/json-xhr-promise

var requests = {};

export default function (method, url, data, useCache) {
    var cacheErrors = false;

    if (arguments.length === 1) {
        var options = arguments[0];
        method = options.method || options.type || 'GET';
        useCache = options.useCache || options.cache;
        url = options.url;
        data = options.data;
        cacheErrors = options.cacheErrors;
    }

    // create a promise around an xhr object with json
    if (!useCache || !requests[url]) {
        requests[url] = new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();

            request.open(method, url, true);

            // support cross origin requests
            request.setRequestHeader('Accept', '*/*');
            request.setRequestHeader('Content-type', 'application/json');

            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response ? JSON.parse(request.response) : undefined);
                } else {
                    reject(request.statusText);
                    if (!cacheErrors) delete requests[url];
                }
            };

            request.onerror = () => {
                reject('A network error occurred');
                if (!cacheErrors) delete requests[url];
            };

            request.send(JSON.stringify(data));
        });
    }

    return requests[url];
}
