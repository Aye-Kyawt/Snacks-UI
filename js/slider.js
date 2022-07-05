$('.home-mv-ul').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.home-mv-right-ul'

});
$('.home-mv-right-ul').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.home-mv-ul',
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
});

$('.slide-thumbnail').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    infinite: true,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
    dots: false,
    asNavFor: '.hor-thumbnail'
});
$('.hor-thumbnail').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slide-thumbnail',
    dots: false,
    focusOnSelect: true,
    centerMode: true,
});


$('.mySlides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    variableWidth: true,
})


