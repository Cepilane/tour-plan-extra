const swiper = new Swiper('.swiper-container', {
  // Optional paramlider
  loop: true,
  slidePerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});