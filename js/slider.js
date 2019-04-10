$(document).ready(function(){
    $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ('.arrows-right'),
        nextArrow: ('.arrows-left'),
        responsive: [
            {
                breakpoint: 575,
                settings: "unslick"
            }
        ]
    });
});
