
$("input").on("keyup", function (e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).css('outline', 'dashed 3px #4599ff')

  }

})
$("input").on('focusout', function() {
  $(this).css('outline', 'none')
})

$(".form-check").on("keyup", function (e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $('.form-check').each(function() {
      $(this).addClass('focusClass')
    });

  }

})


$("button").on("keyup", function (e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).css('outline', 'dashed 3px #4599ff')

  }

})
$("button").on('focusout', function() {
  $(this).css('outline', 'none')
})



$('select').each(function() {
  $(this).data('lastSelectedIndex', this.selectedIndex);
});
$('select').click(function() {
  $(this).data('lastSelectedIndex', this.selectedIndex);
});

$('select[class*="select-with-confirm"]').change(function() {

  this.selectedIndex = $(this).data('lastSelectedIndex');

});



$('#STAT_FIX').on('click', function (e) {
  e.stopPropogation();
  e.preventDefault();
})



$('.btn-faq-close').click(function () {
  $('.faq-overlay-container').css({ right: '-100vw' });
});

$('.btn-faq-overaly, .menu-buttons-list li[data-target=\'#faqs\']').click(function () {
  $('.faq-overlay-container').css({ right: '0vw' });
})

$(".collapse").on("show.bs.collapse", function () {
  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(180deg)"
  }), $(this).parent().find('.iques').css({
    backgroundColor: "#0F426B"
  })
}), $(".collapse").on("hide.bs.collapse", function () {
  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(0deg)"
  }), $(this).parent().find('.iques').css({
    backgroundColor: "#377F9A"
  })
});
