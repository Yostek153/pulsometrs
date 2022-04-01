$(document).ready(function(){            // $-це ми звертаємось до бібліотеки JQuery в нашому документі html
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,            //підстроює картинки по висоті в слайдері
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/chevron_left.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right.png"></button>',
        responsiie: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            },
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

      });
  }); 