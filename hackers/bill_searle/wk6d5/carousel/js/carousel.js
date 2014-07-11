var moveNext = function(){
	$('#carousel').animate({
		left: "-=612px"}, 500)
};	
var movePrevious = function(){
	$('#carousel').animate({
		left: "+=612px"}, 500)
};
$('#next').click(moveNext);
$('#previous').click(movePrevious);
