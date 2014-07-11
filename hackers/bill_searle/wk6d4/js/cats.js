var movePixels = 2.5;
var delayMs = 30;
var catTimer = null;
var img = document.getElementsByTagName('img')[0];

// var direction = "toRight"


// var catWalk = function() {
// 	var img = document.getElementsByTagName('img')[0];
// 	var theCat = parseInt(img.style.left);
// 	if (direction === "toRight") {
// 		img.style.left = (theCat + movePixels) + "px";
		
// 		if (theCat > window.innerWidth-img.width) {
// 			img.style.left = (theCat - movePixels) + 'px';
// 	  	img.style.WebkitTransform = 'scaleX(-1)';
// 	  	img.style.filter = 'FlipH';
// 		img.style.left = null;
// 		img.style.right = "0px";
// 	} 
// };
	
// 	if (theCat > (window.innerWidth-img.width)) {
// 		direction = "toRight";
	
// 	} else if (theCat === (window.innerWidth-img)) {
// 		direction = "toLeft";
// 		img.style.left = (theCat - movePixels) + "px"

// 	}
// };
 var moveRight = function() {
  img.style.left = null;
    img.style.right = '0px';
    img.style.left = (currentRight + movePixels) + 'px';
    img.style.WebkitTransform = 'scaleX(-1)';
		img.style.filter = 'FlipH';
		moveLeft();
  }
var moveLeft = function() {
	img.style.right = null;
	  img.style.left = '0px';
	  img.style.right = (currentLeft + movePixels) + 'px';
	  img.style.WebkitTransform = 'scaleX(1)';
		img.style.filter = 'FlipH';
  	moveRight();
	}

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
    moveRight();
 }

// THIS BIT ACTUALLY WORKS
// function catWalk() {
//   var img = document.getElementsByTagName('img')[0];
//   var currentLeft = parseInt(img.style.left);
//   var currentRight = parseInt(img.style.right);
//   img.style.left = (currentLeft + movePixels) + 'px';
//   img.style.right = (currentRight + movePixels) + 'px';

//   if (currentLeft > (window.innerWidth-img.width)) {
//     img.style.left = null;
//     img.style.right = '0px';
//     img.style.left = (currentRight + movePixels) + 'px';
//     img.style.WebkitTransform = 'scaleX(-1)';
// 		img.style.filter = 'FlipH';
//   } else if (currentRight > (window.innerWidth-img.width)) {
// 	  img.style.right = null;
// 	  img.style.left= '0px';
// 	  img.style.right = (currentLeft + movePixels) + 'px';
// 	  img.style.WebkitTransform = 'scaleX(1)';
// 		img.style.filter = 'FlipH';
// 	}
// };
// ^^^DOWN TO HERE ^^^




// // SWAGGER CAT WALKS
// function catWalk() {
//   var img = document.getElementsByTagName('img')[0];
//   var currentLeft = parseInt(img.style.left);

  // if (direction === "toRight") {
// 	  img.style.left = (currentLeft + movePixels) + 'px';
// 	  img.style.left = '0px';
// 	  }	else {
// 	  	img.style.left = (currentLeft - movePixels) + 'px';
// 	  	img.style.WebkitTransform = 'scaleX(-1)';
// 	  	img.style.filter = 'FlipH';
// 	  }	
// 	if (currentLeft > (window.innerWidth-img.width)) {
// 		direction = 'toRight';
// 	 } else if (currentRight > (window.innerWidth-img.width)) {
// 		direction = 'toLeft';
// 	}
// };

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}
// var moveLeftTimer = window.setInterval(catWalk, delayMs);
// var moveLeftTimer = function(){
	// window.setInterval(catWalk, delayMs);
// }
// SWAGGER CAT STOPS
var stopCatWalk = function() {
	window.clearInterval(catTimer)
};

// startCatWalk()
// START SWAGGER CAT
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', startCatWalk);
// SPEED UP SWAGGER CAT
var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', startCatWalk )
// STOP SWAGGER CAT
var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', stopCatWalk)
