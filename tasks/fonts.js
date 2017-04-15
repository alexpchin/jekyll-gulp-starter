const gulp        = require('gulp');
const clean       = require('gulp-clean');
const eventStream = require('event-stream');
const browserSync = require('browser-sync');
const bowerFiles  = require('main-bower-files');
const gulpIf      = require('gulp-if');
const config      = require('./config');

const localFonts = () => {
  return gulp.src(`${config.src.fonts}${config.selectors.fonts}`);
};

const vendorFonts = () => {
  return gulp.src(bowerFiles(config.selectors.fonts));
};

const cleanFonts = () => {
  return gulp.src(config.dest.fonts, { read: false })
    .pipe(clean());
};

const buildFonts = () => {
  return eventStream.merge(
    localFonts(),
    vendorFonts()
  )
  .pipe(gulp.dest(config.dest.fonts))
  .pipe(gulpIf(!global.production, browserSync.stream()));
};

gulp.task('clean-fonts', cleanFonts);
gulp.task('build-fonts', ['clean-fonts'], buildFonts);
module.exports = buildFonts;
