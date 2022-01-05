
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// display mobile menu 
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
   };

menu.addEventListener('click', mobileMenu);


// swipe copy from https://swiperjs.com/demos#autoplay 

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });