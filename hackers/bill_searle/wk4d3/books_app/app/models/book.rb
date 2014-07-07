# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  pages       :integer
#  isbn        :integer
#  image       :text
#  created_at  :datetime
#  updated_at  :datetime
#  author_id   :integer
#  description :text
#

class Book <ActiveRecord::Base
	belongs_to :author
end
