require 'sinatra/reloader' if development?

set :public_folder, Proc.new { File.join(root, "build") }
set :static_cache_control, [:build, max_age: 60*60*24*365]

helpers do
  def valid_field?(field_name)
    true if field_name && !field_name.empty?
  end
end

not_found do
  File.read('build/404.html')
end

get '/*' do
  file_name = "build#{path}/index.html".gsub(%r{\/+},'/')
  if File.exists?(file_name)
    File.read(file_name)
  else
    raise Sinatra::NotFound
  end
end
