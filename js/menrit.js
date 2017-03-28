
$(document).ready(function() {
  $('[data-modal]').hide();
  $('[data-modal-btn]').click(function() {
    var btnmodal = $(this).attr('data-modal-btn');
    $('[data-modal=' + btnmodal + ']').toggle();
    var item = $('[data-modal=' + btnmodal + '] li');
    console.log(item);
    item.click(function() {
      var txt = $(this).text();
      console.log(txt);
      $('[data-modal-btn=' + btnmodal + ']').text(txt);
      $('[data-modal=' + btnmodal + ']').hide();
    })
  });
  ///clouring the dots 
  $('.author').mouseover(function() {
    console.log('hovered ',$(this).index());
    var circles=$('.circle');
    var div_index=$(this).index();
     $.each(circles, function(index, val) {
      console.log('index is ',index,'div index ',div_index);
        if((index+1) == div_index){
                 $(this).css('color','#000');
          }
                
        });
     ///timer
      setInterval(function () {
          $.each(circles, function(index, val) {
          console.log('index is ',index,'div index ',div_index);
          $(this).css('color','#FFF');
          
                
        });
    }, 3000);
     ////

  });

  //.li-dots:nth-child
})
