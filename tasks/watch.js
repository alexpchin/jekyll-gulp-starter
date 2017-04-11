const gulp        = require('gulp');
const config      = require('../package').gulp;
const browserSync = require('browser-sync');

const watch = () => {
  gulp.watch([
    `${config.src.scss}${config.selectors.scss}`,
    `${config.src.scss}${config.main.scss}`
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
    `${config.srcDir}${config.selectors.all}`,
    `!${config.src.scss}${config.selectors.scss}`,
    `!${config.src.js}${config.selectors.js}`,
    `!${config.src.images}${config.selectors.images}`,
    `!${config.src.fonts}${config.selectors.fonts}`
  ], ['rebuild-jekyll']);
};

gulp.task('watch', watch);
module.exports = watch;
