const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 100,

    breakpoints: {
        // when window width is >= 320px
        1000: {
          spaceBetween: 120
        },

        500: {
          spaceBetween: 60
        },
    },


});