import _ from 'lodash';

var config = {};

// Development config will override production config, so development config files
// must not be present in the production environment

['production', 'staging', 'development'].forEach(environment => {
    try {
        _.assign(config, require('./config/' + environment + '.json'));
    } catch (e) { _.noop(); }
});

if (!config.version) {
    config.version = require('../package.json').version;
}

if (!config.server) {
    config.server = {};
}

// detect development environment
if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development') {
    config.debug = true;
}

export default config;
