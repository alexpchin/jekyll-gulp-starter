const gulp        = require('gulp');
const clean       = require('gulp-clean');
const eventStream = require('event-stream');
const config      = require('../package').gulp;

const cleanJs = () => {
  return gulp.src(config.dest.js, { read: false })
    .pipe(clean());
};

const cleanCss = () => {
  return gulp.src(config.dest.css, { read: false })
    .pipe(clean());
};

const cleanFonts = () => {
  return gulp.src(config.dest.fonts, { read: false })
    .pipe(clean());
};

const cleanDest = () => {
  return gulp.src(config.destDir, { read: false })
    .pipe(clean());
};

const cleanAll = () => {
  return eventStream.merge(
    cleanJs(),
    cleanCss(),
    cleanFonts(),
    cleanDest()
  );
};

gulp.task('clean', cleanAll);
module.exports = cleanAll;
