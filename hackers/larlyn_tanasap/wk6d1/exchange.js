var dollarsToPounds = function(dollars){
  var AUDToGBP = 0.5455;
  var pounds = dollars * AUDToGBP;
  console.log("$" + dollars +" is £" + pounds.toFixed(2));
}

var poundsToDollars = function(pounds){
  var GBPToAUD = 1.833;
  var dollars = pounds * GBPToAUD;
  console.log("£"+ pounds +" is $"+ dollars.toFixed(2));
}

dollarsToPounds(20);
poundsToDollars(5);