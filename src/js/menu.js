$(document).ready(function() {
    $('.menu-dropdown').hide();
    $('.menu-toggle').click(function() {
        $('.menu-dropdown').fadeToggle(500);
    })
})