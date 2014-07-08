var numbers = prompt("Enter your numbers separated by commas:").split(",");

var operator = prompt("What do you want to do with them? Add(+), subtract(-), muliply(*), divide(/), remainder(%), square root(sqrt)?");


total = parseInt(numbers[0]);

switch (operator) {
  case "+":
    for (var i = 1; i < numbers.length; i++) {
      total += parseInt(numbers[i]);
    };
    break;
  case "-":
    for (var i = 1; i < numbers.length; i++) {
      total -= parseInt(numbers[i]);
    };
    break;
  case "*":
    for (var i = 1; i < numbers.length; i++) {
      total *= parseInt(numbers[(i)]);
    };
    break;
  case "/":
    for (var i = 1; i < numbers.length; i++) {
      total /= parseInt(numbers[i]);
    };
    break;
  case "%":
    for (var i = 1; i < numbers.length; i++) {
      total % parseInt(numbers[i]);
    };
    break;
  case "sqrt":
    for (var i = 1; i < numbers.length; i++) {
      Math.sqrt(parseInt(numbers[i]));
    };
    break;
};


alert( "The result of " + numbers.join(operator) +" is "+ total );