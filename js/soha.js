jQuery(document).ready(function($) {
	
	//loop over all of them
	$.each($('.myslider'), function() {
	if($(this).attr('data-arrows') == 'true'){
		var myslider=$(this);
		$(this).append("<div class='slider_nav'><button class='prev'>Previous</button><button class='next'>Next</button></div>");
		var slide_count = $(this).find('.slide').length;
		var current_slide = 0;

		$(this).find('.images_container').css('width', 100*slide_count +"%");
		$(this).find('.slide').css('width', 100/slide_count + "%");

		$(this).find('.next').click(function(event) {
			if (current_slide === slide_count-1) {
				current_slide = 0;
			}

			else{
				current_slide++;
			}
			// $('.images_container').animate({right: current_slide*100 + "%"}, 400);
			myslider.find('.images_container').css('right', current_slide*100 + "%");
		});

		$('.prev').click(function(event) {
			if (current_slide === 0) {
				current_slide = slide_count-1;
			}
			else{
				current_slide--;
			}
			myslider.find('.images_container').css('right', current_slide*100 + "%");
		});
}

});

});
