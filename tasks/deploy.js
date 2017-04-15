const gulp        = require('gulp');
const runSequence = require('run-sequence');

const deployTask = () => {
  global.production = true;
  return runSequence(
    'build-app',
    'sitemap'
  );
};

gulp.task('deploy', deployTask);
