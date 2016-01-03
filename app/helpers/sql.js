import squel from 'squel';

export var one = promise => {
    return new Promise((resolve, reject) => {
        promise.then(rows => {
            if (rows.length) {
                resolve(rows[0]);
            } else {
                reject();
            }
        });
    });
};

export default squel.useFlavour('mysql');
