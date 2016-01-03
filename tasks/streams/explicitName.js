import through from 'through2';
import gutil from 'gulp-util';

import parseRequirejsConfig from 'tasks/utility/parseRequirejsConfig';
import config from 'app/config/gulp.json';

export default function (debug) {
    var pathMap = parseRequirejsConfig();
    var renameMap = config.renameMap || {};
    var shimSynchronousRequires = config.shimSynchronousRequires || {};
    var bowerScripts = config.bowerScripts || {};

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('explicit-name', 'Streaming not supported'));
            return;
        }

        var content = file.contents.toString();

        var addInlineRequires = requiredScripts => {
            requiredScripts = requiredScripts || [];

            if (!requiredScripts.length) {
                var matches = content.match(/require\((\'|\").*?(\'|\")\)/g) || [];

                matches.forEach(match => {
                    var index = match.indexOf('\'');
                    if (index === -1) {
                        index = match.indexOf('\"');
                    }
                    index++;
                    var end = match.length - 2;
                    var requiredName = match.substring(index, end);
                    requiredScripts.push(requiredName);

                    if (renameMap.hasOwnProperty(requiredName)) {
                        content = content.replace(requiredName, renameMap[requiredName]);
                    }
                });
            }

            var index = content.indexOf('define([');
            if (index !== -1) {
                var lastIndex = content.indexOf(']', index);
                if (lastIndex !== -1) {
                    var existingRequires = JSON.parse(content.substring(index + 7, lastIndex + 1).replace(/\'/g, '"')) || [];
                    requiredScripts = existingRequires.concat(requiredScripts);
                    if (requiredScripts.length) {
                        requiredScripts = requiredScripts.map(name => renameMap[name] || name);
                    }
                    content = content.substr(0, index + 7) +
                        JSON.stringify(requiredScripts).replace(/\"/g, '\'') +
                        content.substr(lastIndex + 1);
                }
            }
        };

        var redefine = symbol => {
            var i = content.indexOf(symbol) + 7;
            var newPath = file.path.replace(/\\/g, '/');
            newPath = newPath.replace(/.*static\/scripts\//, '');
            newPath = newPath.replace('.js', '');
            if (newPath.indexOf('bower_components') !== -1) {
                newPath = newPath.replace(/.*bower_components\//, '');
                var namedPath = bowerScripts[newPath];
                if (namedPath) {
                    newPath = namedPath;
                }
            }

            if (pathMap.hasOwnProperty(newPath)) {
                newPath = pathMap[newPath];
            }
            if (renameMap.hasOwnProperty(newPath)) {
                newPath = renameMap[newPath];
            }

            if (shimSynchronousRequires.hasOwnProperty(newPath)) {
                addInlineRequires(
                    shimSynchronousRequires[newPath] === 'all' ?
                    [] : [shimSynchronousRequires[newPath]]
                );

                content = content.replace('module.exports =', 'return');
            }

            content = content.substr(0, i) + '\'' + newPath + '\', ' + content.substr(i);

            if (debug) {
                console.log('Named ' + newPath);
            }
        };

        var replacementsMade = 0;
        ['define([', 'define(function'].forEach(symbol => {
            while (content.indexOf(symbol) !== -1) {
                redefine(symbol);
                replacementsMade++;
            }
        });

        // if this file already contained a define(), wrap it up to ensure
        // no variables are leaked
        if (!replacementsMade) {
            content = '(function () {\n' + content + '\n})();';
        }

        file.contents = new Buffer(content);

        this.push(file);
        cb();
    });
}
