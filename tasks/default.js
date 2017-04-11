const gulp = require('gulp');

const defaultTask = () => {
  return gulp.start(['serve', 'watch']);
};

gulp.task('default', ['build-jekyll'], defaultTask);
module.exports = defaultTask;
