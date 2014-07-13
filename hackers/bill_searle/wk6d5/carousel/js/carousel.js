// var moveNext = function(){
// 	if ($('#carousel').css('left') !== $('#carousel').css('width')) {
// 		$('#carousel').animate({
// 			left: "-=612px"}, 500)
// 		} else {
// 			$('#carousel').animate({
// 			left: "+=1224px"}, 500)
// 		}
// 	};

// var movePrevious = function(){
// 	if ($('#carousel').css('left') !== "0px") {
// 	$('#carousel').animate({
// 		left: "+=612px"}, 500)
// 	} else {
// 		$('#carousel').animate({
// 			left: "-=1224px"}, 500)
// 	}
// };

// $('#next').click(moveNext);
// $('#previous').click(movePrevious);



var moveNext = function(){
	if ($('#carousel').css('left') !== "-1224px") {
		$('#carousel').animate({
			left: "-=612px"}, 500)
		} else {
			$('#carousel').animate({
			left: "+=1224px"}, 500)
		}
	};

var movePrevious = function(){
	if ($('#carousel').css('left') !== "0px") {
	$('#carousel').animate({
		left: "+=612px"}, 500)
	} else {
		$('#carousel').animate({
			left: "-=1224px"}, 500)
	}
};

$('#next').click(moveNext);
$('#next').keypress(moveNext);

$('#previous').click(movePrevious);




// var moveNext = function(){
// 	$('#carousel').animate({
// 		left: "-=612px"}, 500)
// };	
// var movePrevious = function(){
// 	$('#carousel').animate({
// 		left: "+=612px"}, 500)
// };
// $('#next').click(moveNext);
// $('#previous').click(movePrevious);
