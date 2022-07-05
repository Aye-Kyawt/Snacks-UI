$(window).scroll(function () {
    var height = $('.nav-scroll').outerHeight();
    var scroll = $(window).scrollTop();
    if (scroll > height) {
        $(".header").css("background", "#fff");
    }
    else {
        $(".header").css("background", "rgba(255,255,255,0.3)");
    }
})


$(function () {
    $('.menu-trigger').on('click', function () {
        var rightVal = 0;
        if ($(this).hasClass('nav-cross-trigger')) {
            rightVal = -1024;
            $(this).removeClass('nav-cross-trigger');
        } else {
            $(this).addClass('nav-cross-trigger')
        }
        $('.nav').stop().animate({
            right: rightVal
        }, 200);
    });
})

$('.nav-li a').click(function () {
    $('.nav-li a').removeClass("active");
    $(this).addClass("active");
});

$(".home-scroll,.btn").click(function () {
    $("html,body").animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
})
$('.home-mv-right-li a').click(function () {
    $(".home-mv-right-li a").removeClass("active");
    $(this).addClass("active");
})
$('.hor-thumbnail li a').click(function () {
    $('.hor-thumbnail li a').removeClass('active');
    $(this).addClass('active');
})

$('.tabs-nav ul li a').click(function () {
    $('.tabs-nav ul li a').removeClass('active');
    $(this).addClass('active');
})



