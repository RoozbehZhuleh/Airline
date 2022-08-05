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
  // enabled: true,
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
    },
    pagination: {
       el: '.swiper-pagination',
      clickable: true,
       enabled: false,
    },

 
     
breakpoints : {
  300:{
    slidesPerView: 1,
     pagination: {
      //  el: '.swiper-pagination',
       clickable: true,
       enabled: true,
    },
     navigation: {
       enabled: true,
      //  disabledClass: 'swiper-button-disabled',
    },
  },
  600:{
    slidesPerView: 1,
     pagination: {
      //  el: '.swiper-pagination',
       clickable: true,
       enabled: true,
    },
     navigation: {
       enabled: true,
      //  disabledClass: 'swiper-button-disabled',
    },
  },
  768:{
    slidesPerView: 2,
     pagination: {
      //  el: '.swiper-pagination',
       clickable: false,
       enabled: false,
    },
     navigation: {
       enabled: true,
      //  disabledClass: 'swiper-button-disabled',
    },
  },
  990:{
    slidesPerView: 3,
    navigation: {
    enabled: true,
    },
    pagination: {
      enabled: false,
    },
  },
  1300 : {
    slidesPerView: 4,
  },
  navigation: {
    enabled: true,
  },
  pagination: {
      enabled: false,
    },
}
  });



