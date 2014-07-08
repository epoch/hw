// prompt("Question")
// parseInt("777")
// alert("Answer")

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

var triangle2 = {
  sideA: 1,
  sideB: 1,
  sideC: 5
};

// var checkIfValidTriangle = function(t) {
//   if (t.sideA > t.sideB && t.sideA > t.sideC){
//     var largest = t.sideA;
//     var smaller1 = t.sideB;
//     var smaller2 = t.sideC;
//   } else if (t.sideB > t.sideA && t.sideB > t.sideC) {
//     var largest = t.sideB;
//     var smaller1 = t.sideA;
//     var smaller2 = t.sideC;
//   } else {
//     var largest = t.sideC;
//     var smaller1 = t.sideA;
//     var smaller2 = t.sideB;
//   };
//   if (smaller1 + smaller2 > largest) {
//     return true;
//   } else {
//     return false;
//   };
// };

// the sum of any two sides must be greater than the other
var checkIfValidTriangle = function(t) {
  if (t.sideA + t.sideB > t.sideC && ( t.sideA + t.sideC > t.sideB && t.sideC + t.sideB > t.sideA )) {
    return true;
  } else {
    return false;
  };
};

var areaTriangle = function(t) {
  if (checkIfValidTriangle(t)) {
    return 1/4 * Math.sqrt((t.sideA+t.sideB-t.sideC)*(t.sideA-t.sideB+t.sideC)*(-t.sideA+t.sideB+t.sideC)*(t.sideA+t.sideB+t.sideC));
  } else {
    return "Not a valid Triangle!"
  };
};

console.log( areaTriangle(triangle) );
console.log( areaTriangle(triangle2) );