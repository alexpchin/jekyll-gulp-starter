const gulp          = require('gulp');
const browserSync   = require('browser-sync');
const config        = require('./config');

const serve = () => {
  return browserSync.init(null, {
    server: {
      baseDir: config.destDir
    },
    logLevel: 'debug',
    open: true,
    notify: false
  });
};

gulp.task('serve', serve);

module.exports = serve;
