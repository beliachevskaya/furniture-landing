$(document).ready(function() {
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: false
                }
            }
        ]
    })
})