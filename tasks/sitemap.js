const gulp    = require('gulp');
const sitemap = require('gulp-sitemap');

const jekyllSitemap = () => {
  gulp.src([
    '!build/bower_components/**',
    'build/**/*.html'
  ], {
    read: false
  })
  .pipe(sitemap({
    siteUrl: 'https://www.wearepad.com'
  }))
  .pipe(gulp.dest('./build'));
};

gulp.task('sitemap', jekyllSitemap);
module.exports = jekyllSitemap;
