Author.destroy_all
Book.destroy_all

Author.create(:name => 'Andy McNab', :nationality => 'English', :dob => '1959/12/28', :image =>'http://www.thenewsgrind.com/wp-content/uploads/2010/06/andy-mcnab.jpg')
Author.create(:name => 'J. K. Rowling', :nationality => 'English', :dob => '1965/07/31', :image =>'http://i.telegraph.co.uk/multimedia/archive/02348/JK-Rowling-SUM_2348620b.jpg')
Book.create(:title => 'Remote Control', :pages => '512', :isbn => '0552163538', :image =>'http://ecx.images-amazon.com/images/I/51450Js2hZL.jpg')
Book.create(:title => 'Harry Poter', :pages => '728', :isbn => '0552325862', :image =>'http://2.bp.blogspot.com/_5tqTFcNTGU0/SrficZcHl6I/AAAAAAAAAX4/_DNQGK5-R1A/s800/Harry+Potter+and+the+Chamber+of+Secrets.bmp')
