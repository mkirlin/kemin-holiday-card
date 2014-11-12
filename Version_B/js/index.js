$(document).ready(function() {
	// On window resize, reload
	window.onresize = function(){ location.reload(); }

	// var vid = document.getElementById("holiday_music");
	// vid.autoplay = true;
	// vid.loop = true;

	$(".kemin_logo").hide();
	$(".holiday_message").hide();
	$(".holiday_image").hide();
	// $(".holiday_image").first().show();

	animateImages($(".first_set").first());

});

function animateImages(img) {
	imgClass = $(img).attr("class");
	classColor = imgClass.match(/(\w+)\s/)[1];

	switch(classColor) {
    case "red":
      backgroundColor = "rgb(229,29,27)"
      break;
    case "yellow":
      backgroundColor = "rgb(254,197,36)"
      break;
    case "orange":
      backgroundColor = "rgb(252,103,25)"
      break;
    case "light_blue":
      backgroundColor = "rgb(58,151,181)"
      break;
    case "dark_blue":
      backgroundColor = "rgb(26,53,94)"
      break;
    case "green":
      backgroundColor = "rgb(76,157,42)"
      break;
    case "gray":
      backgroundColor = "rgb(139,138,143)"
      break;
    default:
      backgroundColor = white
	}

	$("#container").css({
		"background-color":backgroundColor
	})
	// Real values: 400, 600, 400
	$(img).fadeIn(400, function() {
		// change the background color to match the image
	}).delay(600).fadeOut(400, function() {
		if($(img).next().is('div')) {
			// If the next item is a div, slow down the animation
			animateDivs($(img).next());
		} else {
			// just run the same animation function
			animateImages($(img).next());
		}
	})
};

function animateDivs(div) {
	// Animate the words a little slower than the images
	// Real values: 400, 2000 (maybe tweak), 400
	$("#container").css({"background-color":"white"});
	$(div).fadeIn(400).delay(2000).fadeOut(400, function() {
		// then start the image animation back up
		if($(div).next().is('img')) {
			animateImages($(div).next());
		} else {
			$(".holiday_message").hide();
			$(".holiday_image").hide();
			// 
			$(".kemin_logo").show();
			// $("#test").show()
		}
	})
};