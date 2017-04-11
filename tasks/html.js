const gulp             = require('gulp');
const gulpIf           = require('gulp-if');
const htmlhint         = require('gulp-htmlhint');
const htmlmin          = require('gulp-htmlmin');
const browserSync      = require('browser-sync');
const config           = require('../package').gulp;

const validateHtml = () => {
  return gulp.src(`${config.destDir}${config.selectors.html}`)
  .pipe(htmlhint({'doctype-first': false}))
  .pipe(htmlhint.reporter('htmlhint-stylish'));
};

const buildHtml = () => {
  return validateHtml()
    .pipe(gulpIf(global.production, htmlmin({collapseWhitespace: true, removeComments: true})))
    .pipe(gulp.dest(config.destDir))
    .pipe(gulpIf(!global.production, browserSync.stream()));
};

gulp.task('build-html', buildHtml);
module.exports = buildHtml;
