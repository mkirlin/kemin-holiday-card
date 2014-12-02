$(document).ready(function() {

	// All items on page are hidden
	$(".holiday_image").css("opacity", 0)
	$(".logo").hide();
	$(".holiday_message").hide();

	// Load images into an array when they arrive on the page
	imageArray = [];
	$(".holiday_image").each(function(index) {
		imageArray.push($(this).attr('id'))
	});

	// Play music on page load
	holiday_music = new Howl({
		urls: ["assets/holiday_music.mp3", "assets/holiday_music.ogg"],
		autoplay:true,
		onplay: function() {
			var delayStart = setInterval(function() {fadeInImages()}, 1500);
		}
	});

});

function fadeInImages() {
	// Pick items from the array at random, fade them in
	// If array is empty, fade in final logo
	if(imageArray.length > 0) {
		var randomIndex = Math.floor((Math.random() * imageArray.length));
		var imageToFadeIn = imageArray[randomIndex];
		imageArray.splice(randomIndex, 1);
		$("#"+imageToFadeIn).fadeTo(800, 1, function() {
			fadeInImages();
		});
	} else {
		$("#small_logo").fadeIn(600, function() {
			$(".block").delay(2000).fadeOut(300, function() {
				fadeInMessageAndLogo();
			});
		});
	};
};

function fadeInMessageAndLogo() {
	$(".holiday_message").fadeIn(800).delay(6000).fadeOut(800, function() {
		$(".holiday_message").remove();
		$("#small_logo").remove();
		$(".big_logo").fadeIn(800, function() {
			var delayFinish = setInterval(function() {
				$(".big_logo").fadeOut(1000, function() {
					holiday_music.fadeOut(0.0, 1500);
				});
			}, 6000);
		});
	});
};