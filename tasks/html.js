const gulp        = require('gulp');
const gulpIf      = require('gulp-if');
const htmlhint    = require('gulp-htmlhint');
const htmlmin     = require('gulp-htmlmin');
const browserSync = require('browser-sync');
const config      = require('./config');
const serve       = require('./serve');

const lintHtml = () => {
  gulp.src(`${config.destDir}${config.selectors.html}`)
    .pipe(htmlhint({ 'doctype-first': false }))
    .pipe(htmlhint.reporter('htmlhint-stylish'))
    .pipe(gulpIf(global.production, htmlmin({
      collapseWhitespace: true,
      removeComments: true
    })))
    .pipe(gulp.dest(config.destDir));
};

const buildHtml = () => {
  lintHtml();
  return serve();
};

const reloadHtml = () => {
  lintHtml();
  return browserSync.reload();
};

gulp.task('build-html', ['build-jekyll'], buildHtml);
gulp.task('reload-html', ['build-jekyll'], reloadHtml);
