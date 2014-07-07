class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
    	t.string :title
    	t.integer :pages
    	t.integer :isbn
    	t.text :image
    	t.timestamps
    end
  end
end
