var AnimatorController = function() {
	this.setCircle();
	this.wiggle();
}

AnimatorController.prototype.wiggle = function() {
    var chars = $('span');
    if (chars.length > 0) {
        var i = 0;
        var doTheWiggle = function() {
            var letter = chars[i];
            $(letter).css('top', '-15px');
            setTimeout(function() {
                $(letter).css('top', '0px');
            }, 100)
            if (i++ < chars.length) {
                setTimeout(doTheWiggle, 100)
            }
        }
        doTheWiggle();
    }
}


AnimatorController.prototype.setCircle = function() {
	$('#greeting-1').circleType({radius: 600});
    $('#greeting-2').circleType({radius: 600});
}
