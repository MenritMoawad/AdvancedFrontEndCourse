$(".ul__li--type ").each(function() {

      var value=  $(this).text();
      if (value=="TECH"){
      $(this).css("color", "#FF8C00");
  }
  	else {
  	$(this).css("color", "blue");
  }
});
