const gulp = require('gulp');

const deployTask = () => {
  return gulp.start(['sitemap']);
};

gulp.task('deploy', () => {
  global.production = true;
  return gulp.start(['build-app'], deployTask);
});
