jQuery(document).ready(function($) {
	
	//loop over all of them
	$.each($('.myslider'), function() {
		var slides_asked= parseInt($(this).attr('data-show-slides'));
		var slide_count = $(this).find('.slide').length;
		if(slides_asked >= slide_count)
			slides_asked=slide_count-1;
		var add=slides_asked-1;
		var slides=$(this).find('.slide');
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
		/////////////////////////////////////////////////////////////////////////////////////checking if it is a dot/arrow
		if($(this).attr('auto-play') == 'false'){
			if($(this).attr('data-arrows') == 'true' && $(this).attr('data-dots') =='true'){
				//add the dots
				console.log('both are true');
				var current_slide = 0;
				var myslider=$(this);
				var ol_appended="<div class='wrapper'><i class='prev icon-left-open'></i><ol class='ol-dots'>";
				for(i = 0; i < slide_count; ++i) {
						if(i==0){
							ol_appended+=("<li class='li-dots ' style='background:#b3cccc'></li>");
						}
						else
		    				ol_appended+=("<li class='li-dots  '></li>");
		    	}
		    	ol_appended+="</ol><i class='next icon-right-open'></i><div class='clear'></div></div>";
		    	$(this).append(ol_appended);
		    	myslider.find('.li-dots:nth-child('+(current_slide+1)+')').css('background',' #D3D3D3');
		    	myslider.find('.li-dots:nth-child('+(current_slide+1)+')').css('filter',' opacity(100%)');
		    	//filter should be opacity(100%);
		    	//the click even
		    	$(this).find('.li-dots').bind('click', function(){
			        var index = $(this).index() ;
			        current_slide=index;
			        myslider.find('.images_container').css('right', index*(image_container_width/slide_count2)+ "%");
			        //change the color of the dots
			        var li_items=myslider.find(".li-dots");
			        $.each(li_items, function(index, val) {
			        	 $(this).css('background','#f5f5f0');
			        	 $(this).css('filter',' opacity(30%)');
			        });
			        myslider.find('.li-dots:nth-child('+(current_slide+1)+')').css('background',' #FFF');
			        myslider.find('.li-dots:nth-child('+(current_slide+1)+')').css('filter','opacity(100%)');
		     
				});
				////add the arrows
				
				$(this).find('.next').click(function(event) {
					if (current_slide === slide_count-1) {
						current_slide = 0;
					}

					else{
						current_slide++;
					}
					myslider.find('.images_container').css('right', current_slide*(image_container_width/slide_count2)+ "%");
					var li_items=myslider.find(".li-dots");
			        $.each(li_items, function(index, val) {
			        	 $(this).css('background','#f5f5f0');
			        	  $(this).css('filter',' opacity(30%)');
			        	 if(index ==current_slide ){
			        	 	 $(this).css('background','#D3D3D3');
			        	 	 $(this).css('filter','opacity(100%)');
			        	 }
			        });
			       
				});

				$('.prev').click(function(event) {
					if (current_slide === 0) {
						current_slide = slide_count-1;
					}
					else{
						current_slide--;	
					}
					myslider.find('.images_container').css('right', current_slide*(image_container_width/slide_count2) + "%");
					var li_items=myslider.find(".li-dots");
			        $.each(li_items, function(index, val) {
			        	 $(this).css('background','#f5f5f0');
			        	  $(this).css('filter',' opacity(30%)');
			        	 if(index ==current_slide ){
			        	 	 $(this).css('background','#D3D3D3');
			        	 	 $(this).css('filter','opacity(100%)');
			        	 }
			        });
				});
			}
			///////////////////////////////////////////////////////////////////data arrows only
			else if($(this).attr('data-arrows') == 'true'){
				var myslider=$(this);
	 			$(this).find('.images_container').before("<div class='slider_nav'><i class='prev icon-left-circle'></i><i class='next icon-right-circle'></i></div>");
				//$(this).append("<div class='slider_nav'><i class='prev icon-left-circle'></i><i class='next icon-right-circle'></i></div>");
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
		else if($(this).attr('data-dots') == 'true'){//data dots http://stackoverflow.com/questions/20649692/implement-nav-dots-to-my-slider
			var myslider=$(this);
			var ol_appended="<div class='wrapper'><ol class='ol-dots'>";
			for(i = 0; i < slide_count; ++i) {
	    			ol_appended+=("<li class='li-dots'></li>");
	    	}
	    	ol_appended+="</ol></div>";
	    	$(this).append(ol_appended);
	    	myslider.find('.li-dots:nth-child(1)').css('background',' #D3D3D3');
	    	myslider.find('.li-dots:nth-child(1)').css('filter','opacity(100%)');
	    	//the click event
	    	$(this).find('.li-dots').bind('click', function(){
	        var index = $(this).index() ;
	        myslider.find('.images_container').css('right', index*(image_container_width/slide_count2)+ "%");
	        //change the color of the dots
	        var li_items=myslider.find(".li-dots");
	        $.each(li_items, function(index, val) {
	        	 $(this).css('background','#f5f5f0');
	        	  $(this).css('filter',' opacity(30%)');
	        });
	         $(this).css('background',' #D3D3D3');
	         $(this).css('background',' opacity(100%)');
	     
	});
		}
}
	else{//if the auto play is true ito make the curent slide golbal
		var myslider=$(this); 
		var animationSpeed=700;
		var pause=4000;
		var current_slide=0;
		setInterval(function(){
			if (current_slide === slide_count-1) {
						current_slide = 0;
					}

					else{
						current_slide++;
			}

			myslider.find('.images_container').css('right', current_slide*(image_container_width/slide_count2)+ "%");
			//update if there is a dots
			console.log(myslider.attr('data-dots') == 'true');
			if(myslider.attr('data-dots') == 'true'){
				var li_items=myslider.find(".li-dots");
		        $.each(li_items, function(index, val) {
		        	 $(this).css('background','#f5f5f0');
		        	  $(this).css('filter',' opacity(30%)');
		        });
		        myslider.find('.li-dots:nth-child('+(current_slide+1)+')').css('background',' #D3D3D3');
		        myslider.find('.li-dots:nth-child('+(current_slide+1)+')').css('filter','opacity(100%)');
		        console.log(myslider.find('.li-dots:nth-child('+(current_slide+1)+')'));
	    }
		},pause);

		//added the conditions of the arrows and dots 
		if($(this).attr('data-arrows') == 'true' && $(this).attr('data-dots') =='true'){
				//add the dots
				var myslider=$(this);
				var ol_appended="<div class='wrapper'><i class='prev icon-left-open'></i><ol class='ol-dots'>";
				for(i = 0; i < slide_count; ++i) {
						if(i==0){
							ol_appended+=("<li class='li-dots' style='background:#D3D3D3 filter:opacity(100%)'></li>");
						}
						else
		    				ol_appended+=("<li class='li-dots'></li>");
		    	}
		    	ol_appended+="</ol><i class='next icon-right-open'></i><div class='clear'></div></div>";
		    	$(this).append(ol_appended);
		    	//the click event
		    	$(this).find('.li-dots').bind('click', function(){
			        var index = $(this).index() ;
			        current_slide=index;
			        myslider.find('.images_container').css('right', index*(image_container_width/slide_count2)+ "%");
			        //change the color of the dots
			        var li_items=myslider.find(".li-dots");
			        $.each(li_items, function(index, val) {
			        	 $(this).css('background','#f5f5f0');
			        	  $(this).css('filter',' opacity(30%)');
			        });
			        $(this).css('background',' #D3D3D3');
			         $(this).css('filter',' opacity(100%)');
		     
				});
				////add the arrows
				
				$(this).find('.next').click(function(event) {
					if (current_slide === slide_count-1) {
						current_slide = 0;
					}

					else{
						current_slide++;
					}
					myslider.find('.images_container').css('right', current_slide*(image_container_width/slide_count2)+ "%");
					var li_items=myslider.find(".li-dots");
			        $.each(li_items, function(index, val) {
			        	 $(this).css('background','#f5f5f0');
			        	 $(this).css('filter',' opacity(30%)');
			        	 if(index ==current_slide ){
			        	 	 $(this).css('background','#D3D3D3');
			        	 	 $(this).css('filter',' opacity(100%)');
			        	 }
			        });
			       
				});

				$('.prev').click(function(event) {
					if (current_slide === 0) {
						current_slide = slide_count-1;
					}
					else{
						current_slide--;	
					}
					myslider.find('.images_container').css('right', current_slide*(image_container_width/slide_count2) + "%");
					var li_items=myslider.find(".li-dots");
			        $.each(li_items, function(index, val) {
			        	 $(this).css('background','#f5f5f0');
			        	  $(this).css('filter',' opacity(30%)');
			        	 if(index ==current_slide ){
			        	 	 $(this).css('background','#D3D3D3');
			        	 	 $(this).css('filter',' opacity(100%)');
			        	 }
			        });
				});
			}
			///////////////////////////////////////////////////////////////////data arrows only
			else if($(this).attr('data-arrows') == 'true'){
				var myslider=$(this);
	 			$(this).find('.images_container').before("<div class='slider_nav'><i class='prev icon-left-circle'></i><i class='next icon-right-circle'></i></div>");
				//$(this).append("<div class='slider_nav'><i class='prev icon-left-circle'></i><i class='next icon-right-circle'></i></div>");
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
		else if($(this).attr('data-dots') == 'true'){//data dots http://stackoverflow.com/questions/20649692/implement-nav-dots-to-my-slider
			var myslider=$(this);
			var ol_appended="<div class='wrapper'><ol class='ol-dots'>";
			for(i = 0; i < slide_count; ++i) {
	    			ol_appended+=("<li class='li-dots'></li>");
	    	}
	    	ol_appended+="</ol></div>";
	    	$(this).append(ol_appended);
	    	myslider.find('.li-dots:nth-child('+(current_slide+1)+')').css('background',' #D3D3D3');
	    	myslider.find('.li-dots:nth-child('+(current_slide+1)+')').css('filter',' opacity(100%)');
	    	//the click event
	    	$(this).find('.li-dots').bind('click', function(){
	        var index = $(this).index() ;
	        current_slide=index;
	        myslider.find('.images_container').css('right', index*(image_container_width/slide_count2)+ "%");
	        //change the color of the dots
	        var li_items=myslider.find(".li-dots");
	        $.each(li_items, function(index, val) {
	        	 $(this).css('background','#f5f5f0');
	        	 $(this).css('filter',' opacity(30%)');
	        });
	        $(this).css('background',' #D3D3D3');
	        $(this).css('filter',' opacity(100%)');
	     
	});
		}



	}

});

});
