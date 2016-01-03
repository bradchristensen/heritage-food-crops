export default {
    isAvailable () {
        return typeof Storage !== 'undefined';
    },

    get (key) {
        if (this.isAvailable() && localStorage.hasOwnProperty(key)) {
            return JSON.parse(localStorage[key]);
        }
    },

    set (key, value) {
        if (this.isAvailable()) {
            localStorage[key] = JSON.stringify(value);
        }
    }
};
