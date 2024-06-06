/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);


//NUMBER 1
document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.querySelectorAll(".read-more-btn-1");
    
    readMoreBtn.forEach(function(button) {
      button.addEventListener("click", function() {
        var item = this.parentNode;
        var visibleText1 = item.querySelector(".visible-text-1");
        var hiddenText1 = item.querySelector(".hidden-text-1");
        
        if (hiddenText1.style.display === "none") {
          hiddenText1.style.display = "inline"; // Change the display to inline
          visibleText1.style.display = "none";
          this.innerText = "∧ Read Less";
        } else {
          hiddenText1.style.display = "none"; // Hide the hidden text
          visibleText1.style.display = "inline";
          this.innerText = "> Read More";
        }
      });
    });
  });
  
  //NUMBER 2
  document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.querySelectorAll(".read-more-btn-2");
    
    readMoreBtn.forEach(function(button) {
      button.addEventListener("click", function() {
        var item = this.parentNode;
        var visibleText2 = item.querySelector(".visible-text-2");
        var hiddenText2 = item.querySelector(".hidden-text-2");
        
        if (hiddenText2.style.display === "none") {
          hiddenText2.style.display = "inline"; // Change the display to inline
          visibleText2.style.display = "none";
          this.innerText = "∧ Read Less";
        } else {
          hiddenText2.style.display = "none"; // Hide the hidden text
          visibleText2.style.display = "inline";
          this.innerText = "> Read More";
        }
      });
    });
  });


//NUMBER 3
  document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.querySelectorAll(".read-more-btn-3");
    
    readMoreBtn.forEach(function(button) {
      button.addEventListener("click", function() {
        var item = this.parentNode;
        var visibleText3 = item.querySelector(".visible-text-3");
        var hiddenText3 = item.querySelector(".hidden-text-3");
        
        if (hiddenText3.style.display === "none") {
          hiddenText3.style.display = "inline"; // Change the display to inline
          visibleText3.style.display = "none";
          this.innerText = "∧ Read Less";
        } else {
          hiddenText3.style.display = "none"; // Hide the hidden text
          visibleText3.style.display = "inline";
          this.innerText = "> Read More";
        }
      });
    });
  });

//NUMBER 4
  document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.querySelectorAll(".read-more-btn-4");
    
    readMoreBtn.forEach(function(button) {
      button.addEventListener("click", function() {
        var item = this.parentNode;
        var visibleText4 = item.querySelector(".visible-text-4");
        var hiddenText4 = item.querySelector(".hidden-text-4");
        
        if (hiddenText4.style.display === "none") {
          hiddenText4.style.display = "inline"; // Change the display to inline
          visibleText4.style.display = "none";
          this.innerText = "∧ Read Less";
        } else {
          hiddenText4.style.display = "none"; // Hide the hidden text
          visibleText4.style.display = "inline";
          this.innerText = "> Read More";
        }
      });
    });
  });

  //NUMBER 5
  document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.querySelectorAll(".read-more-btn-5");
    
    readMoreBtn.forEach(function(button) {
      button.addEventListener("click", function() {
        var item = this.parentNode;
        var visibleText5 = item.querySelector(".visible-text-5");
        var hiddenText5 = item.querySelector(".hidden-text-5");
        
        if (hiddenText5.style.display === "none") {
          hiddenText5.style.display = "inline"; // Change the display to inline
          visibleText5.style.display = "none";
          this.innerText = "∧ Read Less";
        } else {
          hiddenText5.style.display = "none"; // Hide the hidden text
          visibleText5.style.display = "inline";
          this.innerText = "> Read More";
        }
      });
    });
  });

//NUMBER 6
  document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.querySelectorAll(".read-more-btn-6");
    
    readMoreBtn.forEach(function(button) {
      button.addEventListener("click", function() {
        var item = this.parentNode;
        var visibleText6 = item.querySelector(".visible-text-6");
        var hiddenText6 = item.querySelector(".hidden-text-6");
        
        if (hiddenText6.style.display === "none") {
          hiddenText6.style.display = "inline"; // Change the display to inline
          visibleText6.style.display = "none";
          this.innerText = "∧ Read Less";
        } else {
          hiddenText6.style.display = "none"; // Hide the hidden text
          visibleText6.style.display = "inline";
          this.innerText = "> Read More";
        }
      });
    });
  });