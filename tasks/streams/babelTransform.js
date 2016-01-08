import through from 'through2';
import gutil from 'gulp-util';
import babel from 'gulp-babel';

export default function (debug) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('babel-transform', 'Streaming not supported'));
            return;
        }

        if (file.contents.toString().indexOf('define(') === -1) {
            try {
                var babelStream = babel({
                    plugins: ['transform-es2015-modules-amd', 'transform-class-properties'],
                    presets: ['es2015']
                });

                babelStream.on('data', newFile => {
                    file.contents = newFile.contents;
                });

                babelStream.write(file);

                if (debug) {
                    console.log("Babel'd " + file.path);
                }
            } catch (err) {
                this.emit('error', new gutil.PluginError('babel-transform', err, {
                    fileName: file.path
                }));
            }
        }

        this.push(file);
        cb();
    });
}
