var Cloud = function() {

}

Cloud.prototype.createRain = function(timesToRain) {
	for (var i = 0; i < timesToRain; i++) {
		var rain = "<div class='rain'>";
			rain += "<div class='present'>";
			rain += "<div class='bow left'></div>";
        	rain += "<div class='bow right'></div>";
    		rain += "</div>";
    		rain += "</div>";
		$('.droppings').append(rain);
	}
}


Cloud.prototype.scatterRain = function() {
	$('.rain').each(function() {
		var randomNum = returnRandomInt(215, 30);
		$(this).css('left', randomNum);
	})
}


Cloud.prototype.makeItRain = function() {
	var totalRainDrops = $('.rain').length;
	if (totalRainDrops > 0) {
		var i = 1;
		var delayRain = function() {
			var randomNum = returnRandomInt(totalRainDrops - 1, 0),
			    currentRainDrop = $('.rain')[randomNum];
			    $(currentRainDrop).addClass('raining');
			if (i++ < totalRainDrops) {
				setTimeout(delayRain, 400);
			}
		}
		delayRain();
	}
}


function returnRandomInt(max, min) {
	return Math.floor(Math.random() * (max - min) + min);
}