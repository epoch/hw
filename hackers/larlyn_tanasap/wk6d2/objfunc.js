var monsterFactory = function(monsterName, creator) {
  var monster = {
    name: monsterName,
    creator: creator,
    sfx: function() {
      console.log("DUN DUN DUNNNN");
    },
    eat: function(person) {
      console.log(this.name + " has eaten " + person + ". They will be missed.");
    },
    size: function(peopleEaten) {
      console.log(this.name + " is now the size of " + peopleEaten + " people.");
    },
    destroyCity: function() {
      console.log("MUAHAHAHAHAHAH");
    }
  };

  return monster;
};

var thing = monsterFactory("The Thing","Professor Dusselldorf");

console.log(thing.name);
thing.sfx();
thing.eat(thing.creator); // 'this' is only referred to within an object, this.creator will not work
thing.size(5);
thing.destroyCity();

var blob = monsterFactory("The Blob","Mad scientist B movie");

console.log(blob.name);
blob.sfx();
blob.eat("That guy from the movies");
blob.size(20);
