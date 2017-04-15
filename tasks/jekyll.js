const gulp  = require('gulp');
const cp    = require('child_process');

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
    command = ['exec','jekyll','build','--drafts','--config','_config.yml'];
    break;
}

const buildJekyll = (done) => {
  // No return here!
  cp.spawn('bundle', command, { stdio: 'inherit' })
    .on('close', done);
};

gulp.task('build-jekyll', buildJekyll);
module.exports = buildJekyll;
