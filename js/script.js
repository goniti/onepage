var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  effect: 'fade',
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});