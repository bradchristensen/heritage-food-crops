import Actions from 'stores/actions';
import numeral from 'numeral';
import constants from 'infrastructure/constants';

var requests = {};

export var hasClass = function (element, className) {
    if (element.classList) {
        return element.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
};

export var jsonXHR = function (method, url, data, useCache) {
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
};

export var logout = function () {
    return jsonXHR('POST', '/api/account/logout').then(() => {
        // TODO: should we actually bother waiting
        // until we receive this XHR response?
        // Show a loading indicator in the mean time?
        Actions.accountUpdate(null);
    });
};

export var formatAddress = function (address) {
    var parts = [
        address.addressLine1,
        address.addressLine2,
        address.suburb,
        address.city,
        address.postcode
    ].filter(part => !!part);

    return parts.join(', ');
};

export var formatCurrency = function (value) {
    return numeral(parseFloat(value)).format(constants.currency);
};

export var formatNumeric = function (value) {
    return numeral(parseFloat(value)).format(constants.numeric);
};
