import _ from 'lodash';

var config = {};

// Development config will override production config, so development config files
// must not be present in the production environment

try {
    _.assign(config, require('./config/production.json'));
} catch (e) {
    _.noop();
}

try {
    _.assign(config, require('./config/staging.json'));
} catch (e) {
    _.noop();
}

try {
    _.assign(config, require('./config/development.json'));
} catch (e) {
    _.noop();
}

if (!config.version) {
    config.version = require('../package.json').version;
}

// detect development environment
if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development') {
    config.debug = true;
}

export default config;
