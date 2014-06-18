require 'pry'
require 'pry-debugger'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require_relative 'gig'

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  redirect to '/gigsta'
end

# all of gigsta
get '/gigsta' do
  @gigs = Gig.all
  erb :gigsta
end

# a new gig
get '/gigsta/new' do
  id = params[:id]
  erb :new_gig
end

# a specific gig
get '/gigsta/:id' do
  id = params[:id]
  @gig = Gig.find id

  erb :gig
end

# edit a gig
get '/gigsta/:id/edit' do
  id = params[:id]
  @gig = Gig.find id
  erb :edit
end

# update a gig
post '/gigsta/:id' do
  id = params[:id]
  @gig = Gig.find id
  @gig.venue = params[:venue]
  @gig.gigdate = params[:gigdate]
  @gig.time = params[:time]
  @gig.address = params[:address]

  @gig.save

redirect "/gigsta/#{@gig.id}"
end

# delete a gig
get '/gigsta/:id/delete' do
  id = params[:id]
  @gig = Gig.find id
  @gig.destroy

  redirect to "/gigsta"
end

# add a gig
post '/gigsta' do
  gig = Gig.new
  gig.venue = params[:venue]
  gig.gigdate = params[:gigdate]
  gig.time = params[:time]
  gig.address = params[:address]

  gig.save

  redirect to "/gigsta"
end