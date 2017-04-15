const gulp   = require('gulp');
const clean  = require('gulp-clean');
const config = require('./config');

const cleanJekyll = () => {
  return gulp.src(config.destDir, { read: false })
    .pipe(clean());
};

gulp.task('clean', cleanJekyll);
module.exports = clean;
