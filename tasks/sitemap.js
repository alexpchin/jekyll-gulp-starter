const gulp    = require('gulp');
const sitemap = require('gulp-sitemap');
const config  = require('./config');

const jekyllSitemap = () => {
  gulp.src([`${config.destDir}${config.selectors.html}`], {
    read: false
  })
  .pipe(sitemap({
    siteUrl: 'https://www.wearepad.com'
  }))
  .pipe(gulp.dest(config.destDir));
};

gulp.task('sitemap', jekyllSitemap);
module.exports = jekyllSitemap;
