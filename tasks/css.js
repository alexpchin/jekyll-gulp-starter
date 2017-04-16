const gulp                    = require('gulp');
const bowerFiles              = require('main-bower-files');
const concat                  = require('gulp-concat');
const eventStream             = require('event-stream');
const order                   = require('gulp-order');
const sourcemaps              = require('gulp-sourcemaps');
const gulpIf                  = require('gulp-if');
const browserSync             = require('browser-sync');
const clean                   = require('gulp-clean');
const config                  = require('./config');
const postcss                 = require('gulp-postcss');
const postcssImport           = require('postcss-import');
const stylefmt                = require('stylefmt');
const stylelint               = require('stylelint');
const postcssCssnext          = require('postcss-cssnext');
const postcssCustomMedia      = require('postcss-custom-media');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssReporter         = require('postcss-reporter');
const postcssClean            = require('postcss-clean');
const size                    = require('gulp-size');

const fetchVendorCss = () => {
  return gulp.src(bowerFiles(config.selectors.css))
    .pipe(postcss([
      postcssClean
    ]))
    .pipe(concat(config.vendor.css))
    .pipe(size({ gzip: false, showFiles: true, title: 'Bower CSS' }))
    .pipe(size({ gzip: true, showFiles: true, title: 'Bower CSS' }));
};

const fetchLocalCss = () => {
  return gulp.src(`${config.src.css}${config.selectors.css}`)
    .pipe(postcss([
      stylefmt // Fixes small CSS issues, in accordance with stylint rules
    ]))
    .pipe(gulp.dest(config.src.css))
    .pipe(gulp.src(`${config.src.css}${config.main.css}`))
    .pipe(postcss([
      postcssImport({
        plugins: [
          stylelint() // Uses npm package stylelint-config-standard setup
        ]
      }),
      postcssCustomMedia,
      postcssCustomProperties,
      postcssCssnext,
      postcssReporter
    ]))
    .pipe(concat(config.output.css))
    .pipe(size({ gzip: false, showFiles: true, title: 'Local CSS' }))
    .pipe(size({ gzip: true, showFiles: true, title: 'Local CSS' }));
};

const cleanCss = () => {
  return gulp.src(config.dest.css, { read: false })
    .pipe(clean());
};

const buildCss = () => {
  return eventStream.merge(
    fetchVendorCss(),
    fetchLocalCss()
  )
  .pipe(order([
    config.vendor.css,
    config.output.css
  ]))
  .pipe(concat(config.output.css))
  .pipe(sourcemaps.init())
  .pipe(postcss([
    postcssCssnext // includes autoprefixer
  ]))
  .pipe(gulpIf(global.production, postcss([
    postcssClean
  ])))
  .pipe(size({ gzip: false, showFiles: true, title: 'CSS' }))
  .pipe(size({ gzip: true, showFiles: true, title: 'CSS' }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.dest.css))
  .pipe(gulpIf(!global.production, browserSync.stream()));
};

gulp.task('clean-css', cleanCss);
gulp.task('build-css', ['clean-css'], buildCss);
module.exports = buildCss;
