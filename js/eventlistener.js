var EventController = function() {
	this.listenToRainClicks();
	this.listenToMusicClicks();
}

EventController.prototype.listenToRainClicks = function() {
	var self = this;

	$('.cake-btn').on('click', function() {
		var cupcake = $('.cupcake-og').clone().css('display', 'block');
		cupcake.removeClass('cupcake-og').addClass('cupcake');
		self.removeRain();
		$('.rain').append(cupcake);
	})

	$('.gifts-btn').on('click', function() {
		var present = $('.present-og').clone().css('display', 'block');
		present.removeClass('present-og').addClass('present');
		self.removeRain();
		$('.rain').append(present);
	})

	$('.nat-btn').on('click', function() {
		var nat = "<img class='nat'src='assets/nat.png'></img>"
		self.removeRain();
		$('.rain').append(nat);
	})
}

EventController.prototype.listenToMusicClicks = function() {
	var self = this;

	$('.minion-btn').on('click', function() {
		self.stopMusic();
		document.getElementById('minion').play();
	})

	$('.hamster-btn').on('click', function() {
		self.stopMusic();
		document.getElementById('hamster').play();
	})

	$('.chipmunk-btn').on('click', function() {
		self.stopMusic();
		document.getElementById('chipmunk').play();
	})
}

EventController.prototype.stopMusic = function() {
	document.getElementById('hamster').pause();
	document.getElementById('minion').pause();
	document.getElementById('chipmunk').pause();
}

EventController.prototype.removeRain = function() {
	$('.cupcake').remove();
	$('.present').remove();
	$('.nat').remove();
}