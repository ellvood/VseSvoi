new Swiper('.swiper-container', {
    slidesPerView: 3.2,
    spaceBetween: 28,
    direction: 'horizontal',
    loop: true,

    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    scrollbar: {
    el: 'swipe-scrollbar',
    },

    });