var fortuneTeller =  function(x,y,z,n) {
  console.log("You will be a "+ x +" in "+ y +", and married to "+z+" with "+n+" kids.")
}

fortuneTeller("Astrophysist","Tokyo","No one","50");
fortuneTeller("Phsycologist","CA","Everyone","0");

var calculateAge = function(birthYear,currentYear) {
  var n1 = currentYear - birthYear;
  var n2 = n1 - 1;
  console.log("The person is either "+ n2 + " or " + n1)
};

var date = new Date();
calculateAge(1989, date.getFullYear() );

var calculateSupply = function(age,amtPerDay) {
  var maxAge = 100;
  var lifeTimeSupply = (maxAge - age) * amtPerDay * 365.0;
  console.log("You will need "+ lifeTimeSupply.toFixed(2) +" to last you until the ripe old age of "+ maxAge);
};

calculateSupply(24,1);
calculateSupply(50,6.5);
calculateSupply(4,1.7);

var calcCircumfrence = function(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference);
};

calcCircumfrence(5);

var calcArea = function(radius) {
  var area = Math.PI * radius * radius;
  console.log("The area is " + area);
};

calcArea(5);

var celsiusToFahrenheit = function(c) {
  var f = c * 9 / 5 + 32;
  console.log(c + "°C is " + f + "°F");
}

var fahernheitToCelcius = function(f){
  var c = (f - 32) * 5 / 9;
  console.log(f + "°F is " + c + "°C");
}

celsiusToFahrenheit(25);
fahernheitToCelcius(80);
