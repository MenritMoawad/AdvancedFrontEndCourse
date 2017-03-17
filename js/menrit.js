$(document).foundation()
$(document).ready(function() {
  // var items = $('[data-modal]');
  $('[data-modal]').hide();
  $('[data-modal-btn]').click(function() {
    console.log("ohayo");
    var btnmodal = $(this).attr('data-modal-btn');
    $('[data-modal=' + btnmodal + ']').toggle();
    // var mod = items.attr('[data-modal]');
    // console.log(mod);
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
