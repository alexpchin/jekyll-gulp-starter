const gulp     = require('gulp');
const gulpIf   = require('gulp-if');
const htmlhint = require('gulp-htmlhint');
const htmlmin  = require('gulp-htmlmin');
const config   = require('./config');

const buildHtml = () => {
  return gulp.src(`${config.destDir}${config.selectors.html}`)
    .pipe(htmlhint({ 'doctype-first': false }))
    .pipe(htmlhint.reporter('htmlhint-stylish'))
    .pipe(gulpIf(global.production, htmlmin({
      collapseWhitespace: true,
      removeComments: true
    })))
    .pipe(gulp.dest(config.destDir))
    .on('finish', () => {
      if (global.production) return;
      gulp.start('serve');
    });
};

gulp.task('build-html', ['build-jekyll'], buildHtml);
module.exports = buildHtml;
