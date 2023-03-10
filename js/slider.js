const documents__slider = new Swiper('.documents__slider', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        550: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        950: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});

const team__slider = new Swiper('.team__slider ', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 480px
        800: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is >= 640px
        1180: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    }
});

const reviews__slider = new Swiper('.reviews__slider ', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 480px
        800: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1180: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});

const partners__slider = new Swiper('.partners__slider  ', {
    // Optional parameters
    slidesPerView: 4,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 480px
        800: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is >= 640px
        1180: {
            lidesPerView: 4,
            loop: true,
        }
    }

});