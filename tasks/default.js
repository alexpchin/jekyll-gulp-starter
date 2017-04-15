const gulp        = require('gulp');
const runSequence = require('run-sequence');

const defaultTask = () => {
  return runSequence(
    'build-app',
    // 'serve',
    'watch'
  );
};

gulp.task('default', ['clean'], defaultTask);
module.exports = defaultTask;
