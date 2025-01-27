// SearchForm Section code
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
}

$(document).ready(function() {

    $(window).scroll(function() {
        // Navbar-bottom scrolling
        if (this.scrollY > 5) {
            $('.navbar-bottom').addClass("sticky");
        } else {
            $('.navbar-bottom').removeClass("sticky");
        }

        // Scrolling Button Btn
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        margin: 5,
        navigation: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

let slides = document.querySelectorAll('slideshow-slide');
let currentIndex=0;

function showSlide(index) {
    slides.forEach((slides, i) => {
        slide.classList.remove('active');
        if (i===index){
            slide.classList.add('active');
        
        }
    });
}
function nextSlide(){
    currentIndex=(currentIndex +1) % slides.length;
    showSlide(currentIndex);
}
function prevSlide(){
    currentIndex=(currentIndex -1 + slides.length)% slides.length;
    showSlide(currentIndex);
}
setInterval(nextSlide, 5000);
showSlide(currentIndex);
document.querySelector('next').addEventListener('click', nextSlide);
document.querySelector('prev').addEventListener('click', nextSlide);
});
