import '__ga__';

window.GoogleAnalyticsObject = '__ga__';
window.__ga__ = function () {
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg.constructor === Object && arg.hitCallback) {
            arg.hitCallback();
        }
    }
};

window.__ga__.q = [['create', 'UA-50295315-1', 'heritagefoodcrops.org.nz']];
window.__ga__.l = Date.now();

export default window.__ga__;
