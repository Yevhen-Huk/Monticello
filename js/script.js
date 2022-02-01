'use strict'

// Carousel

$(document).ready(function(){
    $('.your-class').slick({
        setting-name: setting-value
});
});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

// Menu dots

const dots = document.querySelectorAll("a");

let menuDots = [], current = 0;

console.log(menuDots);
dots.forEach(function (elem){
    if (elem.className === 'link-banner-menu') {
        menuDots.push(elem);
    }
    return menuDots;
} )
console.log(menuDots);

menuDots[0].className += ' current';

menuDots.forEach(function (dot, idx) {
    dot.addEventListener('click', function (e) {
        if (idx !== current) {
            menuDots [current].className = 'link-banner-menu';
        }
        console.log(current);
        menuDots [idx].className += ' current';
        current = idx;
        return current;
    })
})

// const header = document.getElementsByClassName('header');
// const projects = document.getElementById('projects');
// const news = document.getElementById('news');
//
// const sections = [header, projects, news];
// console.log(sections);
//
// //  sections is not an array
//
// sections.forEach(function (section, idx) {
//     section.addEventListener('mouseenter', function (){
//         if (section[this] === current) {
//             menuDots [idx].className += ' current';
//         }
//     })
// })