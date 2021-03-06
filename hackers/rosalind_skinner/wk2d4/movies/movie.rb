require 'active_record'
require 'pry'

ActiveRecord::Base.logger = Logger.new(File.open('database.log','w'))

ActiveRecord::Base.establish_connection(
  :adapter =>'sqlite3',
  :database =>'movies.db'
)

class Movie < ActiveRecord::Base
end