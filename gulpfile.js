'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var marko_ax5 = require('gulp-marko-ax5');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var babel = require('gulp-babel');
var argv = require('yargs').argv; // for args parsing
var spawn = require('child_process').spawn;

var KERNEL_PATH = '';
var PATHS = {
    kernel: KERNEL_PATH,
    assets: {
        src: "assets"
    },
    ax5docs: {
        css_src: "assets/css",
        css_dest: "assets/css",
        doc_src: "_src_",
        doc_dest: ".",
        doc_doc:"test_teamDOC"
    }
};

function errorAlert(error) {
    notify.onError({title: "Gulp Error", message: "Check your terminal", sound: "Purr"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
}

/**
 * SASS
 */
gulp.task('docs-scss', function () {
    gulp.src(PATHS.ax5docs.css_src + '/docs.scss')
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(PATHS.ax5docs.css_dest));
});

/**
 * ax5docs templete render
 */
gulp.task('docs-marko', function () {
    return gulp.src(PATHS['ax5docs'].doc_src + '/**/*.html')
        .pipe(changed(PATHS['ax5docs'].doc_dest, {extension: '.html', hasChanged: changed.compareSha1Digest}))
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(marko_ax5({
            projectName: "ax5ui",
            layoutPath: PATHS.assets.src + '/_layouts/root.marko',
            layoutModalPath: PATHS.assets.src + '/_layouts/modal.marko',
            kernelPath: PATHS.kernel,
            mdpath: PATHS.ax5docs.doc_doc,
        }))
        .pipe(gulp.dest(PATHS['ax5docs'].doc_dest));
});

/**
 * watch
 */
gulp.task('watching', function () {
    // SASS
    gulp.watch(PATHS.ax5docs.css_src + '/**/*.scss', ['docs-scss']);
    // for MD
    gulp.watch(PATHS.ax5docs.doc_src + '/**/*.html', ['docs-marko']);
});

gulp.task('default', function () {
    var process;

    gulp.watch(PATHS.assets.src + '/_layouts/root.marko', spawnChildren);
    gulp.watch(PATHS.assets.src + '/_layouts/modal.marko', spawnChildren);
    spawnChildren();

    function spawnChildren(e) {
        // kill previous spawned process
        if(process) { process.kill(); }

        // `spawn` a child `gulp` process linked to the parent `stdio`
        process = spawn('gulp', ['docs-marko', 'watching'], {stdio: 'inherit'});
    }
});
