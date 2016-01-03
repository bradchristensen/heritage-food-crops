import _ from 'lodash';

// load config
import config from 'app/config/production.json';

if (!config.version) {
    config.version = require('package.json').version;
}

try {
    _.assign(config, require('app/config/staging.json'));
} catch (e) {
    _.noop();
}

try {
    _.assign(config, require('app/config/development.json'));
} catch (e) {
    _.noop();
}

// detect development environment
if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development') {
    config.debug = true;
}

export default config;
