var favRecipe = {
  title: "Pizza",
  serves: 1,
  ingredients: ["flour", "yeast", "water","tomato","cheese","bacon"]
};

console.log( favRecipe.title );
console.log( "Serves: " + favRecipe.serves );
console.log( "Ingredients:" );
for (var i = 0; i < favRecipe.ingredients.length; i++) {
  console.log( favRecipe.ingredients[i] );
};
