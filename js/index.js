$(document).ready(function () {

  $('#close').on('click', function () {
    setTimeout(function () {
      $('.block50').removeClass('active')
    }, 800)

    $('#slideOut').removeClass('showSlideOut')

  })


  // $('#stickySide a').on('focus', function () {
  //     $('.circle', this).css('box-shadow', '0px 0px 5px 5px rgba(0,0,255,1)')
  // })
  //
  // $('#stickySide a').on('blur', function () {
  //     $('.circle', this).css('box-shadow', 'none')
  // })
  //
  // $('#sendMessage').on('focus', function () {
  //     $(this).css('box-shadow', '0px 0px 5px 5px rgba(0,0,255,1)')
  // })
  //
  // $('#sendMessage').on('blur', function () {
  //     $(this).css('box-shadow', 'none')
  // })

  //scrolling

  $('a[href^="#top"]').on('click', function (event) {

    $('.circle.first').addClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').removeClass('activate');

    if ($('.circle.second').hasClass('activate')) {
      $('.circle.second').removeClass('activate')
      $('.circle.first').addClass('activate')
    }

    if ($('.circle.third').hasClass('activate')) {
      $('.circle.third').removeClass('activate')
      $('.circle.first').addClass('activate')
    }


    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });


  $('a[href^="#topLastAnchor"]').on('click', function (event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').addClass('activate');

    if ($('.circle.first').hasClass('activate')) {
      $('.circle.third').addClass('activate')
      $('.circle.first').removeClass('activate')
    }


    if ($('.circle.second').hasClass('activate')) {
      $('.circle.second').removeClass('activate')
      $('.circle.third').addClass('activate')

    }

    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });

  $('a[href^="#topLastAnchor"]').on('hover', function (event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').addClass('activate');

  });

  $('a[href^="#top"]').on('hover', function (event) {

    $('.circle.first').addClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').removeClass('activate');


  });

  $('a[href^="#topOccupations"]').on('click', function (event) {

    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });


  $('a[href^="#topSecondAnchor"]').on('click', function (event) {

    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });

  $('a[href^="#veryTop"]').on('click', function (event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').addClass('activate');
    $('.circle.third').removeClass('activate');

    if ($('.circle.first').hasClass('activate')) {
      $('.circle.second').addClass('activate')
      $('.circle.first').removeClass('activate')
    }


    if ($('.circle.third').hasClass('activate')) {
      $('.circle.second').addClass('activate')
      $('.circle.third').removeClass('activate')

    }

    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });

  $('a[href^="#veryTop"]').on('hover', function (event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').addClass('activate');
    $('.circle.third').removeClass('activate');

  });

  $('a[href^="#veryVeryTop"]').on('click', function (event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').removeClass('activate');

    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });

  $('a[href^="#slideDown"]').on('click', function (event) {

    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });

  $('.checks').on('keypress', function (event) {
    if (event.which === 13) {

      this.checked = !this.checked;
    }
  });

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

  $('#veryBottom').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      $('.panel-title a').first().focus();
    }

  })

  $('#veryBottom2').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      $('.panel-title a').first().focus();
    }

  })

  $('#bottomLastAnchor').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      setTimeout(function () {
        $('#veryVeryBottom').focus();
      }, 1200)

    }

  })




  $('#bottomLastAnchor2').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      setTimeout(function () {
        $('.dial').focus();
      }, 1200)
    }

  })


  $('#veryVeryBottom').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      $('#accessCode1').focus();
    }

  })

  $('#bottom').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      $('#about').focus();
    }

  })

  // $('#sendMessage').on('focusout', function () {
  //   $('#accessCode1').focus();
  // })

  $('#bottom').on('focusout', function () {
    $('#veryBottom').focus();
  })






  $("#submitButton").on("click", function () {
    $('#submitButton').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)');

  })

  $("#submitButton").on("focus", function () {
    $('#submitButton').css('background-image', 'linear-gradient(180deg, rgba(0,70,127,1) 0%, rgba(0,70,127,1) 34%, rgba(0,70,127,1) 77%)');

  })




  $('.dial').on('focus', function () {
    $('#slideOut').addClass('showSlideOut');
  })


  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });



  setTimeout(function () {
    $('.block660 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')


  }, 100)

  setTimeout(function () {
    $('.block660 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

  }, 300)

  setTimeout(function () {
    $('.block660 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp');


  }, 600)

  setTimeout(function () {
    $('.block660 .content-last').removeClass('transparent-opacity').addClass('animated fadeInUp')

  }, 900)

  setTimeout(function () {
    $('.block660 .content-secondLast').removeClass('transparent-opacity').addClass('animated fadeInUp')

  }, 1100)
  setTimeout(function () {
    $('.block660 .content-thirdLast').removeClass('transparent-opacity').addClass('animated fadeInUp')

  }, 1500)

  setTimeout(function () {
    $('.block660 .content-fourthLast').removeClass('transparent-opacity').addClass('animated fadeInUp')

  }, 1700)


  setTimeout(function () {
    $('.block600 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')


  }, 200)

  setTimeout(function () {
    $('.block600 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

  }, 400)

  setTimeout(function () {
    $('.block600 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp');


  }, 800)

  setTimeout(function () {
    $('.block600 .content-last').removeClass('transparent-opacity').addClass('animated fadeInUp')

  }, 1200)

  setTimeout(function () {
    $('.block600 .content-secondLast').removeClass('transparent-opacity').addClass('animated fadeInUp')

  }, 1400)


  // if ($(document).innerWidth() >= 992) {

  $(window).on('scroll', function () {
    var screenTop = $(window).scrollTop();
    var screenBottom = $(window).scrollTop() + window.innerHeight;

    $('section').each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = $(this).offset().top + $(this).outerHeight();

      if ((screenBottom > elementTop + ($(this).find('.heros').height() + 300)) && (screenTop < elementBottom)) {
        $('section').removeClass('active')
        $(this).addClass('active')
      }
      else {
        $(this).removeClass('active')
      }
    })

    if ($('.block4').hasClass('active')) {


      setTimeout(function () {
        $('.block4 .content-top').removeClass('transparent-opacity').addClass('animated fadeIn')

      }, 100)

      setTimeout(function () {
        $('.block4 .content-middle').removeClass('transparent').addClass('animated  fadeIn')

      }, 160)

      setTimeout(function () {
        $('.block4 .content-bottom').removeClass('transparent').addClass('animated fadeIn')


      }, 220)


      setTimeout(function () {
        $('.block4 .content-last').removeClass('transparent').addClass('animated fadeIn')


      }, 400)

      setTimeout(function () {
        $('.block4 .content-secondLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 500)

      setTimeout(function () {
        $('.block4 .content-thirdLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 600)

      setTimeout(function () {
        $('.block4 .content-fourthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 700)

      setTimeout(function () {
        $('.block4 .content-fifthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 800)

      setTimeout(function () {
        $('.block4 .content-sixthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 900)

      setTimeout(function () {
        $('.block4 .content-seventhLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1000)

      setTimeout(function () {
        $('.block4 .content-eighthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1100)

      setTimeout(function () {
        $('.blocks4 .content-ninthLast').removeClass('transparent').addClass('animated fadeIn')

      }, 1200)


    }


    if ($('.block44').hasClass('active')) {


      setTimeout(function () {
        $('.block44 .content-top').removeClass('transparent-opacity').addClass('animated fadeIn')

      }, 100)

      setTimeout(function () {
        $('.block44 .content-middle').removeClass('transparent').addClass('animated  fadeIn')

      }, 160)

      setTimeout(function () {
        $('.block44 .content-bottom').removeClass('transparent').addClass('animated fadeIn')


      }, 220)


      setTimeout(function () {
        $('.block44 .content-last').removeClass('transparent').addClass('animated fadeIn')


      }, 400)

      setTimeout(function () {
        $('.block44 .content-secondLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 500)

      setTimeout(function () {
        $('.block44 .content-thirdLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 600)

      setTimeout(function () {
        $('.block44 .content-fourthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 700)

      setTimeout(function () {
        $('.block44 .content-fifthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 800)

      setTimeout(function () {
        $('.block44 .content-sixthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 900)

      setTimeout(function () {
        $('.block44 .content-seventhLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1000)

      setTimeout(function () {
        $('.block44 .content-eighthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1100)

      setTimeout(function () {
        $('.blocks44 .content-ninthLast').removeClass('transparent').addClass('animated fadeIn')


      }, 1200)


    }


    if ($('.block444').hasClass('active')) {


      setTimeout(function () {
        $('.block444 .content-top').removeClass('transparent-opacity').addClass('animated fadeIn')

      }, 100)

      setTimeout(function () {
        $('.block444 .content-middle').removeClass('transparent').addClass('animated  fadeIn')

      }, 160)

      setTimeout(function () {
        $('.block444 .content-bottom').removeClass('transparent').addClass('animated fadeIn')


      }, 220)


      setTimeout(function () {
        $('.block444 .content-last').removeClass('transparent').addClass('animated fadeIn')


      }, 400)

      setTimeout(function () {
        $('.block444 .content-secondLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 500)

      setTimeout(function () {
        $('.block444 .content-thirdLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 600)

      setTimeout(function () {
        $('.block444 .content-fourthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 700)

      setTimeout(function () {
        $('.block444 .content-fifthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 800)

      setTimeout(function () {
        $('.block444 .content-sixthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 900)

      setTimeout(function () {
        $('.block444 .content-seventhLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1000)

      setTimeout(function () {
        $('.block444 .content-eighthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1100)

      setTimeout(function () {
        $('.blocks444 .content-ninthLast').removeClass('transparent').addClass('animated fadeIn')

      }, 1200)

    }


  });

  $(window).on('scroll', function () {
    var screenTop = $(window).scrollTop();
    var screenBottom = $(window).scrollTop() + window.innerHeight;

    $('section').each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = $(this).offset().top + $(this).outerHeight();

      if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3)) && (screenTop < elementBottom)) {
        $('section').removeClass('active')
        $(this).addClass('active')
      }
      else {
        $(this).removeClass('active')
      }
    })


    $('main').each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = $(this).offset().top + $(this).outerHeight();

      if ((screenBottom > elementTop + ($(this).find('.heros2').height())) && (screenTop < elementBottom)) {
        $('main').removeClass('active2')
        $(this).addClass('active2')
      }
      else {
        $(this).removeClass('active2')
      }
    })



    $('article').each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = $(this).offset().top + $(this).outerHeight();

      if ((screenBottom > elementTop + ($(this).find('.heros3').height() / 6)) && (screenTop < elementBottom)) {
        $('article').removeClass('active3')
        $(this).addClass('active3')
      }
      else {
        $(this).removeClass('active3')
      }
    })


    if ($('.sticky').hasClass('active3')) {

      $("#stickySide").fadeIn()

    }

    else if ($('.top').hasClass('active2')) {


      $('.circle.first').removeClass('activate');
      $('.circle.second').removeClass('activate');
      $('.circle.third').removeClass('activate');


      $("#stickySide").fadeOut()


    }

    if ($('.block100').hasClass('active')) {

      setTimeout(function () {
        $('.block100 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 10)

    }


    if ($('.fade1').hasClass('active')) {

      setTimeout(function () {
        $('.fade1 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 20)

    }


    if ($('.block55').hasClass('active')) {


      setTimeout(function () {
        $('.block55 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 10)

    }


    if ($('.block50').hasClass('active')) {


      $('.circle.first').removeClass('activate');
      $('.circle.second').removeClass('activate');
      $('.circle.third').addClass('activate');


    }


    if ($('.block5').hasClass('active')) {



      setTimeout(function () {
        $('.block5 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 50)

      setTimeout(function () {
        $('.block5 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 150)


      $('.circle.first').removeClass('activate');
      $('.circle.second').addClass('activate');
      $('.circle.third').removeClass('activate');

    }


    if ($('.block11').hasClass('active')) {


      setTimeout(function () {
        $('.block11 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 10)

      setTimeout(function () {
        $('.block11 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 500)

      setTimeout(function () {
        $('.block11 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 700)

    }

    if ($('.block12').hasClass('active')) {

      setTimeout(function () {
        $('.block12 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 10)

      setTimeout(function () {
        $('.block12 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 200)



    }

    if ($('.block00').hasClass('active')) {

      setTimeout(function () {
        $('.block00 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

    }


    if ($('.block6').hasClass('active')) {

      $('.circle.first').addClass('activate');
      $('.circle.second').removeClass('activate');
      $('.circle.third').removeClass('activate');



      setTimeout(function () {
        $('.block6 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')


      }, 200)

      setTimeout(function () {
        $('.block6 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 400)

      setTimeout(function () {
        $('.block6 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp');


      }, 600)

      setTimeout(function () {
        $('.block6 .content-last').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 900)

      setTimeout(function () {
        $('.block6 .content-secondLast').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 1200)


    }


    if ($('.block66').hasClass('active')) {


      setTimeout(function () {
        $('.block66 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

    }

    if ($('.block7').hasClass('active')) {


      setTimeout(function () {
        $('.block7 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

    }

    if ($('.block8').hasClass('active')) {


      setTimeout(function () {
        $('.block8 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

    }


    if ($('.block9').hasClass('active')) {


      setTimeout(function () {
        $('.block9 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

    }

    if ($('.block10').hasClass('active')) {


      setTimeout(function () {
        $('.block10 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

      setTimeout(function () {
        $('.block10 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 600)

    }

  });


  // }


  // var bottomPic = document.getElementById('bottomPic');
  //
  //
  // console.log(window.getComputedStyle(bottomPic).height);
  //
  // var bottomBlock = document.getElementById('bottomBlock');
  //
  // console.log(window.getComputedStyle(bottomBlock).height);
  //
  //
  // var slide = document.getElementById('slideOut');
  //
  // console.log(window.getComputedStyle(slide).height)

  //focus and click button actions


  $(".mandatoryfields").on("keypress", function () {
    if (!$('#formControl1').val() == '' && !$('#formControl2').val() == '' && !$('#general-inquiry').val() == '' && !$('#formControl4').val() == '') {

      $('#sendMessage').css('background', 'white');
      $('#sendMessage').css('color', '#008289');
      $('.fa.fa-envelope-o').css('color', '#008289');

    }
    else {

      $('#sendMessage').css('background', 'transparent');
      $('#sendMessage').css('color', 'white');
      $('.fa.fa-envelope-o').css('color', 'white');
    }

  });


  $('#sendMessage').click(function (e) {

    if (!$('#formControl1').val() == '' && !$('#formControl2').val() == '' && !$('#general-inquiry').val() == '' && !$('#formControl4').val() == '') {

      e.preventDefault()

      $('section').removeClass('block50');
      $("#slideOut").addClass('showSlideOut');
      $("#slideOut").css('right', '85px');

      $(".secondBlock").removeClass('hide2').addClass('animated fadeIn').show();

      $(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();

    }

  });

  $('#sendMessage').mouseover(function () {
    $('#sendMessage').css('background', 'white');
    $('#sendMessage').css('color', '#008289');
    $('.fa.fa-envelope-o').css('color', '#008289');
  })

  $('#sendMessage').mouseleave(function () {
    $('#sendMessage').css('background', '#008289');
    $('#sendMessage').css('color', 'white');
    $('.fa.fa-envelope-o').css('color', 'white');
  })

  //scrolling states for sticky nav
  $('#bottom').focus(function () {

    $('.tealBox.first').css('background', 'linear-gradient(180deg, rgba(131,131,131,0.9122023809523809) 0%, rgba(64,64,64,1) 100%)');
    $('.tealBox.second').css('background', 'linear-gradient(180deg, rgba(0,170,170,0.9430147058823529) 0%, rgba(0,70,127,1) 100%)');
    $('.tealBox.third').css('background', 'linear-gradient(180deg, rgba(0,170,170,0.9430147058823529) 0%, rgba(0,70,127,1) 100%)');

  })

  $('#bottom').keydown(function () {

    $('.tealBox.first').css('background', 'linear-gradient(180deg, rgba(0,170,170,0.9430147058823529) 0%, rgba(0,70,127,1) 100%)');

  })


  $('#veryBottom').focus(function () {

    $('.tealBox.second').css('background', 'linear-gradient(180deg, rgba(131,131,131,0.9122023809523809) 0%, rgba(64,64,64,1) 100%)');
    $('.tealBox.first').css('background', 'linear-gradient(180deg, rgba(0,170,170,0.9430147058823529) 0%, rgba(0,70,127,1) 100%)');
    $('.tealBox.third').css('background', 'linear-gradient(180deg, rgba(0,170,170,0.9430147058823529) 0%, rgba(0,70,127,1) 100%)');

  })

  $('#veryBottom').keydown(function () {

    $('.tealBox.second').css('background', 'linear-gradient(180deg, rgba(0,170,170,0.9430147058823529) 0%, rgba(0,70,127,1) 100%)');


  })


  $('#bottomLastAnchor').focus(function () {

    $('.tealBox.third').css('background', 'linear-gradient(180deg, rgba(131,131,131,0.9122023809523809) 0%, rgba(64,64,64,1) 100%)');
    $('.tealBox.second').css('background', 'linear-gradient(180deg, rgba(0,170,170,0.9430147058823529) 0%, rgba(0,70,127,1) 100%)');
    $('.tealBox.first').css('background', 'linear-gradient(180deg, rgba(0,170,170,0.9430147058823529) 0%, rgba(0,70,127,1) 100%)');


  })

  $('#bottomLastAnchor').keydown(function () {

    $('.tealBox.third').css('background', 'linear-gradient(180deg, rgba(0,170,170,0.9430147058823529) 0%, rgba(0,70,127,1) 100%)');


  })


  $('#accessCode1').keydown(function (event) {
    $('.button-default').css('background', '#00467f');

  });


  if ($(document).innerWidth() <= 991) {

    $('#accessCode1').focus(function () {
      $('html, body').animate({ scrollTop: ($('#accessCode1').offset().top - 300) }, 500);
      return false;
    });

  }

  if ($(document).innerWidth() <= 1024) {

    $("#slideOut").css("right", -$('#slideOut').outerWidth());

  }


  if ($(document).innerWidth() >= 768) {

    $(window).on('scroll', function () {
      var screenTop = $(window).scrollTop();
      var screenBottom = $(window).scrollTop() + window.innerHeight;

      $('section').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = $(this).offset().top + $(this).outerHeight();

        if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3)) && (screenTop < elementBottom)) {
          $('section').removeClass('active')
          $(this).addClass('active')
        }
        else {
          $(this).removeClass('active')
        }
      })


      $('main').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = $(this).offset().top + $(this).outerHeight();

        if ((screenBottom > elementTop + ($(this).find('.heros2').height())) && (screenTop < elementBottom)) {
          $('main').removeClass('active2')
          $(this).addClass('active2')
        }
        else {
          $(this).removeClass('active2')
        }
      })



      $('article').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = $(this).offset().top + $(this).outerHeight();

        if ((screenBottom > elementTop + ($(this).find('.heros3').height() / 6)) && (screenTop < elementBottom)) {
          $('article').removeClass('active3')
          $(this).addClass('active3')
        }
        else {
          $(this).removeClass('active3')
        }
      })


      if ($('.sticky').hasClass('active3')) {

        $("#stickySide").fadeIn()

      }


      else if ($('.top').hasClass('active2')) {


        $('.circle.first').removeClass('activate');
        $('.circle.second').removeClass('activate');
        $('.circle.third').removeClass('activate');

        $("#stickySide").fadeOut()

      }

      if ($('.block100').hasClass('active')) {

        setTimeout(function () {
          $('.block100 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 10)

      }

      if ($('.fade1').hasClass('active')) {

        setTimeout(function () {
          $('.fade1 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 20)

      }


      if ($('.block55').hasClass('active')) {


        setTimeout(function () {
          $('.block55 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 10)

      }

      if ($('.block50').hasClass('active')) {


        $('.circle.first').removeClass('activate');
        $('.circle.second').removeClass('activate');
        $('.circle.third').addClass('activate');

        $('#slideOut').addClass('showSlideOut');

      }


      if ($('.block5').hasClass('active')) {

        $('.circle.first').removeClass('activate');
        $('.circle.second').addClass('activate');
        $('.circle.third').removeClass('activate');

      }

      if (!$('.block50').hasClass('active') || $('.block5').hasClass('active')) {


        $('#slideOut').removeClass('showSlideOut')
      }


      if ($('.block11').hasClass('active')) {


        setTimeout(function () {
          $('.block11 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 10)

        setTimeout(function () {
          $('.block11 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 500)

        setTimeout(function () {
          $('.block11 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 700)

      }

      if ($('.block12').hasClass('active')) {


        setTimeout(function () {
          $('.block12 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 10)

        setTimeout(function () {
          $('.block12 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 200)



      }

      if ($('.block00').hasClass('active')) {


        setTimeout(function () {
          $('.block00 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }


      if ($('.block6').hasClass('active')) {

        $('.circle.first').addClass('activate');
        $('.circle.second').removeClass('activate');
        $('.circle.third').removeClass('activate');

        setTimeout(function () {
          $('.block6 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')


        }, 500)

        setTimeout(function () {
          $('.block6 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 800)

        setTimeout(function () {
          $('.block6 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp');


        }, 1200)

        setTimeout(function () {
          $('.block6 .content-last').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 1500)

        setTimeout(function () {
          $('.block6 .content-secondLast').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 1900)


      }


      if ($('.block66').hasClass('active')) {


        setTimeout(function () {
          $('.block66 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }

      if ($('.block7').hasClass('active')) {


        setTimeout(function () {
          $('.block7 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }

      if ($('.block8').hasClass('active')) {


        setTimeout(function () {
          $('.block8 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }


      if ($('.block9').hasClass('active')) {


        setTimeout(function () {
          $('.block9 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }

      if ($('.block10').hasClass('active')) {


        setTimeout(function () {
          $('.block10 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

        setTimeout(function () {
          $('.block10 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 600)

      }

    });

    //password for input button

    function show() {
      var p = document.getElementById('accessCode1');
      p.setAttribute('type', 'text');
    }

    function hide() {
      var p = document.getElementById('accessCode1');
      p.setAttribute('type', 'password');
    }

    var pwShown = 0;

    document.getElementById("togglePassword").addEventListener("click", function () {



      if (pwShown == 0) {
        pwShown = 1;
        show();

        $("#eye").attr('src', "images/close-eye-teal.png");
        $('.mr-1').css('margin-top', '2px');

        $('#access').html('Hide Access Code')

      } else {
        pwShown = 0;
        hide();

        $("#eye").attr('src', "images/show_pw_icon.svg");

        $('.mr-1').css('margin-top', '-2px');

        $('#access').html('Show Access Code')
      }
    }, false);


    //
    // $('.dial').on('click', function () {
    //     $('.dial').css('box-shadow', 'none');
    //
    // })
    //
    // $('#eye').on('click', function () {
    //     $('#eye').css('box-shadow', 'none');
    //
    // })
    //
    // $('.dial').on('focus', function () {
    //
    //     $('.dial').css('box-shadow', '0px 0px 5px 5px rgba(0,0,255,1)')
    //
    // })
    //
    // $('.dial').on('focusout', function () {
    //
    //     $('.dial').css('box-shadow', 'none')
    //
    // })
    //
    // $('#eye').on('focusout', function () {
    //
    //     $('#eye').css('box-shadow', 'none')
    //
    // })


    document.getElementById("eye").addEventListener("keyup", function (e) {

      // $('#eye').css('box-shadow', '0px 0px 5px 5px rgba(0,0,255,1)');

      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 9) {
        $(this).css('outline', 'dashed 3px #4599ff')
      }

    })
    $('#eye').on('focusout', function() {
      $(this).css('outline', 'none')
    })


    $(".button-default").on("keyup", function (e) {

      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 9) {
        $(this).css('outline', 'dashed 3px #4599ff')

      }

    })
    $(".button-default").on('focusout', function() {
      $(this).css('outline', 'none')
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


    $('#stickySide a').on("keyup", function (e) {

      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 9) {
        $('.circle', this).css('outline', 'dashed 3px #4599ff')
      }
    })

    $('#stickySide a').on('focusout', function () {
      $('.circle', this).css('outline', 'none')
    })


    // $('#bottomLastAnchor').on('focusout', function() {
    //   $('#veryVeryBottom').focus()
    // })
    //
    // $("#veryVeryBottom").on("focus", function (e) {
    //   //
    //   // var code = (e.keyCode ? e.keyCode : e.which);
    //   // if (code == 9) {
    //     $(this).closest('.circle.blue').css('box-shadow', '0px 0px 5px 5px rgba(0,0,255,1)')
    //   //
    //   // }
    // })
    // $("#stickySide a").on('focusout', function() {
    //   $(this).css('outline', 'none')
    // })


    document.getElementById("eye").addEventListener("keyup", function (e) {

      // $('#eye').css('box-shadow', '0px 0px 5px 5px rgba(0,0,255,1)');

      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 13) {
        if (pwShown == 0) {
          pwShown = 1;
          show();

          $("#eye").attr('src', "images/close-eye-teal.png");
          $('.mr-1').css('margin-top', '2px');

          $('#access').html('Hide Access Code')

        }
        else {
          pwShown = 0;
          hide();

          $("#eye").attr('src', "images/show_pw_icon.svg");

          $('.mr-1').css('margin-top', '-2px');

          $('#access').html('Show Access Code')
        }

      }

    }, false);



  }

  if ($(document).innerWidth() <= 767) {

    $("#slideOut").css("right", 0);

    $('#slideOut').removeClass('showSlideOut')

    $("#slideOut").css("bottom", -$('#slideOut').height());

    var overlay = document.getElementById('whiteBlock');

    // console.log(window.getComputedStyle(overlay).height);


    $(window).on("scroll", function () {
      var docHeight = $(document).height();
      var winScrolled = $(window).height() + $(window).scrollTop(); // Sum never quite reaches
      if ((docHeight - winScrolled) > 10) {

        var setHeight = $("#whiteBlock").height();

        $("#slideOut").delay(100).animate({
          bottom: '0',
          top: setHeight

        }, 500);

      }


    });


    function show() {
      var p = document.getElementById('accessCode1');
      p.setAttribute('type', 'text');
    }

    function hide() {
      var p = document.getElementById('accessCode1');
      p.setAttribute('type', 'password');
    }

    var pwShown = 0;

    document.getElementById("togglePassword2").addEventListener("click", function () {
      if (pwShown == 0) {
        pwShown = 1;
        show();


        $("#closedEye").attr('src', "images/close-eye-teal.png");



      } else {
        pwShown = 0;
        hide();

        $("#closedEye").attr('src', "images/show_pw_icon.svg");


      }
    }, false);

    //
    // var sticky = document.getElementById('stickyBottom');
    //
    // console.log(window.getComputedStyle(sticky).height);


    $(".westat-footer").css({
      'bottom': ($(sticky).height() + 'px')
    });


    $(window).on('scroll', function () {
      var screenTop = $(window).scrollTop();
      var screenBottom = $(window).scrollTop() + window.innerHeight;

      $('section').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = $(this).offset().top + $(this).outerHeight();

        if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3)) && (screenTop < elementBottom)) {
          $('section').removeClass('active')
          $(this).addClass('active')
        }
        else {
          $(this).removeClass('active')
        }
      })


      $('main').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = $(this).offset().top + $(this).outerHeight();

        if ((screenBottom > elementTop + ($(this).find('.heros2').height())) && (screenTop < elementBottom)) {
          $('main').removeClass('active2')
          $(this).addClass('active2')
        }
        else {
          $(this).removeClass('active2')
        }
      })



      $('article').each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = $(this).offset().top + $(this).outerHeight();

        if ((screenBottom > elementTop + ($(this).find('.heros3').height() / 6)) && (screenTop < elementBottom)) {
          $('article').removeClass('active3')
          $(this).addClass('active3')
        }
        else {
          $(this).removeClass('active3')
        }
      })

      if ($('.sticky').hasClass('active3')) {

        $("#stickySide").fadeIn()


      }


      else if ($('.top').hasClass('active2')) {

        $('.circle.first').removeClass('activate');
        $('.circle.second').removeClass('activate');
        $('.circle.third').removeClass('activate');

        $('.tealBox.first').removeClass('grayBackground')
        $('.tealBox.second').removeClass('grayBackground')
        $('.tealBox.third').removeClass('grayBackground')

        $("#stickySide").fadeOut()

      }

      if ($('.block100').hasClass('active')) {


        setTimeout(function () {
          $('.block100 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 10)

      }


      if ($('.fade1').hasClass('active')) {


        setTimeout(function () {
          $('.fade1 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 20)

      }


      if ($('.block55').hasClass('active')) {


        setTimeout(function () {
          $('.block55 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 10)

      }


      if ($('.block50').hasClass('active')) {

        $('.circle.first').removeClass('activate');
        $('.circle.second').removeClass('activate');
        $('.circle.third').addClass('activate');

        $('.tealBox.first').removeClass('grayBackground')
        $('.tealBox.second').removeClass('grayBackground')
        $('.tealBox.third').addClass('grayBackground')

      }


      if ($('.block5').hasClass('active')) {

        $('.circle.first').removeClass('activate');
        $('.circle.second').addClass('activate');
        $('.circle.third').removeClass('activate');

        $('.tealBox.first').removeClass('grayBackground')
        $('.tealBox.second').addClass('grayBackground')
        $('.tealBox.third').removeClass('grayBackground')
      }



      if ($('.block11').hasClass('active')) {


        setTimeout(function () {
          $('.block11 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 10)

        setTimeout(function () {
          $('.block11 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 500)

        setTimeout(function () {
          $('.block11 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 700)

      }

      if ($('.block12').hasClass('active')) {


        setTimeout(function () {
          $('.block12 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 10)

        setTimeout(function () {
          $('.block12 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 200)

      }

      if ($('.block00').hasClass('active')) {


        setTimeout(function () {
          $('.block00 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }

      if ($('.block6').hasClass('active')) {

        $('.circle.first').addClass('activate');
        $('.circle.second').removeClass('activate');
        $('.circle.third').removeClass('activate');

        $('.tealBox.first').addClass('grayBackground')
        $('.tealBox.second').removeClass('grayBackground')
        $('.tealBox.third').removeClass('grayBackground')


        setTimeout(function () {
          $('.block6 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')


        }, 500)

        setTimeout(function () {
          $('.block6 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 800)

        setTimeout(function () {
          $('.block6 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp');


        }, 1200)

        setTimeout(function () {
          $('.block6 .content-last').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 1500)

        setTimeout(function () {
          $('.block6 .content-secondLast').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 1900)


      }


      if ($('.block66').hasClass('active')) {


        setTimeout(function () {
          $('.block66 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }

      if ($('.block7').hasClass('active')) {


        setTimeout(function () {
          $('.block7 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }

      if ($('.block8').hasClass('active')) {


        setTimeout(function () {
          $('.block8 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }


      if ($('.block9').hasClass('active')) {


        setTimeout(function () {
          $('.block9 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

      }

      if ($('.block10').hasClass('active')) {


        setTimeout(function () {
          $('.block10 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

        })

        setTimeout(function () {
          $('.block10 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

        }, 600)

      }


    });


  }

  if ($(document).innerWidth() <= 991) {

    var box1 = document.getElementById('box1');

    var box2 = document.getElementById('box2');

    console.log(window.getComputedStyle(box1).width);
    console.log(window.getComputedStyle(box2).width);

    $(".grayBox").css({
      'width': ($(box1).outerWidth() + 'px')
    });

    $(".grayBox2").css({
      'width': ($(box2).outerWidth() + 'px')
    });

  }


  (function ($) {

    $.fn.animateAuto = function (prop, speed, callback) {
      var elem, height, width;
      return this.each(function (i, el) {
        el = $(el), elem = el.clone().css({
          "height": "auto",
          "width": "auto"
        }).appendTo("body");
        height = elem.css("height"), width = elem.css("width"), elem.remove();

        if (prop === "height") {
          el.animate({
            "height": height
          }, speed, callback);
        }
        else if (prop === "width") {
          el.animate({
            "width": width
          }, speed, callback);
        }
        else if (prop === "both") {
          el.animate({
            "width": width,
            "height": height
          }, speed, callback);
        }
      });
    }
  })(jQuery);


  $('.fa.fa-angle-down').click(function () {
    $('.landing-panel.new.reveal-closed').animateAuto('both', 600);

    setTimeout(function () {
      $('.fa.fa-angle-down').addClass('rotate')
    }, 1200)


  });


  $('.fa.fa-angle-down').click(function () {


    if ($('.fa.fa-angle-down').hasClass('rotate')) {

      setTimeout(function () {
        $('.fa.fa-angle-down').removeClass('rotate')
      }, 1200)


      console.log('thing')

      $('.landing-panel.new.reveal-closed').animate(
        {
          height: 400
        },
        {
          duration: 500,

        }
      );

    }


  })



});
