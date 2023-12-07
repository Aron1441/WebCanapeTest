let burger = document.querySelector('.header__burger');
let cross = document.querySelector('.header__cross');
let body = document.querySelector('body');

new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        // clickable: true,
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            console.log(currentClass);
            return '<span class="' + currentClass + '"></span>';
        },
        formatFractionCurrent: function (index) {
            let tmp = index;
                if(tmp < 10) tmp = 0 + tmp.toString();
                return tmp;
        },
    }
});

let width = body.clientWidth;
let currentSlides = 3;
if (width <= 768) {
    currentSlides = 2;
}

if (width <= 340) {
    currentSlides = 1;
}

new Swiper('.news-image-slider', {
    slidesPerView: currentSlides,
    spaceBetween: 30,
    navigation: {
        nextEl: '.news-image-slider .swiper-button-next',
        prevEl: '.news-image-slider .swiper-button-prev'
    },
});

burger.addEventListener('click', () => {
    let top =  document.querySelector('.header__top');
    if(top.className.match('spread')) {
        top.classList.remove('spread');
        return;
    }

    burger.style.display = 'none';
    top.classList.add('spread');
    body.style.overflow = 'hidden';
    console.log(top.className.match('spread'));
})

cross.addEventListener('click', () => {
    let top =  document.querySelector('.header__top');
    burger.style.display = '';
    body.style.overflow = '';
    top.classList.remove('spread');
})

function createBlock(head, labels) {
    let div = document.createElement('div')
    labels.forEach(el => div.appendChild(el));
    div.classList.add('block')

    return div;
}

const equipmentHeading = document.querySelector('.equipment__heading')
let equipmentLabels = document.querySelectorAll('.equipment__label')
const otherHeading = document.querySelector('.other__heading')
let otherLabels = document.querySelectorAll('.other__label')
let arrow = document.querySelectorAll('.catalog');

arrow.forEach(el => el.addEventListener('click', () => {
    let other =  document.querySelector('.other');
    let equipment =  document.querySelector('.equipment');
    other.classList.add('spread');
    equipment.classList.add('spread');
}))

let first = createBlock(equipmentHeading, equipmentLabels);
let second = createBlock(otherHeading, otherLabels);
debugger
let a = document.querySelector('.header__top');
a.appendChild(first);


