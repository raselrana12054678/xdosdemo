(function($) {
    "use-strict"

    var windowOn = $(window);

    windowOn.on('load', function() {
      // $("#loading").delay(2000).fadeOut(500);
      $("#loading").fadeOut(500);
    })

    // scroll back to top start 
    var btn =$('#back-to-top');
    windowOn.on('scroll', function() {
      if (windowOn.scrollTop()> 300) {
        btn.addClass('show');
      }else {
        btn.removeClass('remove');
      }
    });

    btn.on('click', function(){
      $('html,body').animate({scrollTop:0}, '400');
    });


    // sticky-menu start 
    windowOn.on('scroll', function() {
      var scroll = windowOn.scrollTop();
      if (scroll < 100) {
        $("#rs-header-sticky").removeClass("header-sticky");
      }else {
        $("#rs-header-sticky").addClass("header-sticky");
      }
    });

      //<=== mobile menu ===>
      var rsMenuWrap = $('.rs-mobile-menu-active > ul').clone();
      var rsSideMenu = $('.rs-offcanvas-menu nav');
      rsSideMenu.append(rsMenuWrap);
      if ($(rsSideMenu).find('.sub-menu, .rs-mega-menu').length != 0) {
        $(rsSideMenu).find('.sub-menu, .rs-mega-menu').parent().append('<button class="rs-menu-close"><i class="fas fa-chevron-right"></i></button>');
      }
  
      var sideMenuList = $('.rs-offcanvas-menu nav > ul > li button.rs-menu-close, .rs-offcanvas-menu nav > ul li.has-dropdown > a');
      $(sideMenuList).on('click', function (e) {
        console.log(e);
        e.preventDefault();
        if (!($(this).parent().hasClass('active'))) {
          $(this).parent().addClass('active');
          $(this).siblings('.sub-menu, .rs-mega-menu').slideDown();
        } else {
          $(this).siblings('.sub-menu, .rs-mega-menu').slideUp();
          $(this).parent().removeClass('active');
        }
      });
    

    //<===  data-bg-image ===>
    $("[data-background]").each(function (){
        $(this).css("background-image", "url("+ $(this).attr("data-background") +  ")");
    });
    //<===  data-bg-image ===>
    $("[data-bg-color]").each(function (){
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    //<=== magnific popup ===>
    $('.popup-image').magnificPopup({
      type: 'image'
      // other options
    });
    $('.popup-video').magnificPopup({
      type: 'iframe'
      // other options
    });

    // <=== rs-offcanvas start js ===>
    $(".rs-offcanvas-toggle").on('click', function(){
      $(".rs-offcanvas").addClass("rs-offcanvas-open");
      $(".rs-offcanvas-overlay").addClass("rs-offcanvas-open");
    });

    $(".rs-offcanvas-close-toggle,.rs-offcanvas-overlay").on('click', function(){
      $(".rs-offcanvas").removeClass("rs-offcanvas-open");
      $(".rs-offcanvas-overlay").removeClass("rs-offcanvas-open");
    });
    // <=== rs-offcanvas end js ===> 
      
      // search bar
      $(".rs-search-toggle").on('click', function(){
        $(".rs-header-search-bar").addClass("rs-search-open");
        $(".rs-offcanvas-overlay").addClass("rs-offcanvas-open");
      });

      $(".rs-search-close,.rs-offcanvas-overlay").on('click', function(){
        $(".rs-header-search-bar").removeClass("rs-search-open");
        $(".rs-offcanvas-overlay").removeClass("rs-offcanvas-open");
      });

  // <=== testimonial-slider js start ===>
    var swiper = new Swiper(".rs-testimonial-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".rs-swiper-testm-button-next",
          prevEl: ".rs-swiper-testm-button-prev",
        },
      });


  // <=== testimonial-slider js start ===>
    var swiper = new Swiper(".rs-testimonial-active-2", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
      //   autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      // },
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".rs-swiper-testm-2-button-next",
          prevEl: ".rs-swiper-testm-2-button-prev",
        },
      });


    // <=== testimonial-slider-h-5 js start ===>
    var swiper = new Swiper(".rs-testml-active", {
        slidesPerView: 4,
        spaceBetween: 30,
      //   autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      // },
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".rs-swiper-testml-button-next",
          prevEl: ".rs-swiper-testml-button-prev",
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      });


    // <=== testimonial-thumb-content-slide js ===>
    var swiper_content = new Swiper(".rs-testimonial-content-active", {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper_thumb = new Swiper(".rs-testimonial-thumb-active", {
      slidesPerView: 3,
      centeredSlides: true,
      centeredSlides: false,
      loop: true,
      slideToClikedSlide: true,
    });


    // <=== testimonial-slider-h-3 js start ===> 
    var swiper = new Swiper(".rs-testimonial-active-3", {
        slidesPerView: 1,
        // effect: "fade",
        spaceBetween: 30,
        centeredSlides: true,
      //   autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      // },
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".rs-swiper-testm-3-button-prev",
          prevEl: ".rs-swiper-testm-3-button-next",
        },
      });

    //<=== brand-Animation js start ===>
      var swiper = new Swiper(".rs-brand-top-active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTachMode: false,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
      });


    //<=== brand-Animation-5 js start ===> 
      var swiper = new Swiper(".rs-brand-normal-active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTachMode: false,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
      });
    //<=== brand-Animation js start ===> 
      var swiper = new Swiper(".rs-brand-title-active", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTachMode: false,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
      });

      //<=== blog slider ===>
      var swiper = new Swiper(".rs-blog-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".rs-swiper-blog-button-next",
          prevEl: ".rs-swiper-blog-button-prev",
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
        },
      });
      //<=== team slider items ===>
      var swiper = new Swiper(".rs-team-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".rs-swiper-team-button-next",
          prevEl: ".rs-swiper-team-button-prev",
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      });

      // <=== project-slide js start ===>
      var swiper = new Swiper(".rs-swiper-project-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".rs-project-swiper-button-next",
          prevEl: ".rs-project-swiper-button-prev",
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      });

      // <=== data-filtering start ===>

        var $grid = $('.grid').isotope({
          // options
        } );
        // filter items on button click
        $('.rs-portfolio-filter').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue })
        });

        $('.rs-portfolio-filter button').on( 'click', function (event) {
         $(this).siblings('.active').removeClass('active');
         $(this).addClass('active');
         event.preventDefault();
        });


      // wow js start 
        new WOW().init();


      // jarallaxx start 
      $('.jarallax').jarallax({
        speed: 0.2,
      });

})(jQuery);
