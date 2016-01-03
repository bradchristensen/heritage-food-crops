import fs from 'fs';

var promisify = (methodName, args) => {
    args = Array.prototype.slice.call(args);
    return new Promise((resolve, reject) => {
        fs[methodName].apply(null, args.concat((err, data) => {
            if (err) reject(err);
            else resolve(data);
        }));
    });
};

export default {
    readdir () {
        return promisify('readdir', arguments);
    },

    readFile () {
        return promisify('readFile', arguments);
    }
};
