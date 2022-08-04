const accBtn = document.querySelectorAll('.accordion__item__button');
const accText = document.querySelectorAll('.accordion__item__text');
const accArrow = document.querySelectorAll('.accordion__arrow');
const accItem = document.querySelectorAll('.accordion__item');

accBtn.forEach((btn,i) => {
    btn.addEventListener('click', () => {
        accBtn.forEach(btn => {
            accItem.classList.remove("accordion--active");
            // console.log(btn);
        });
        
        accItem[i].classList.add("accordion--active");

    })
})

