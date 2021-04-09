const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const swiper2 = new Swiper('.recommended-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-channel-button-next',
    prevEl: '.recommended-channel-button-prev',
  },
});

const swiper3 = new Swiper('.fd-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.fd-channel-button-next',
    prevEl: '.fd-channel-button-prev',
  },
});