const gulp             = require('gulp');
const browserSync      = require('browser-sync').create();
const config           = require('../package').gulp;

const serve = () => {
  browserSync.init({
    server: config.destDir,
    // ghostMode: false,
    // logFileChanges: true,
    logLevel: 'debug',
    open: true
  });
};

const reload = () => {
  browserSync.reload();
};

gulp.task('serve', serve);
gulp.task('reload', reload);
module.exports = serve;
module.exports = reload;
