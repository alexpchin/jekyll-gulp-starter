# Jekyll Gulp Starter

A boilerplate for using gulp with Jekyll.

## Sinatra

The jekyll site is wrapped in Sinatra just in case we need to setup a mailer or anything more complicated.

## Theme

The `_includes`, `_layouts` have been taken from the theme `minima` and put into the `_site` directory

## Gulp setup

The gulp files are split into different tasks in a directory.

## Environment variables

There is an environment variable: `ENV['JEKYLL_BUILD_TASK']` that denotes what task to run. When deploying, create an environment variable of `deploy` to ensure that the deploy task gets run after the rake task is executed automatically.

You also need to set the `NODE_ENV` environment for `staging` (if you have one) and `production`. The default is `development`.

## Yarn

A `yarn.lock` file is present as npm is slower...
