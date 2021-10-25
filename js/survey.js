$(document).ready(function () {


  if ($("[data-toggle=tooltip]").length >= 1) {
    $("[data-toggle=tooltip]").tooltip();
    console.log('hey there')
  }




  $(".pointer:eq(0)").addClass("noBorder");

  // Click function for show the Modal

  $(".show").on("click", function () {
    $(".modal2").removeClass("animated fadeOutDown");
    $(".modal2").addClass("animated fadeInUp").show();
    $(".mask").fadeIn();
  });

  $(".closeModal").on("click", function () {
    $(".modal2").removeClass("animated fadeInUp")
    $(".modal2").addClass("animated fadeOutDown");

    setTimeout(function () {
      $(".modal2").hide();
    }, 800)
    $(".mask").fadeOut();

    $('.button-default').addClass('second')
    $('.button-default').removeClass('activeTeal')

  });

  $(".mask").on("click", function () {
    $(".modal2").hide();
    $(".mask").hide();

  })


  $('.button-default.second').on('click', function () {
    $('.button-default.second').removeClass('second')
    $('.button-default').addClass('activeTeal')
  })


  $("a").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')

    }

  })
  $("a").on('focusout', function() {
    $(this).css('outline', 'none')
  })

  $("#one").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')

    }

  })
  $("#one").on('focusout', function() {
    $(this).css('outline', 'none')
  })

  $("#closeThisPlease").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')

    }

  })
  $("#closeThisPlease").on('focusout', function() {
    $(this).css('outline', 'none')
  })

  $("#send").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')

    }

  })
  $("#send").on('focusout', function() {
    $(this).css('outline', 'none')
  })

  $(".form-control").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')

    }

  })
  $(".form-control").on('focusout', function() {
    $(this).css('outline', 'none')
  })

  $(".stacklabel .form-control").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')

    }

  })
  $(".stacklabel .form-control").on('focusout', function() {
    $(this).css('outline', 'none')
  })


  $(".questionBubble").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')

    }

  })
  $(".questionBubble").on('focusout', function() {
    $(this).css('outline', 'none')
  })

  $(".btn-info").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')

    }

  })
  $(".btn-info").on('focusout', function() {
    $(this).css('outline', 'none')
  })

  $(".outerDot").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')

    }

  })
  $(".outerDot").on('focusout', function() {
    $(this).css('outline', 'none')
  })




  $(".custom-control-input").on("click", function () {

    if ($('#Consent_1').is(':checked'))    {

      $('.btn-info').css('background-image' , 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)');
    } else {


      $('.btn-info').css('background-image' , 'linear-gradient(180deg, rgba(127,127,127,1) 0%, rgba(127,127,127,1) 34%, rgba(127,127,127,1) 77%)');
    }

  })



  //tab with focus state and click state

  $('#one').on('click', function () {
    $('.blueTab').css('outline', 'none !important')

    $('#theform input').each(function () {
      $(this).attr('tabindex', '0');
    });
    $('.radio-inline input').each(function () {
      $(this).attr('tabindex', '0');
    });

    $('.form-control').attr('tabindex', '0');

    $('#closeThisPlease').attr('tabindex', '0');

    $('.dial').attr('tabindex', '0');
    $('#send').attr('tabindex', '0');

    // $('.blueTab').hide();
    $('.modal-content').css('box-shadow', '0 3px 9px rgba(0, 0, 0, .6)')


    $('.thirdBlock').addClass('flexing-scroll');
    $(".firstBlock").addClass('animated fadeIn');
    $(".secondBlock").removeClass('animated fadeIn');
    $(".thirdBlock").removeClass('animated fadeIn');


    $('.modal-content').addClass('opened')
    $("#slideOut").addClass('showSlideOut');


    $('.firstBlock').removeClass('flexing-scroll');
    $('.secondBlock').addClass('flexing-scroll');
    $('.thirdBlock').addClass('flexing-scroll');
    $('.secondBlock').removeClass('unset');



  })



  $('#one').keyup(function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

      $('#theform input').each(function () {
        $(this).attr('tabindex', '0');
      });

      // $('.blueTab').hide();

      $('.radio-inline input').each(function () {
        $(this).attr('tabindex', '0');
      });

      $('.form-control').attr('tabindex', '0');

      $('#closeThisPlease').attr('tabindex', '0');

      $('.dial').attr('tabindex', '0');
      $('#send').attr('tabindex', '0');

      $("#slideOut").addClass('showSlideOut');
      $(".secondBlock").addClass('hide2').removeClass('animated fadeIn').hide();

      $(".firstBlock").removeClass('hide1').addClass('animated fadeIn').show();
      $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();
    }
  });


  $('#one').keyup(function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {

      $('#theform input').each(function () {
        $(this).attr('tabindex', '-1');
      });

      $('.radio-inline input').each(function () {
        $(this).attr('tabindex', '-1');
      });

      $('.form-control').attr('tabindex', '-1');

      $('#closeThisPlease').attr('tabindex', '-1');

      $('.dial').attr('tabindex', '-1');
      $('#send').attr('tabindex', '-1');

    }
  });



  //focus states on buttons and divs

  $('.btn-info').on('click', function () {

    $(this).css('background-image', 'linear-gradient(rgb(0, 70, 127) 0%, rgb(0, 70, 127) 34%, rgb(0, 70, 127) 77%)')

  })


  // $('.btn-info').on('focus', function() {
  //   $('.btn-info').css('outline', '5px auto -webkit-focus-ring-color')
  //
  // })

  $('.questionBubble').on('click', function () {
    $('.questionBubble').css('outline', 'none')

  })

  //
  // $('.questionBubble').on('focus', function() {
  //   $('.questionBubble').css('outline', '5px auto -webkit-focus-ring-color')
  //
  // })


  $('#close').on('focus', function () {
    $('#closeThisPlease').css('outline', '5px auto -webkit-focus-ring-color')

  })


  //checkbox conditions

  $('.one input:checkbox').keypress(function (e) {
    e.preventDefault();
    if ((e.keyCode ? e.keyCode : e.which) == 13) {
      $(this).trigger('click');
    }
  });

  $('.form-check-input').on('change', function () {
    $(this).parent().find('label').addClass('blueBox')
  });

  $('.one input').change(function () {
    if ($('.symptoms').is(':checked') || $('.noSymptoms').is(':checked')) {
      console.log("ksudbvibibi")
      $('.btn-info.newBtn').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)')
    }
    else {
      $('.btn-info.newBtn').css('background-image', 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(102,102,102,1) 34%, rgba(102,102,102,1) 77%)')
    }
  })

  var $others = $('.symptoms').not('.noSymptoms');

  $('.noSymptoms').change(function () {
    if (this.checked) {
      $others.prop('checked', false)
    }
  });
  $others.change(function () {
    if (this.checked) {
      $('.noSymptoms').prop('checked', false)
    }
  })

  $('.noSymptoms').keyup(function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

      if (this.checked) {
        $others.prop('checked', false)
      }
    }
  })

  $others.keyup(function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      if (this.checked) {
        $('.noSymptoms').prop('checked', false)
      }
    }

  })

  //end checkbox conditions

  $('#closeThisPlease').keyup(function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

      $('#one').focus()

      $('.radio-inline input').each(function () {
        $(this).attr('tabindex', '-1');
      });

      // $('.blueTab').show();
      $('.blueTab.new').hide();

      $('.form-control').attr('tabindex', '-1');

      $("#slideOut").removeClass('showSlideOut');
      $("#slideOut").css("right", -$('#slideOut').outerWidth());

      $('#theform input').each(function () {
        $(this).attr('tabindex', '-1');
      });

      $('#closeThisPlease').attr('tabindex', '-1');

      $('.dial').attr('tabindex', '-1');
      $('#send').attr('tabindex', '-1');

    }

  });

  //keypress


  $('.emailUs').keydown(function (e) {
    if (e.keyCode == 13) {

    }
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      closeModal();
    }
  });

  //check and uncheck custom radio buttons


  $('.personA , .fullCircle').on('click', function () {
    if ($('input[name="PersonSelected"]').data('active') == 0) {
      $('.personA').data('active', 0);
      $('input[name="PersonSelected"]').data('active', 1);
      $('.personA').find('.blueBack.new').css('background', '#00467f');
      $('.personA').find('.blueBackBox').css('background', '#00467f');
      $('.personA').find('.fullCircle').css('border', '3px solid #00467f');
      $('.personA').find('.verticalNew').css('background', 'white');
      console.log('A is active');
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(102,102,102,1) 34%, rgba(102,102,102,1) 77%)');

    } else {
      $('input[name="PersonSelected"]').data('active', 0);
      $('input[name="PersonSelected"]').prop('checked', false);
      console.log('A is not active');
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)')
    }
  });



  $('.personB, .fullCircle').on('click', function () {
    if ($('input[name="PersonSelected"]').data('active') == 0) {
      $('.personA').data('active', 0);
      $('input[name="PersonSelected"]').data('active', 1);

      $('.personB').find('.verticalNew').css('background', 'white');

      $('.personB').find('.blueBack.new').css('background', '#00467f');
      $('.personB').find('.blueBackBox').css('background', '#00467f');
      $('.personB').find('.fullCircle').css('border', '3px solid #00467f');
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(102,102,102,1) 34%, rgba(102,102,102,1) 77%)');
    } else {
      $('input[name="PersonSelected"]').data('active', 0);
      $('input[name="PersonSelected"]').prop('checked', false);
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)')
    }
  });

  $(".personA input:radio").on("click", function (e) {
    var inp = $(this);
    if (inp.is(".theone")) {
      e.stopImmediatePropagation();
      inp.prop("checked", false).removeClass("theone");
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(102,102,102,1) 34%, rgba(102,102,102,1) 77%)');
      $('.verticalNew').css('background', 'white');
      $('.blueBack.new').css('background', '#00467f');
      $('.blueBackBox').css('background', '#00467f');
      $('.fullCircle').css('border', '3px solid #00467f');
    } else {
      $("input:radio[name='" + inp.prop("name") + "'].theone").removeClass("theone");
      inp.addClass("theone");
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)')
      $('.verticalNew').css('background', 'rgb(191, 209, 222)');
      $('.blueBack.new').css('background', 'rgb(0, 130, 137)');
      $('.blueBackBox').css('background', 'rgb(0, 130, 137)');
      $('.fullCircle').css('border', '3px solid rgb(0, 130, 137)');

    }

  });

  $(".personB input:radio").on("click", function (e) {
    var inp = $(this);
    if (inp.is(".theone")) {
      e.stopImmediatePropagation();
      inp.prop("checked", false).removeClass("theone");
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(102,102,102,1) 34%, rgba(102,102,102,1) 77%)');
      $('.verticalNew').css('background', 'white');
      $('.blueBack.new').css('background', '#00467f');
      $('.blueBackBox').css('background', '#00467f');
      $('.fullCircle').css('border', '3px solid #00467f');
    } else {
      $("input:radio[name='" + inp.prop("name") + "'].theone").removeClass("theone");
      inp.addClass("theone");
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)')
      $('.verticalNew').css('background', 'rgb(191, 209, 222)');
      $('.blueBack.new').css('background', 'rgb(0, 130, 137)');
      $('.blueBackBox').css('background', 'rgb(0, 130, 137)');
      $('.fullCircle').css('border', '3px solid rgb(0, 130, 137)');

    }

  });



  $('.personA').click(function (e) {
    // e.preventDefault();

    var radio = $(this).find('input[type=radio]');

    if (radio.is(':checked')) {
      console.log('input a is active')
      e.stopImmediatePropagation();
      $(this).removeClass("activeRadio");
      radio.prop('checked', false);

      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(102,102,102,1) 34%, rgba(102,102,102,1) 77%)');
    } else {
      console.log('input a is not active')
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)')
      radio.prop('checked', true);

    }
  });

  $('.personB').click(function (e) {
    // e.preventDefault();

    var radio = $(this).find('input[type=radio]');

    if (radio.is(':checked')) {
      e.stopImmediatePropagation();
      $(this).removeClass("activeRadio");
      radio.prop('checked', false);
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(102,102,102,1) 34%, rgba(102,102,102,1) 77%)');
    } else {
      radio.prop('checked', true);
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)')

    }
  });



  //submit button

  var the_action = function (type) {
    switch (type) {
      case 'a':
      console.log('Case A');
      break;
      case 'b':
      console.log('Case B');
      break;
    }
  };

  $('.personA').click(function () {
    console.log('Clicked');
    $(this).data('clicked', true);
  });

  $('.personB').click(function () {

    if ($('.personB').data('clicked') == true) {
      the_action('a');
    } else {
      the_action('b');
    }
  });


  $('.personB').click(function () {
    console.log('ClickedB');
    $(this).data('clicked', true);
  });

  $('.personA').click(function () {

    if ($('.personA').data('clicked') == true) {
      the_action('b');
    } else {
      the_action('a');
    }
  });

  $("#submitAnswer").on("click", function () {

    $('.btn-info').css('outline', 'none !important')
    $('#submitAnswer').css('outline', 'none !important')

  })

  $(".personA").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {

      console.log('person A');
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)')

    }

  })

  $(".personB").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      console.log('person B');
      $('#submitAnswer').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)')

    }

  })




  $('.personA').on('click', function () {

    $('.personA').find('input').prop('checked', true)

    $('.personA').find('.blueBack.new').css('background', '#008289');
    $('.personA').find('.fullCircle').css('border', '3px solid #008289');

    $('.personA').find('.verticalNew').css('background', '#bfd1de');
    $('.personB').find('.verticalNew').css('background', 'white');

    $('.personB').find('.blueBack.new').css('background', '#00467f');
    $('.personB').find('.fullCircle').css('border', '3px solid #00467f');


  })


  $('#PersonSelected_1').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      // $('#PersonSelected_1').on('focus', function() {

      // $('.personA').css('outline', '2px solid blue')

      $('.personA').find('input').prop('checked', true)

      $('.personA').find('.blueBack.new').css('background', '#008289');
      $('.personA').find('.fullCircle').css('border', '3px solid #008289');
      $('.personB').find('.blueBack.new').css('background', '#00467f');
      $('.personB').find('.fullCircle').css('border', '3px solid #00467f');

      $('.personA').find('.verticalNew').css('background', '#bfd1de');
      $('.personB').find('.verticalNew').css('background', 'white');

    }
  })

  $('#PersonSelected_1').on('focus', function () {

    $('.personA').css('outline', 'dashed 3px #4599ff')


  })

  $('#PersonSelected_1').on('focusout', function () {

    $('.personA').css('outline', 'none')

  })

  $('#PersonSelected_2').on('focus', function () {

    $('.personB').css('outline', 'dashed 3px #4599ff')
  })

  $('#PersonSelected_2').on('focusout', function () {

    $('.personB').css('outline', 'none')


  })



  $('.personB').on('click', function () {

    $('.personB').find('input').prop('checked', true)

    $('.personB').find('.blueBack.new').css('background', '#008289');
    $('.personB').find('.fullCircle').css('border', '3px solid #008289');
    $('.personA').find('.blueBack.new').css('background', '#00467f');
    $('.personA').find('.fullCircle').css('border', '3px solid #00467f');

    $('.personB').find('.verticalNew').css('background', '#bfd1de');
    $('.personA').find('.verticalNew').css('background', 'white');
  })


  $('#PersonSelected_2').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

      // $('#PersonSelected_2').on('focus', function() {


      $('.personB').find('input').prop('checked', true)
      $('.personB').find('.blueBack.new').css('background', '#008289');
      $('.personB').find('.fullCircle').css('border', '3px solid #008289');
      $('.personA').find('.blueBack.new').css('background', '#00467f');
      $('.personA').find('.fullCircle').css('border', '3px solid #00467f');

      $('.personB').find('.verticalNew').css('background', '#bfd1de');
      $('.personA').find('.verticalNew').css('background', 'white');

    }
  })



  //contact button Hover
  $('#send').mouseover(function () {
    $('#send').css('background', 'white');
    $('#send').css('color', '#008289');
    $('.fa.fa-envelope-o').css('color', '#008289');
  })

  $('#send').mouseleave(function () {
    $('#send').css('background', '#008289');
    $('#send').css('color', 'white');
    $('.fa.fa-envelope-o').css('color', 'white');
  })




  //bottom modal
  $('.outerDot').attr('tabindex', '-1');


  $('.questionBubble').on('click', function (e) {

    $('.questionBubble').css('box-shadow', 'none')
    $('.modalBackground').show();
    $('.blueTab').hide();
    $('.blueTab.new').show();

    $('.outerDot').attr('tabindex', '5');
    $('.outerDot').attr('aria-hidden', 'false')

    $('.helpBubble').attr('aria-hidden', 'false')

    setTimeout(function () {
      $('.questionBubble').addClass('closeHelp');
      $('.questionBubble .white').html('X');

      $('.questionBubble.closeHelp').css('z-index', '99999999999999999999');
    }, 200)

    if ($('.questionBubble').hasClass('closeHelp')) {

      $('.questionBubble').attr('aria-label', 'Information');
      $('.questionBubble').attr('title', 'Information');

      $('.modalBackground').attr('aria-hidden', 'true');
      $('.helpBubble').attr('aria-hidden', 'true');

      $('.modalBackground').attr('tabindex', '-1');


      $('.modalBackground').hide();

      $('.outerDot').attr('tabindex', '-1');
      $('.outerDot').attr('aria-hidden', 'true')

      $('#PersonSelected_1').attr('tabindex', '1')
      $('#PersonSelected_2').attr('tabindex', '1')
      $('#submitAnswer').attr('tabindex', '2')

      $('.questionBubble').attr('tabindex', '4')

      $('.modalBackground').hide();

      $('.blueTab').show();

      $('.blueTab.new').hide();

      $('.helpBubble').addClass('transparent-opacity');
      $('.helpBubble').css('opacity', '0');
      $('.yellowDot1').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
      $('.yellowDot2').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
      $('.yellowDot3').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
      $('.yellowDot5').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
      $('.yellowDot22').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
      $('.yellowDot44').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');


      setTimeout(function () {
        $('.questionBubble').removeClass('closeHelp');
        $('.questionBubble .white').html('&#63;');

        $('.questionBubble').css('z-index', '9');
      }, 200)
    }


    //help modal on click of question mark

    else if (!$('.questionBubble').hasClass('closeHelp')) {


      $('.modalBackground').attr('aria-hidden', 'false');
      $('.helpBubble').attr('aria-hidden', 'false');

      $('.modalBackground').attr('tabindex', '0');

      $('.questionBubble').attr('aria-label', 'Close');
      $('.questionBubble').attr('title', 'Close');


      $('.outerDot:first').addClass('activeTool');

      $('.outerDot').attr('tabindex', '5');
      $('.outerDot').attr('aria-hidden', 'false')
      $('#PersonSelected_1').attr('tabindex', '-1')
      $('#PersonSelected_2').attr('tabindex', '-1')
      $('#submitAnswer').attr('tabindex', '-1')

      $('.outerDot').attr('tabindex', '5');

      setTimeout(function () {
        $('.helpBubble').removeClass('transparent-opacity').addClass('animated fadeIn');

      }, 300)

      setTimeout(function () {
        $('.helpBubble').removeClass('animated fadeIn');

        $('.helpBubble').css('opacity', '1')

      }, 700)

      setTimeout(function () {
        $('.yellowDot1').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
      }, 700)


      setTimeout(function () {
        $('.yellowDot2').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
      }, 1000)


      setTimeout(function () {
        $('.yellowDot3').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
      }, 1300)

      setTimeout(function () {
        $('.yellowDot5').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
      }, 1600)

      setTimeout(function () {
        $('.yellowDot22').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
      }, 1900)


      setTimeout(function () {
        $('.yellowDot44').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
      }, 2200)


    }

  });

  $('#send').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

      $('#one').focus()

    }
  })


  $('.questionBubble').on('blur', function (e) {
    // var code = (e.keyCode ? e.keyCode : e.which);
    if ($('.questionBubble').hasClass('closeHelp')) {

      $('.outerDot:first').focus()

    }

  })




  $('.questionBubble').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {



      $('.modalBackground').attr('aria-hidden', 'false');
      $('.helpBubble').attr('aria-hidden', 'false');

      $('.modalBackground').attr('tabindex', '0');

      $('.questionBubble').attr('aria-label', 'Close');
      $('.questionBubble').attr('title', 'Close');
      $('.questionBubble').attr('aria-describedby', 'Close');

      $('#Information').attr('id', 'Close');

      $('.outerDot:first').addClass('activeTool');

      $('.outerDot').attr('tabindex', '5');
      $('.outerDot').attr('aria-hidden', 'false')
      $('#PersonSelected_1').attr('tabindex', '-1')
      $('#PersonSelected_2').attr('tabindex', '-1')
      $('#submitAnswer').attr('tabindex', '-1')

      $('.modalBackground').show();

      $('.blueTab').hide();

      $('.blueTab.new').show();

      setTimeout(function () {
        $('.questionBubble').addClass('closeHelp');
        $('.questionBubble .white').html('X');
        $('.questionBubble.closeHelp').css('z-index', '99999999999999999999');

      }, 200)

      if ($('.questionBubble').hasClass('closeHelp')) {


        $('.questionBubble').attr('aria-label', 'Information');
        $('.questionBubble').attr('title', 'Information');

        $('.modalBackground').attr('aria-hidden', 'true');
        $('.helpBubble').attr('aria-hidden', 'true');

        $('.modalBackground').attr('tabindex', '-1');
        $('.questionBubble').attr('aria-describedby', 'Information');

        $('#Close').attr('id', 'Information');

        $('.modalBackground').hide();

        $('.outerDot').attr('tabindex', '-1');
        $('.outerDot').attr('aria-hidden', 'true')

        $('#PersonSelected_1').attr('tabindex', '1')
        $('#PersonSelected_2').attr('tabindex', '1')
        $('#submitAnswer').attr('tabindex', '2')

        $('.questionBubble').attr('tabindex', '4')


        $('.blueTab').show();

        $('.blueTab.new').hide();

        $('.helpBubble').addClass('transparent-opacity');
        $('.helpBubble').css('opacity', '0');
        $('.yellowDot1').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
        $('.yellowDot2').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
        $('.yellowDot3').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
        $('.yellowDot5').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
        $('.yellowDot22').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
        $('.yellowDot44').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');


        setTimeout(function () {
          $('.questionBubble').removeClass('closeHelp');
          $('.questionBubble .white').html('&#63;');

          $('.questionBubble').css('z-index', '9');
        }, 200)
      }


      //help modal on click of question mark

      else if (!$('.questionBubble').hasClass('closeHelp')) {


        setTimeout(function () {
          $('.helpBubble').removeClass('transparent-opacity').addClass('animated fadeIn');

        }, 300)

        setTimeout(function () {
          $('.helpBubble').removeClass('animated fadeIn');

          $('.helpBubble').css('opacity', '1')

        }, 700)

        setTimeout(function () {
          $('.yellowDot1').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
        }, 700)


        setTimeout(function () {
          $('.yellowDot2').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
        }, 1000)


        setTimeout(function () {
          $('.yellowDot3').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
        }, 1300)

        setTimeout(function () {
          $('.yellowDot5').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
        }, 1600)

        setTimeout(function () {
          $('.yellowDot22').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
        }, 1900)


        setTimeout(function () {
          $('.yellowDot44').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
        }, 2200)


      }

    }

  });


  //help modal circles hover state


  $('.outerDot').on('focus', function (e) {

    $('.questionBubble').attr('tabindex', '6')

    var $class = $('.outerDot');

    var index = $class.index($('.activeTool'));

    var $next = $class.slice(index + 1).first();
    var $prev = $class.slice(index + 0).first();

    $next.addClass('activeTool');

    $prev.removeClass('activeTool');

    var doAction = $(this).closest('.parentDiv').find('.outerDot');
    var doAction2 = $(this).closest('.parentDiv').find('.innerDot');
    var doAction3 = $(this).closest('.parentDiv').find('.relativeDiv');
    var doAction4 = $(this).closest('.parentDiv').find('.tools');

    $(doAction).css('background', 'rgb(0, 70, 127)');
    $(doAction2).css('background', '#fdcb4e');
    $(doAction3).parent().addClass("makeVisible");
    $(doAction4).addClass('animated fadeIn').show();

    //
    // if ($('.outerDot').last().hasClass('activeTool')) {
    //
    //   $('.modalBackground').show();
    //
    //   $('.blueTab').hide();
    //
    //   $('.blueTab.new').show();
    //
    //   // $('.helpBubble').removeClass('transparent-opacity');
    //   // $('.helpBubble').css('opacity', '.85');
    //   $('.outerDot').attr('tabindex', '5');
    //
    //
    //
    //   setTimeout(function() {
    //     $('.helpBubble').removeClass('transparent-opacity').addClass('animated fadeIn');
    //
    //   }, 300)
    //
    //   setTimeout(function() {
    //     $('.helpBubble').removeClass('animated fadeIn');
    //
    //     $('.helpBubble').css('opacity', '.8')
    //
    //   }, 700)
    //
    //
    //   setTimeout(function() {
    //     $('.yellowDot1').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
    //   }, 700)
    //
    //
    //   setTimeout(function() {
    //     $('.yellowDot2').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
    //   }, 1000)
    //
    //
    //   setTimeout(function() {
    //     $('.yellowDot3').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
    //   }, 1300)
    //
    //   setTimeout(function() {
    //     $('.yellowDot5').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
    //   }, 1600)
    //
    //   setTimeout(function() {
    //     $('.yellowDot22').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
    //   }, 1900)
    //
    //
    //   setTimeout(function() {
    //     $('.yellowDot44').removeClass('transparent-opacity').addClass('animated fadeIn infinite pulse')
    //   }, 2200)
    //
    //
    // }

  })


  $('.outerDot').on('blur', function (e) {

    var $class = $('.outerDot');

    var index = $class.index($('.activeTool'));

    var $next = $class.slice(index + 1).first();
    var $prev = $class.slice(index + 0).first();


    $next.addClass('activeTool');

    $prev.removeClass('activeTool');

    var doAction = $(this).closest('.parentDiv').find('.outerDot');
    var doAction2 = $(this).closest('.parentDiv').find('.innerDot');
    var doAction3 = $(this).closest('.parentDiv').find('.relativeDiv');
    var doAction4 = $(this).closest('.parentDiv').find('.tools');


    $(doAction).css('background', '#fdcb4e');
    $(doAction2).css('background', 'rgb(0, 70, 127');
    $(doAction3).parent().removeClass("makeVisible");
    $(doAction4).removeClass('animated fadeIn').hide();

    // if ($('.outerDot').last().hasClass('activeTool')) {
    //
    //
    //   $('.outerDot').attr('tabindex', '-1');
    //
    //   $('.modalBackground').hide();
    //
    //   $('.blueTab').show();
    //
    //   $('.blueTab.new').hide();
    //
    //   $('.helpBubble').addClass('transparent-opacity');
    //   $('.helpBubble').css('opacity', '0');
    //
    //   $('.yellowDot1').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
    //   $('.yellowDot2').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
    //   $('.yellowDot3').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
    //   $('.yellowDot5').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
    //   $('.yellowDot22').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
    //   $('.yellowDot44').addClass('transparent-opacity').removeClass('animated fadeIn infinite pulse');
    //
    //
    //   setTimeout(function() {
    //     $('.questionBubble').removeClass('closeHelp');
    //     $('.questionBubble .white').html('&#63;');
    //
    //     $('.questionBubble').css('z-index', '9');
    //   },200)
    //
    // }


  })


  //close help modal

  $('.closeHelp').on('click', function () {
    $('.outerDot').attr('tabindex', '-1');
    $('.modalBackground').hide();
    $('.tools.activeTool').removeClass('activeTool');
    $('.tools').removeClass('animated fadeIn').hide();

  })


  $(document).on('mouseenter', '.outerDot', function (e) {

    var doAction = $(this).closest('.parentDiv').find('.outerDot');
    var doAction2 = $(this).closest('.parentDiv').find('.innerDot');
    var doAction3 = $(this).closest('.parentDiv').find('.relativeDiv');
    var doAction4 = $(this).closest('.parentDiv').find('.tools');

    $(doAction).css('background', 'rgb(0, 70, 127)');
    $(doAction2).css('background', '#fdcb4e');
    $(doAction3).parent().addClass("makeVisible");
    $(doAction4).addClass('animated fadeIn').show();


  });


  $(document).on('mouseleave', '.outerDot', function (e) {

    var doAction = $(this).closest('.parentDiv').find('.outerDot');
    var doAction2 = $(this).closest('.parentDiv').find('.innerDot');
    var doAction3 = $(this).closest('.parentDiv').find('.relativeDiv');
    var doAction4 = $(this).closest('.parentDiv').find('.tools');


    $(doAction).css('background', '#fdcb4e');
    $(doAction2).css('background', 'rgb(0, 70, 127');
    $(doAction3).parent().removeClass("makeVisible");
    $(doAction4).removeClass('animated fadeIn').hide();

  });



  $('.modal-body').css('height', $(window).height());


  // $('#question').on('click', function() {
  //   $('.modalBackground').show();
  //
  //   $('.tools:first').addClass('activeTool');
  //   $('.tools:first').addClass('activeTool');
  //
  //   if ($('.tools').hasClass('activeTool')) {
  //     console.log('this is active')
  //     $('.activeTool').addClass('animated fadeIn').show();
  //     // $('.relativeDiv:first').parent().addClass("makeVisible");
  //   }
  //
  // })



  // var $class = $('.tools');
  // // $('.nextTab').click(function () {
  //   var index = $class.index($('.activeTool'));
  //
  //   var $next = $class.slice(index + 1).first();
  //   var $prev = $class.slice(index + 0).first();
  //
  //
  //   $next.addClass('activeTool');
  //   $next.addClass('BLAH');
  //   $prev.removeClass('activeTool');
  //
  //   $prev.removeClass('animated fadeIn').hide();


  // if ($('.tools').hasClass('activeTool')) {
  //   console.log('this is active')
  //   $('.activeTool').addClass('animated fadeIn').show();
  //
  //   $('.activeTool').closest('.parentDiv').addClass("makeVisible");
  //
  //   $('.relativeDiv:first').parent().removeClass("makeVisible");
  //
  //
  // }

  // });

  //
  // $('.prevTab').click(function () {
  // var index = $class.index($('.activeTool'));
  //
  // var $next = $class.slice(index).first();
  // var $prev = $class.slice(index - 1).first();
  // $prev.addClass('activeTool');
  // $prev.addClass('BLAH');
  // $next.removeClass('activeTool');
  // $next.removeClass('animated fadeIn').hide();
  // $('.relativeDiv').parent().removeClass("makeVisible");


  // if ($('.tools').hasClass('activeTool')) {
  //   console.log('this is active')
  //   $('.activeTool').addClass('animated fadeIn').show();
  //
  //
  // }



  // });



  $(".mandatoryfields").on("keypress", function () {
    if (!$('#formControl1').val() == '' && !$('#formControl2').val() == '' && !$('#formControl4').val() == '') {

      $('#send').css('background-image', 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 34%, rgba(255,255,255,1) 77%)');
      $('#send').css('background-color', 'white');
      $('#send').css('color', '#008289');
      $('.fa.fa-envelope-o').css('color', '#008289');

    }
    else {

      $('#send').css('background', 'transparent');
      $('#send').css('color', 'white');
      $('.fa.fa-envelope-o').css('color', 'white');
    }

  });

  //toaster

  $('#send').click(function (e) {

    if (!$('#formControl1').val() == '' && !$('#formControl2').val() == '' && !$('#formControl4').val() == '') {

      $("#slideOut").removeClass('showSlideOut');
      // $('.blueTab').show();

      e.preventDefault()

      setTimeout(function () {
        $('.toast').css('right', '0px')
        $('.toast').removeClass('transparent-opacity').addClass('animated slideInRight')
      }, 300)

      setTimeout(function () {
        $('.toast').removeClass('transparent-opacity').removeClass('animated slideInRight')
        $('.toast').addClass('transparent-opacity');
        $('.toast').removeClass('animated slideOutRight')

      }, 5000)
      setTimeout(function () {
        $('.toast').css('right', '-325px')
        $('.toast').addClass('animated slideOutRight')
      }, 4900)

      // window.location.reload();

    }

  });


  //close button in slide out tab

  $('#close').on('click', function () {

    $('#theform input').each(function () {
      $(this).attr('tabindex', '-1');
    });

    $('.radio-inline input').each(function () {
      $(this).attr('tabindex', '-1');
    });

    $('.form-control').attr('tabindex', '-1');

    $('#closeThisPlease').attr('tabindex', '-1');

    $('.dial').attr('tabindex', '-1');
    $('#send').attr('tabindex', '-1');

    $('.firstBlock').addClass('unset');

    // $('.blueTab').show();

    $('.blueTab.new').hide();

    $(".secondBlock").removeClass('animated fadeIn');
    $(".firstBlock").removeClass('animated fadeIn');
    $(".thirdBlock").removeClass('animated fadeIn');


    setTimeout(function () {
      $('.thirdBlock').addClass('flexing-scroll');
      $('.secondBlock').addClass('flexing-scroll');
    }, 600)

    $('.modal-content').css('box-shadow', 'none')

    $("#slideOut").removeClass('showSlideOut');

    $('#one').css('z-index', '999');
    $('#two').css('z-index', '99');



  })


  //changing backgrdound color of radio buttons on formIcon


  $('.radio-inline input').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {

      $('.radio-inline input').change(function (e) {

        setReasonActive();

      })

      function setReasonActive() {
        $('.radio-inline input').each(function () {
          if ($(this).prop('checked')) {
            $(this).parents('.vertical').css('background', '#19a99d')
          } else {
            $(this).parents('.vertical').css('background', 'transparent')
          }
        })
      }

      setReasonActive()


    }
  })





  if ($(document).innerWidth() >= 768) {

    $(window).scroll(function () {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop;
      if (distanceY > 100) {
        $('#one').css({
          top: "92px"
        })

      } else {
        $('#one').css({
          top: "270px"
        })

      }
    });


    $("#slideOut").css("right", -$('#slideOut').outerWidth() - 10);


    $(".modal-content").width($('#slideOut').width());


    $(window).on("scroll", function () {
      var docHeight = $(document).height();
      var winScrolled = $(window).height() + $(window).scrollTop(); // Sum never quite reaches
      if ((docHeight - winScrolled) < 1) {

        $("#stickySide2").css({
          'top': '87%'
        });
      }

      else if ((docHeight - winScrolled) > 1) {


        $("#stickySide2").css({
          'top': '95%'
        });
      }


    });

  }





  //mobile settings

  if ($(document).innerWidth() <= 767) {

    $(window).on("scroll", function () {
      var docHeight = $(document).height();
      var winScrolled = $(window).height() + $(window).scrollTop(); // Sum never quite reaches
      if ((docHeight - winScrolled) < 1) {

        $(".blueTab").css({
          'bottom': ($('footer').height() + 'px')
        });
      }

      else if ((docHeight - winScrolled) > 1) {

        $(".blueTab").css({
          'bottom': 0
        });
      }

    });


    // $('.secondBlock').removeClass('flexing-scroll');
    // $('.secondBlock').addClass('flexing-fixed');
    $("#slideOut").css('right', '0')
    $("#slideOut").css('opacity', '1')
    $("#slideOut").css("bottom", -$('#slideOut').height());



    $('.blueTab').on('click', function () {

      // $('.wrapper').show();
      //
      //
      // $('#smaller').html('Frequently Asked Questions')

      $("#slideOut").css('opacity', '1')

      $("#slideOut").animate({
        bottom: '0',


      }, 200);

      // $('.secondBlock').removeClass('flexing-scroll');
      // $('.secondBlock').addClass('flexing-fixed');
      //
      // $('.firstBlock').removeClass('flexing-fixed');


    })


    // $('.toggleModal2').on('click', function() {
    //
    //
    //   $('.wrapper').hide();
    //
    //   $('#smaller').html('For more information about this study, please contact:')
    //
    //   $("#slideOut").css('opacity', '1')
    //
    //   $("#slideOut").animate({
    //     bottom:'0',
    //
    //
    //   }, 200);
    //
    //   $('.secondBlock').removeClass('flexing-scroll');
    //   $('.secondBlock').removeClass('flexing-fixed');
    //
    //   $('.firstBlock').addClass('flexing-fixed');
    //
    //
    // })
    //
    //
    // $('.emailUs').on('click', function() {
    //
    //   $('#smaller').html('Contact Us')
    //
    //   $(".thirdBlock").addClass('animated fadeIn')
    //
    //
    // })


    $('#close').on('click', function () {

      $(".thirdBlock").removeClass('animated fadeIn');
      $('.firstBlock').removeClass('flexing-scroll');

      $('.wrapper').show();


      $("#slideOut").css('opacity', '0')

      $("#slideOut").css("bottom", -$('#slideOut').height());


      $('.firstAngle').removeClass('rotate');
      $('.secondAngle').removeClass('rotate')

    })

  }

})
