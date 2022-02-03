$(document).ready(function(){
    let carousel = $('#news-carousel');
    carousel.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 2000,
    });
});