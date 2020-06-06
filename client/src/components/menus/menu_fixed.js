
window.onscroll = function showHeader() {
    var header = document.querySelector('.app-header');
    if (window.pageYOffset > 100) {
    header.classList.add('header_fixed');
    } else {
    header.classList.remove('header_fixed');
    }
};
    
var b = document.body || document.getElementsByTagName('body')[0];
b.insertAdjacentHTML('beforeend', '<a class="back_to_top" title="Наверх"> <img src="https://img.icons8.com/windows/100/000000/send-letter.png"/></a>');

(function() {
    'use strict';
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -30);
            
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();