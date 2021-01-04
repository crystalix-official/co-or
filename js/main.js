document.addEventListener("DOMContentLoaded", function () {

    $('.preloader-background').delay(1000).fadeOut('slow');

    $('.preloader-wrapper')
        .delay(1400)
        .fadeOut();
});



$(document).ready(function () {


    $('.go_toform').click(function () {
        $("html, body").animate({
            scrollTop: $("#order_form").offset().top - 300
        }, 1500);
        return false;
    });

    $('.review-slider').lightSlider({
        item:3,
        controls: false,
        enableDrag: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    item:1
                  }
            }
        ]
    });  
});

$(window).load(function () {
    $('.rw-slide-inner').equalHeights();
});


