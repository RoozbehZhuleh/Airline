//  // import Swiper bundle with all modules installed
//   import Swiper from 'swiper/bundle';

//   // import styles bundle
//   import 'swiper/css/bundle';

  // init Swiper:
  const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  slidesPerView: 1,
    spaceBetween: 30,
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
breakpoints : {
  600:{
    slidesPerView: 2,
  },
  900:{
    slidesPerView: 3,
  },
  1300 : {
    slidesPerView: 4,
  }
}
  });



