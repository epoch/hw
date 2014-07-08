var greaterNum = function(x,y) {
  if (x > y) {
    console.log(x);
  } else {
    console.log(y);
  };
}

greaterNum(10,3);

var helloWorld = function(language) {
  if (language === "en") {
    console.log("Hello World");
  } else if (language === "de") {
    console.log("Auf wiederzehn")
  } else if (language === "es") {
    console.log("Hola mundo");
  }
}

helloWorld('es');

var assignGrade = function(score) {
  if (score >= 90) {
    console.log("You get a grade A");
  } else if (score >= 75) {
    console.log("You get a grade B");
  } else if (score >= 65) {
    console.log("You get a grade C");
  } else if (score >= 55) {
    console.log("You get a grade D");
  } else {
    console.log("You get a grade F");
  }
}

assignGrade(78);

var pluralize = function(noun,num) {
  if (num > 1) {
    if (noun == "goose") {
      console.log(num + " " + "geese");
    } else {
      console.log(num + " " + noun + "s");
    }
  } else {
    console.log(num + " " + noun);
  }
}

pluralize("dog",5);
pluralize("cat",1);
pluralize("goose",7);
pluralize("goose",1);