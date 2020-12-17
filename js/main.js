(function($){
	$(document).ready(function(){

		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 40
		});

		$("#top").click(function () {
			$("body, html").animate({
				scrollTop: 0
			}, 800);
			return false;
		});

	});
})(jQuery);