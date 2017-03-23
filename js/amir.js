$(document).ready(function(){
    var searchIcon = $('.header__search-icon');
    var searchInput = $('.header__search-input');
    var isOpen = false;
    searchIcon.click(function(){
      if(isOpen == false){
        searchInput.addClass('searchInput-open');
        isOpen = true;
    } else {
        searchInput.removeClass('searchInput-open');
        isOpen = false;
    }
});  
    searchIcon.mouseup(function(){
        return false;
    });
    searchInput.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
         searchInput.removeClass('searchInput-open');
         isOpen = false;
     }
 });
    $(document).scroll(function(){
        if(isOpen == true){
         searchInput.removeClass('searchInput-open');
         isOpen = false;
     }
 });
    searchInput.keyup(function(e){
      if(e.which == 13) {
        searchInput.removeClass('searchInput-open');
        isOpen = false;
    }   
});
});
