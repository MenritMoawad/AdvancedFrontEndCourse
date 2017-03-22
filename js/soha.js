jQuery(document).ready(function($) {
	
	//loop over all of them
	$.each($('.myslider'), function() {
		var slides_asked= parseInt($(this).attr('data-show-slides'));
		var slide_count = $(this).find('.slide').length;
		if(slides_asked >= slide_count)
			slides_asked=slide_count-1;
		var add=slides_asked-1;
		var slides=$(this).find('.slide');
		console.log('iam here',add);
		var slide_count2=slide_count;
		if(add > 0){
			slide_count2=slide_count+add;
			for(i = 0; i < add; ++i) {
				var bg = $(slides[i]).css('background-image');
        		bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        		console.log(bg);
    			$(this).find('.images_container').append("<div class='slide' style='background-image: url("+bg+ ")'></div>");
    			

				}
			}
		console.log(slide_count);
		var image_container_width=100*(slide_count2/slides_asked);
		var single_slider_width=100/slide_count2 ;//i added -1 here 
		$(this).find('.images_container').css('width', 100*(slide_count2/slides_asked)+"%");
		$(this).find('.slide').css('width', 100/slide_count2 + "%");
		console.log($(this).find('.slide'));
		console.log(slides_asked);
		if($(this).attr('data-arrows') == 'true'){
			var myslider=$(this);
			$(this).append("<div class='slider_nav'><button class='prev'>Previous</button><button class='next'>Next</button></div>");
			var current_slide = 0;
			$(this).find('.next').click(function(event) {
				if (current_slide === slide_count-1) {
					current_slide = 0;
				}

				else{
					current_slide++;
				}
				myslider.find('.images_container').css('right', current_slide*(image_container_width/slide_count2)+ "%");
			});

			$('.prev').click(function(event) {
				if (current_slide === 0) {
					current_slide = slide_count-1;
				}
				else{
					current_slide--;	
				}
				myslider.find('.images_container').css('right', current_slide*(image_container_width/slide_count2) + "%");
			});
	}

});

});