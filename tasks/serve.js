const gulp          = require('gulp');
const browserSync   = require('browser-sync');
const config        = require('./config');

const serve = () => {
  // Check if an instance of browserSync has already been created
  // if it has, then reload the current instance - allows for re-use
  // of this serve task
  if (browserSync.instances.length > 0) {
    return browserSync.reload();
  }

  return browserSync.init(null, {
    server: config.destDir,
    open: true,
    notify: false
  });
};

gulp.task('serve', serve);
module.exports = serve;
