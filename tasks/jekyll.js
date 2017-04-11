const gulp        = require('gulp');
const cp          = require('child_process');
const runSequence = require('run-sequence');

let command;
switch (process.env.NODE_ENV) {
  case 'development':
    command = [
      'exec',
      'jekyll',
      'build',
      '--drafts',
      '--config',
      '_config.yml'
    ];
    break;
  case 'staging':
    command = [
      'exec',
      'jekyll',
      'build',
      '--drafts',
      '--config',
      '_config.yml,_config_staging.yml'
    ];
    break;
  case 'production':
    command = [
      'exec',
      'jekyll',
      'build',
      '--config',
      '_config.yml,_config_production.yml'
    ];
    break;
  default:
    command = [
      'exec',
      'jekyll',
      'build',
      '--drafts',
      '--config',
      '_config.yml'
    ];
    break;
}

const buildJekyll = (done) => {
  return cp.spawn('bundle', command, { stdio: 'inherit' })
    .on('close', done);
};

const rebuildJekyll = (done) => {
  runSequence('build-jekyll', 'build-html', 'reload', done);
};

gulp.task('build-jekyll', buildJekyll);
gulp.task('rebuild-jekyll', rebuildJekyll);
module.exports = buildJekyll;
module.exports = rebuildJekyll;
