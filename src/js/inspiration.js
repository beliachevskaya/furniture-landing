$(document).ready(function() {
    $('.inspiration-block-modal1').hide();
    $('.inspiration-block-modal2').hide();
    $('.left-button, .right-button').button();
    $('.left-button').click(function() {
        $('.inspiration-block-modal1').fadeToggle(500);
    })
    $('.right-button').click(function() {
        $('.inspiration-block-modal2').fadeToggle(500);
    })
})