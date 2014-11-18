$(document).ready(function() {
	window.onresize = function(){ location.reload(); }

	var holiday_music = document.getElementById("holiday_music");
	holiday_music.autoplay = true;
	holiday_music.loop = true;
	
	$(".holiday_image").hide();
	$(".holiday_message").hide();
	$(".logo").hide();

	animateImages($(".holiday_image").first());

	var firstTransition = setTimeout(function() {
		$(".holiday_image").fadeOut(400, function() {
			$(".holiday_message").fadeIn();
		});
	}, 16500);

	var secondTransition = setTimeout(function() {
		$(".holiday_message").fadeOut(400, function() {
			$(".logo").fadeIn();
		});
	}, 22500);
});

function animateImages(img) {
	$(img).fadeIn(600, function() {
		animateImages($(img).next(".holiday_image"));
	})
};