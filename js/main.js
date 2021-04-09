const swiper = new Swiper('.channel__slider', {
  // Optional parameters,
  slidesPerView: 6,
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const swiperRecommended = new Swiper('.slider__recomended', {
  // Optional parameters,
  slidesPerView: 3,
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.recomended-button-next',
    prevEl: '.recomended-button-prev',
  },

});
const swiperActual = new Swiper('.actual__slider', {
  // Optional parameters,
  slidesPerView: 6,
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.actual-button-next',
    prevEl: '.actual-button-prev',
  },

});