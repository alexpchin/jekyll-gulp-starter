# Set the encoding
Encoding.default_internal = Encoding::UTF_8

require "rubygems"
require "bundler"
Bundler.require

# Set up asset compression
use Rack::Deflater

require './application'
run Sinatra::Application
