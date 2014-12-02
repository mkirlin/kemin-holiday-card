$(document).ready(function() {
	// Play music on page load
	lowLag.init({"urlPrefix":"assets/", "audioTagTimeToLive":65000});
	lowLag.load(["holiday_music.mp3","holiday_music.ogg"],"holiday_music");
	lowLag.play("holiday_music");

	// All items on page are hidden
	$(".holiday_image").css("opacity", 0)
	$(".logo").hide();
	$(".holiday_message").hide();

	// Load images into an array when they arrive on the page
	imageArray = [];
	$(".holiday_image").each(function(index) {
		imageArray.push($(this).attr('id'))
	});

	// Delay images until after music starts
	var delayedStart = setInterval(function() {fadeInImages()}, 1800);


});

function fadeInImages() {
	// Pick items from the array at random, fade them in
	// If array is empty, fade in final logo
	if(imageArray.length > 0) {
		var randomIndex = Math.floor((Math.random() * imageArray.length));
		var imageToFadeIn = imageArray[randomIndex];
		imageArray.splice(randomIndex, 1);
		$("#"+imageToFadeIn).fadeTo("slow", 1, function() {
			fadeInImages();
		});
	} else {
		$("#small_logo").fadeIn(600, function() {
			$(".block").delay(2000).fadeOut(300, function() {
				// If everything is loaded, wait a beat, then fade out everything and show the message
				fadeInMessageAndLogo();
			});
		});
	};
};

function fadeInMessageAndLogo() {
	// Once you've shown the message, wait a few seconds and then show the logo
	$(".holiday_message").fadeIn(300).delay(5000).fadeOut(300, function() {
		$(".holiday_message").remove();
		$("#small_logo").remove();
		$(".big_logo").fadeIn(300, function() {
			setInterval(function() {
				$('#lowLag').animate({volume: 0.0}, 6000)
			}, 5000);
		});
	});
};