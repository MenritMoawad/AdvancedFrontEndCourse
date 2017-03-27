$(document).foundation()
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
})
