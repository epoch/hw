myBooks = [
  {title: "The Hobbit",
    author: "J.R.R Tolkien",
    alreadyRead: false
  },
  {title: "Harry Potter and the Philosophers Stone",
    author: "J.K Rowling",
    alreadyRead: true
  },
  {title: "The Alchemist",
    author: "Paulo Coelho",
    alreadyRead: true
  },
];

var checkIfRead = function(books) {
  for(var i = 0; i < books.length; i++) {
    if (books[i].alreadyRead === true){
      var readStatus = "already"}
    else {
      var readStatus = "not"
    }
    console.log("You've "+ readStatus+" read " + books[i].title + " by " + books[i].author );
  };
};

checkIfRead(myBooks);