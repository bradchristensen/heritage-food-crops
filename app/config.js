import _ from 'lodash';
import packageJson from '../package.json';

const config = {};

// Development config will override production config, so development config files
// must not be present in the production environment

// Avoid bundling these files with Webpack
// eslint-disable-next-line no-eval
const dynamicRequire = eval('require');

['production', 'staging', 'development'].forEach((environment) => {
    try {
        // Require from the root directory, since this will be bundled into /index.js
        const environmentConfig = dynamicRequire(`./app/config/${environment}.json`);
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
