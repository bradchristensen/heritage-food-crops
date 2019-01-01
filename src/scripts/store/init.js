/* eslint-disable global-require */

/**
 * Initialise the store differently for dev and production environments.
 * The only difference currently is that the dev environment must also enable logging and
 * initialise Redux DevTools to track the state of the store.
 * https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md#storeconfigurestorejs-1
 */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./init.prod');
} else {
    module.exports = require('./init.dev');
}
