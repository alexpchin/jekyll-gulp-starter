const gulp = require('gulp');

const buildApp = function() {
  return gulp.start([
    'build-js',
    'build-css',
    'build-fonts',
    'build-images',
    'build-html'
  ]);
};

gulp.task('build-app', ['build-jekyll'], buildApp);
module.exports = buildApp;
