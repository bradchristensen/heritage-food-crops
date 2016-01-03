import gulp from 'gulp';
import _ from 'lodash';
import addsrc from 'gulp-add-src';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import eslint from 'gulp-eslint';

import babelTransform from 'tasks/streams/babelTransform';
import explicitName from 'tasks/streams/explicitName';
import cache from 'gulp-cache-stream';

import config from 'app/config/gulp.json';

var src = config.src;
var dest = config.dest;

var bowerScriptPaths = _.map(config.bowerScripts, (name, path) => {
    return src.bower + path + '.js';
});

var createPipeline = (uglifyFlag, sourcemapsFlag) => {
    var initialStream = gulp.src([src.scripts + '**/*.js'].concat(bowerScriptPaths));

    var addToPipeline = (...streams) => streams.reduce((pipeline, stream) => {
        return stream ? pipeline.pipe(stream) : pipeline;
    }, initialStream);

    var cachedTransformations = stream => stream
        .pipe(plumber())
        .pipe(babelTransform(true))
        .pipe(explicitName(true));

    return addToPipeline(
        plumber(),
        sourcemapsFlag && sourcemaps.init(),
        cache(cachedTransformations, 'transform'),
        // don't perform any transformations on require.js
        addsrc.prepend(src.bower + 'requirejs/require.js'),
        concat('main.js'),
        uglifyFlag && uglify(),
        sourcemapsFlag && sourcemaps.write('./'),
        gulp.dest(dest.scripts)
    );
};

gulp.task('scripts:build', () => createPipeline(false, false));

gulp.task('scripts:lint', () => {
    // only lint non-vendor files
    return gulp.src([src.scripts + '**/*.js', '!' + src.scripts + 'vendor/**/*.js'])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format());
});

export default gulp.task('scripts', ['scripts:lint', 'scripts:build']);
