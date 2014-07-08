var lines = {
  n: ['ts', '34th', '28th', '23rd', 'us', '8th'],
  l: ['8th', '6th', 'us', '3rd','1st'],
  six: ['gc', '33rd', '28th', '23rd', 'us','ap']
}

var startLine = "n"
var startStation = "us"
var endLine = "l"
var endStation = "us"

var startStation = lines[startLine].indexOf(startStation)
var endStation = lines[endLine].indexOf(endStation) 

var intersect1 = lines[startLine].indexOf('us')
var intersect2 = lines[endLine].indexOf('us')

if (startLine === endLine) {
	if (startStation < endStation) {
		var tripSlice = lines[startLine].slice(startStation, endStation + 1);
		// var trip1 = tripSlice.length
		} else {
			var tripSlice = lines[startLine].slice(endStation, startStation + 1);
	};

	var trip1 = tripSlice.length;
	console.log("Your trip will be " + trip1 + " stops.");
	
	} else { 
		if (startStation <= intersect1) {
		var tripSlice1 = lines[startLine].slice(startStation, intersect1 + 1);
		};
		if (endStation <= intersect2) {
			var tripSlice2 = lines[endLine].slice(endStation, intersect2 +1);
			tripSlice2.reverse()
			tripSlice2.shift()
		};
		if (startStation >= intersect1) {
			var tripSlice1 = lines[startLine].slice(intersect1, startStation + 1);
			tripSlice1.reverse()
		};
		if (endStation >= intersect2) {
			var tripSlice2 = lines[endLine].slice(intersect2, endStation + 1);
		};

		if ((startStation === endStation && startLine === endLine) || trip1 === "us" ) {
			trip1
		};
		var trip1 = tripSlice1.length;
		var trip2 = tripSlice2.shift().length;
		totalTrip = trip1 + trip2
		console.log("Your trip will be " + (totalTrip -1) + " stops.");
		console.log("You will pass through " + tripSlice1 + "," + tripSlice2 + " staions")
};