$(document).ready(function() {
	// All items on page are hidden
	$(".holiday_image").hide();
	$(".logo").hide();
	$(".holiday_message").hide();
	// $(".big_logo").show();

	// Load images into an array when they arrive on the page

	imageArray = [];
	$(".holiday_image").each(function(index) {
		imageArray.push($(this).attr('id'))
	});

	fadeInImages();

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
}

function fadeInMessageAndLogo() {
	// Once you've shown the message, wait a few seconds and then show the logo
	$(".holiday_message").fadeIn(300).delay(5000).fadeOut(300, function() {
		$(".holiday_message").remove();
		$(".big_logo").fadeIn(300);
	});
}