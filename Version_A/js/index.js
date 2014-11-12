$(document).ready(function() {
	// On window resize, reload
	window.onresize = function(){ location.reload(); }

	// var vid = document.getElementById("holiday_music");
	// vid.autoplay = true;
	// vid.loop = true;

	$(".kemin_logo").hide();
	$(".holiday_message").hide();
	$(".holiday_image").hide().each(function(index) {
		// After images are hidden, place them randomly around the page.
		var posx = (Math.random() * ($(document).width() - 240)).toFixed();
		var posy = (Math.random() * ($(document).height() - 200)).toFixed();
		$(this).css({
      'position':'absolute',
      'left':posx+'px',
      'top':posy+'px',
    })
	});

	animateImages($(".first_set").first());

});

function animateImages(img) {
	// Real values: 400, 600, 400
	$(img).fadeIn(100).delay(100).fadeOut(100, function() {
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
	$(div).fadeIn(100).delay(100).fadeOut(100, function() {
		// then start the image animation back up
		if($(div).next().is('img')) {
			animateImages($(div).next());
		} else {
			$(".holiday_message").hide();
			$(".holiday_image").hide();
			$(".kemin_logo").show();
			// $("#test").show()
		}
	})
};