jQuery(document).ready(function($) {
	
	//loop over all of them
	$.each($('.myslider'), function() {
		var slides_asked= parseInt($(this).attr('data-show-slides'));
		var slide_count = $(this).find('.slide').length;
		if(slides_asked >= slide_count)
			slides_asked=slide_count-1;
		var width=$(window).width();
		var image_container_width=100*(slide_count/slides_asked);
		var single_slider_width=100/slide_count -1;
		$(this).find('.images_container').css('width', 100*(slide_count/slides_asked)+"%");
		$(this).find('.slide').css('width', 100/slide_count -1+ "%");

		console.log(slides_asked);
		if($(this).attr('data-arrows') == 'true'){
			var myslider=$(this);
			$(this).append("<div class='slider_nav'><button class='prev'>Previous</button><button class='next'>Next</button></div>");
			var current_slide = 0;
			$(this).find('.next').click(function(event) {
				if (current_slide === slide_count-slides_asked) {
					current_slide = 0;
				}

				else{
					current_slide=current_slide+slides_asked;
				}
				// $('.images_container').animate({right: current_slide*100 + "%"}, 400);
				myslider.find('.images_container').css('right', current_slide*single_slider_width*slides_asked + "%");
			});

			$('.prev').click(function(event) {
				if (current_slide === 0) {
					current_slide = slide_count-slides_asked;
				}
				else{
					current_slide=current_slide-slides_asked;
				}
				myslider.find('.images_container').css('right', current_slide*single_slider_width*slides_asked + "%");
			});
	}

});

});
