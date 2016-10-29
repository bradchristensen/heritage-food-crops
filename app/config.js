import _ from 'lodash';
import packageJson from '../package.json';

const config = {};

// Development config will override production config, so development config files
// must not be present in the production environment

['production', 'staging', 'development'].forEach((environment) => {
    try {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        const environmentConfig = require(`./config/${environment}.json`);
        Object.assign(config, environmentConfig);
    } catch (e) { _.noop(); }
});

if (!config.version) {
    config.version = packageJson.version;
}

if (!config.server) {
    config.server = {};
}

// detect development environment
if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development') {
    config.debug = true;
}

export default config;
