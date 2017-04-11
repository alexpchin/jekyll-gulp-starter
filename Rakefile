namespace :assets do
  desc 'Building site for production using Ruby but executing JS'
  task :precompile do
    sh "bower install && gulp #{ENV['JEKYLL_BUILD_TASK']}"
  end
end
