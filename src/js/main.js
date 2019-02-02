jQuery(document).ready(function($) {
// import jQuery from 'jquery';
// console.log('hello world');
// $(document).ready(function(){
    //slick slider
    $('.sliderOffers--slider').slick({
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    });

    // $('.belive--slider').slick({
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     // infinite: true,
    //     // speed: 500,
    //     // fade: true,
    //     // cssEase: 'linear'
    //     autoplay: true
    // });

    //mask input
    // jQuery(function($) {
    //     $("#mainPhoneInput").mask("+7 (999) 999-9999");
    //     $("#questionPhoneInput").mask("+7 (999) 999-9999");
    //     $("#modalWindow--input").mask("+7 (999) 999-9999");
    // });

    //modal window's title
    // jQuery(function($) {
        $('.showModal').click(function (e) { 
            e.preventDefault();
            $('.overlay').fadeIn();
            $('.overlay').css('display', 'flex');
            $('.textFromButton').text($(this).attr('data-modalTitle'));
        });

        $('.modalWindow--close').click(function (e) {
            e.preventDefault();
            $('.overlay').fadeOut();
        })
    // });
});