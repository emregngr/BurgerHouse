const gulp = require('gulp');
const { series } = require('gulp');
const browsersync = require("browser-sync").create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require("webpack");
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");
const plumber = require("gulp-plumber");
const eslint = require("gulp-eslint");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./",
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function html() {
  return gulp
    .src('index.html')
    .pipe(gulp.dest('./bundles'));
};

function css() {
  return gulp
    .src('scss/index.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./bundles'));
};

// Lint scripts
function scriptsLint() {
  return gulp
    .src(["./javascript/**/*", "./gulpfile.js"])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src(["javascript/index.js"])
      .pipe(plumber())
      .pipe(webpackstream(webpackconfig, webpack))
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest("./bundles"))
      .pipe(browsersync.stream())
  );
  done();
}

// Gulp task(s)
exports.html = html;
exports.css = css;
exports.scripts = scripts;

// Watch files
function watchFiles() {
  gulp.watch("./*.html", series(html, browserSyncReload));
  gulp.watch("./scss/**/*", series(css, browserSyncReload));
  gulp.watch("./javascript/**/*", series(scriptsLint, scripts, browserSyncReload));
}

const js = gulp.series(scriptsLint, scripts);
const watch = gulp.parallel(watchFiles, browserSync);

exports.watch = watch;
exports.js = js;
