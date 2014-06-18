require 'pry'
require 'pry-debugger'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require_relative 'video'

get '/' do
  redirect to '/memetube'
end

# all of memetube
get '/memetube' do
  @videos = Video.all
  erb :memetube
end

# a new video
get '/memetube/new' do
  id = params[:id]
  erb :new_video
end

# a specific video
get '/memetube/:id' do
  id = params[:id]
  @video = Video.find id
      @url = @video.url
      @embed_url = @url.split('=')


  # sql = "SELECT * FROM videos WHERE id = #{ id }"
  # @video = query_db sql
  # @video = @video.first
  erb :video
end

# edit a video
get '/memetube/:id/edit' do
  id = params[:id]
  @video = Video.find id
  # sql = "SELECT * FROM videos WHERE id = #{ id }"
  # @video = query_db sql
  # @video = @video.first
  erb :edit
end

# update a video
post '/memetube/:id' do
  video = Video.find params[:id]
  video.url = params[:url]
  video.title = params[:title]
  video.genre = params[:genre]
  video.description = params[:description]

  video.save

  # sql = "UPDATE videos SET title='#{title}', description='#{description}', url='#{url}', genre='#{genre}' WHERE id=#{ id }"
  # query_db sql

  redirect "/memetube/#{video.id}"
end

# delete a video
get '/memetube/:id/delete' do
  id = params[:id]
  video = Video.find id
  video.destroy

  redirect to "/memetube"
end

# add a video
post '/memetube' do
  video = Video.new
  video.title = params[:title]
  video.description = params[:description]
  video.url = params[:url]
  video.genre = params[:genre]

  video.save

  # sql = "INSERT INTO videos(title, description, url, genre) VALUES ('#{title}', '#{description}', '#{url}', '#{genre}')"
  # query_db sql

  redirect to "/memetube"
end

# def query_db(sql)
#   db = SQLite3::Database.new "videos.db"
#   db.results_as_hash = true
#   result = db.execute sql
#   db.close
#   result
# end