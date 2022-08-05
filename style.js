const accBtn = document.querySelectorAll('.accordion__item__button');
const accText = document.querySelectorAll('.accordion__item__text');
const accArrow = document.querySelectorAll('.accordion__arrow');
const accItem = document.querySelectorAll('.accordion__item');


accItem.forEach((e) => {
    e.addEventListener('click', (event) => {
        e.classList.toggle("accordion--active");

    })
})


// accItem.forEach((e) => {
//     e.addEventListener('click', (event) => {
//         accItem.forEach((i) => {
//             i.classList.remove("accordion--active");
//         })
        
//         e.classList.add("accordion--active");
//     })
// })

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
};

backToTopButton.addEventListener("click", () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
    
})