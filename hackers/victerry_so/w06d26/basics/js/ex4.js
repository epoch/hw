// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var x = 0; x < 20; x++) {
  if (x % 2 === 0) {
    console.log(x + ' is even')
  }
  else {
    console.log(x + ' is odd')
  }
};

// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 10; y++) {
  console.log(x + ' * ' + y + ' = ' + (x * y))
  }
};

// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var assignGrade = function(score) {
  if (score >= 90) {
    console.log('A')
  } else if (score >= 80) {
    console.log('B')
  } else if (score >= 70) {
    console.log('C')
  } else if (score >= 60) {
    console.log('D')
  } else if (score >= 50) {
    console.log('E')
  } else {
    console.log('F')
  }
};

for (grade = 60; grade < 100; grade++) {
  assignGrade(grade)
};