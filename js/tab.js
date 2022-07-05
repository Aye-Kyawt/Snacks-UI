$('.tabs-nav li:first-child').addClass('active');
$('.all').hide();
$('.all:first').show();

$(".tabs-nav ul li").click(function () {
    $('.tabs-nav ul li').removeClass('active');
    $(this).addClass('active');
    $(".all").hide();
    var activeTab = $(this).find("a").attr('href');
    $(activeTab).fadeIn();
    return false;
})