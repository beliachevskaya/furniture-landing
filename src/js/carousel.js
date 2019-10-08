$(document).ready(function() {
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    // arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false
                }
            }
        ]
    })
})