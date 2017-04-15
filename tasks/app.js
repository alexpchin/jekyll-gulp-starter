const gulp = require('gulp');

const buildApp = () => gulp.start(['build-html']);

gulp.task('build-app', [
  'build-js',     // Processes JS and adds to build/js
  'build-css',    // Processes CSS and adds to build/css
  'build-fonts',   // Processes fonts and adds to build/fonts
  'build-images' // Processes images and adds to build/images
], buildApp);
