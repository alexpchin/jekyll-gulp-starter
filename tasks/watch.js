const gulp   = require('gulp');
const config = require('./config');

const watch = () => {
  gulp.watch([
    `${config.src.css}${config.selectors.css}`
  ], ['build-css']);

  gulp.watch([
    `${config.src.js}${config.selectors.js}`
  ], ['build-js']);

  gulp.watch([
    `${config.src.images}${config.selectors.images}`
  ], ['build-images']);

  gulp.watch([
    `${config.src.fonts}${config.selectors.fonts}`
  ], ['build-fonts']);

  gulp.watch([
    `${config.srcDir}${config.selectors.html}`
  ], ['reload-html']);
};

gulp.task('watch', watch);
module.exports = watch;
