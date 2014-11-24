$(document).ready(function() {
	// Play music on page load
	var holiday_music = document.getElementById("holiday_music");
	holiday_music.autoplay = true;
	holiday_music.loop = true;

	// All items on page are hidden
	$(".holiday_image").hide();
	$(".logo").hide();
	$(".holiday_message").hide();

	// Load images into an array when they arrive on the page
	imageArray = [];
	$(".holiday_image").each(function(index) {
		imageArray.push($(this).attr('id'))
	});

	// Delay images until after music starts
	var delayedStart = setInterval(function() {fadeInImages()}, 1000);
});

function fadeInImages() {
	// Pick items from the array at random, fade them in
	// If array is empty, fade in final logo
	if(imageArray.length > 0) {
		var randomIndex = Math.floor((Math.random() * imageArray.length));
		var imageToFadeIn = imageArray[randomIndex];
		imageArray.splice(randomIndex, 1);
		$("#"+imageToFadeIn).fadeIn(600, function() {
			fadeInImages();
		});
	} else {
		$("#small_logo").fadeIn(600, function() {
			$("#small_logo").delay(2000).fadeOut(300, function() {
				$(".holiday_image").fadeOut(300, function() {
					// If everything is loaded, wait a beat, then fade out everything and show the message
					fadeInMessageAndLogo();
				});
			});
		});
	};
};

function fadeInMessageAndLogo() {
	// Once you've shown the message, wait a few seconds and then show the logo
	$(".holiday_message").fadeIn(300).delay(5000).fadeOut(300, function() {
		$(".holiday_message").remove();
		$("#small_logo").remove();
		$(".big_logo").fadeIn(300);
	});
};