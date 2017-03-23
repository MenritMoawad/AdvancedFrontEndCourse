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


  var authorComment = $('.comments__item-textarea');
  authorComment.keyup(keyup);



function keyup(e){
    if(e.which == 13) {
      var authorImage = $('.comments__item-image:last');
      authorComment.remove();
      var authorCommentValue = authorComment.val();
      var commentInfo ='<div class="comments__item-name">Albert Einstein</div>'+
      '<div class="comments__item-time"><i class="fa fa-calendar-o" aria-hidden="true"></i>'+
      ' Now</div><div class="comments__item-text">'+ authorCommentValue +'<some way have only just begun.</div>';
      $(commentInfo).insertAfter(authorImage);
      var commentItem = '<div class="comments__item">'+
      '<img class="comments__item-image" src="img/author3.png"/>'+
      '<textarea class="comments__item-textarea" rows="3" cols="50" placeholder="Your comment..."></textarea></div>'+
      '<div class="line-separator line-separator--comments"></div>';
      var lastLineSeparator = $('.line-separator--comments:last');
      $(commentItem).insertAfter(lastLineSeparator);
        authorComment = $('.comments__item-textarea');
        authorComment.keyup(keyup)
    }   
  }
});
