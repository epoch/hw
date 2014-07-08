var lines = {
  N: ["Times Square", "34th on N", "28th on N", "23rd on N", "Union Square", "8th on N"],
  L: ["8th on L", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th on 6", "23rd on 6", "Union Square", "Astor Place"]
};

// var startStop = prompt("Where are you getting on?")
// var endStop = prompt("Where re")
var startStop = "Times Square";
var startLine = "N";
var endStop = "Grand Central";
var endLine = "6";

var intersect = "Union Square";

var tripSection = function(lineOnTripSection,getOn,getOff) {
  if (getOn < getOff) {
   return lines[lineOnTripSection].slice(getOn,(getOff+1));
  } else {
   return lines[lineOnTripSection].slice(getOff,(getOn+1)).reverse();
  };
};

var wholeTrip = function(lines) {
  var getOn = lines[startLine].indexOf(startStop);
  var getOff = lines[endLine].indexOf(endStop);
  var intersectOn = lines[startLine].indexOf(intersect);
  var intersectOff = lines[endLine].indexOf(intersect);
  if (startLine === endLine) {
    return tripSection(startLine,getOn,getOff);
  } else {
    var firstPart = (tripSection(startLine,getOn,intersectOn).slice(0,-2)); // slice removes double union sq
    var allStops = firstPart.concat(tripSection(endLine,intersectOff,getOff));
    // console.log(allStops);
    return allStops;
  };
};

console.log("There are "+ (wholeTrip(lines).length - 1) +" stops after " + startStop)
console.log("Your stops are " + wholeTrip(lines).join(", ") + ".");