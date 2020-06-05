$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function() {

        $(this).addClass('transition');
    }, function() {

        $(this).removeClass('transition');
    });

    // $(".nav-item>a").on({
    //     mouseover: function () {
    //         $(this).addClass('btn-primary text-white');

    //     },
    //     mouseleave: function () {
    //         $(this).removeClass('btn-primary text-white');
    //     }               
    // });    
});