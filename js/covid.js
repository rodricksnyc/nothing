$(document).ready(function () {

  //508 tabbing

  $("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link, select, span").on("keyup", function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 3px #4599ff')
    }

  })
  $("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link, select, span").on('focusout', function() {
    $(this).css('outline', 'none')
  })


  //rotate caret

$('.collapse').on('show.bs.collapse', function () {

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(180deg)"
  });

});
$('.collapse').on('hide.bs.collapse', function () {

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(0deg)"
  });

});



var hash = 1;

$(".ques").each(function(i){
  var count = "ques" + (++hash)

  $(this).attr("href",  "#" + count);


  $(this).closest('.card').find('.collapse').attr("id", count);
});


function expand(toggleValue) {

  return function(e){

    $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $(`.expandAll${toggleValue} .collapse`).collapse('toggle');

    if ( $(this).html() == 'Collapse All') {
      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="far fa-compress-arrows-alt berry changeIcon${toggleValue}"></i>`)
    }

    if ( $(this).html() == 'Expand All') {
      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="fal fa-expand-alt berry changeIcon${toggleValue}"></i>`);
    }


    // if ($(this).html() == 'Collapse All' && $(this).is('.white')) {
    //
    //   $(`.changeIcon${toggleValue}`).replaceWith(`<i class="far fa-angle-up changeIcon${toggleValue}"></i>`)
    // }
    //
    //
    // if ($(this).html() == 'Expand All' && $(this).is('.white')){
    //   $(`.changeIcon${toggleValue}`).replaceWith(`<i class="far fa-angle-down  changeIcon${toggleValue}"></i>`);
    // }



  }
}


$('#toggleAccordion1').keypress(expand(1)).click(expand(1));

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


  function toggleBegin(el) {
	$(el).attr('href') === '#signin' ? (
		$('.landing-panel-p2').show(),
		// $('.form-signin-heading').text('To start your survey, please enter the PIN included in your invitation letter.')
		$('.form-login-input').hide(),
		$('.form-signin-input').show()
	) : (
		$('.landing-panel-p2 second').hide(),
		// $('.form-signin-heading').text('Log in with your username and password.'),
		$('.form-signin-input').hide(),
		$('.form-login-input').show().css('display', 'flex')
	);
}

$('.form-login-a').on('click', function (e) {
	toggleBegin(this);
})

$('.form-login-a').on('keypress', function (e) {
	toggleBegin(this);
})

$('.form-login-a').on('click', function (e) {
	// $('#access2').html('Show password')
	$('#MainContent_btnContinue').val('Login');
	$('#MainContent_Label1').addClass('hidden')
	$('#blue').html('New participant? Enter PIN')

	$('#blue').hide()
	$('.landing-panel-p2').hide()
	$('.form-login-a.second').show().css('display', 'flex')
	$('.landing-panel-p1.text-center').html('Welcome back to the PATH Study!')
	$('.position-relative.form-login-input input:eq(0)').focus()


})



$('.form-login-a.second').on('click', function (e) {
	$('.form-signin input:eq(0)').focus()
	$('#blue').html('Already a participant? Log in')
	$('#MainContent_btnContinue').val('Get Started');
	$('#MainContent_Label1').removeClass('hidden')

	$('#blue').show()
	$('.landing-panel-p2').show()
	$('.form-login-a.second').hide()
	$('.landing-panel-p1.text-center').html('Welcome to the PATH Study!')

})





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

      if ((screenBottom > elementTop + ($(this).find('.heros3').height() / 10)) && (screenTop < elementBottom)) {
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

      // $('.redBox').css('background', '#AD0000')


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



      // setTimeout(function () {
      //   $('.block6 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')
      //
      //
      // }, 200)
      //
      // setTimeout(function () {
      //   $('.block6 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')
      //
      // }, 400)
      //
      // setTimeout(function () {
      //   $('.block6 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp');
      //
      //
      // }, 600)
      //
      // setTimeout(function () {
      //   $('.block6 .content-last').removeClass('transparent-opacity').addClass('animated fadeInUp')
      //
      // }, 900)
      //
      // setTimeout(function () {
      //   $('.block6 .content-secondLast').removeClass('transparent-opacity').addClass('animated fadeInUp')
      //
      // }, 1200)


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
          $('.block6 .content-top').removeClass('transparent-opacity').addClass('animated fadeIn')


        }, 600)

        setTimeout(function () {
          $('.block6 .content-middle').removeClass('transparent-opacity').addClass('animated fadeIn')

        }, 800)

        setTimeout(function () {
          $('.block6 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeIn');


        }, 1100)

        setTimeout(function () {
          $('.block6 .content-last').removeClass('transparent-opacity').addClass('animated fadeIn')

        }, 1300)

        setTimeout(function () {
          $('.block6 .content-secondLast').removeClass('transparent-opacity').addClass('animated fadeIn')

        }, 1500)


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




  }

  if ($(document).innerWidth() <= 767) {



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

        $('.redBox.first').removeClass('grayBackground')
        $('.redBox.second').removeClass('grayBackground')
        $('.redBox.third').removeClass('grayBackground')

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

        $('.redBox.first').removeClass('grayBackground')
        $('.redBox.second').removeClass('grayBackground')
        $('.redBox.third').addClass('grayBackground')

      }


      if ($('.block5').hasClass('active')) {

        $('.circle.first').removeClass('activate');
        $('.circle.second').addClass('activate');
        $('.circle.third').removeClass('activate');

        $('.redBox.first').removeClass('grayBackground')
        $('.redBox.second').addClass('grayBackground')
        $('.redBox.third').removeClass('grayBackground')
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

        $('.redBox.first').addClass('grayBackground')
        $('.redBox.second').removeClass('grayBackground')
        $('.redBox.third').removeClass('grayBackground')

        //
        // setTimeout(function () {
        //   $('.block6 .content-top').removeClass('transparent-opacity').addClass('animated tilt-in-top-1')
        //
        //
        // }, 500)
        //
        // setTimeout(function () {
        //   $('.block6 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')
        //
        // }, 800)
        //
        // setTimeout(function () {
        //   $('.block6 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp');
        //
        //
        // }, 1200)
        //
        // setTimeout(function () {
        //   $('.block6 .content-last').removeClass('transparent-opacity').addClass('animated fadeInUp')
        //
        // }, 1500)
        //
        // setTimeout(function () {
        //   $('.block6 .content-secondLast').removeClass('transparent-opacity').addClass('animated fadeInUp')
        //
        // }, 1900)


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










});
