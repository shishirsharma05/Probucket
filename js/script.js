// banner slider start
var coverflow = $("#coverflow").flipster();
        var carousel = $("#carousel").flipster({
        style: 'carousel',
        spacing: -0.5,
        nav: true,
        buttons:   true,
    });
    var wheel = $("#wheel").flipster({
        style: 'wheel',
        spacing: 0
    });
    var flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25
    });
// banner slider end
// bubble start
$(document).ready(function(){
    // dobule
    $('#J_PluginWrap').bubble({
        interval: 0.6,
        offset: [10, 60],
        direction: 'left',
        autoStop: 10
    });

    // slick slider

$('.slider-nav').slick({
  slidesToShow: 1.7,
  slidesToScroll: 2,
  asNavFor: '',
  dots: false,
  centerMode: true,
  focusOnSelect: true

});
   
});

