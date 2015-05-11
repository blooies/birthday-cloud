$(document).ready(function() {

	var cloud = new Cloud(),
	    eventController = new EventController(),
	    animatorController = new AnimatorController();

	setTimeout(function() {
		cloud.createRain(175);
		cloud.scatterRain();
		cloud.makeItRain();
	}, 1000)

})