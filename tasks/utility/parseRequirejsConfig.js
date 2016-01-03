import _ from 'lodash';
import fs from 'fs';
import path from 'path';

import config from 'app/config/gulp.json';

export default function () {
    var configFilePath = path.join(config.src.scripts, config.requirejsConfigFilePath);
    var configContents = fs.readFileSync(configFilePath).toString();
    var pathConfig = {};

    // This is pretty much the devil. We're going to create a fake requirejs object
    // which defines a 'config' method, so that when our requirejs config file calls
    // 'requirejs.config({ paths: { ... } })' we receive the path config and can use
    // it to define our named modules.
    // This fake object is never used within the gulpfile so we can suppress the
    // unused warning from jshint
    var requirejs = { // eslint-disable-line no-unused-vars
        config: configObject => {
            _.assign(pathConfig, configObject.paths);
        }
    };

    // N.B. this is pretty evil, but warning suppressed for niceness
    eval(configContents); // eslint-disable-line no-eval

    var explicitNames = {};
    _.forEach(pathConfig, (value, key) => {
        explicitNames[value] = key;
    });

    return explicitNames;
}
