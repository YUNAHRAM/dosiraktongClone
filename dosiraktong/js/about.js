let swVisual=new Swiper('.swiper-wrapper',{
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    navigation: {

    }

})
new Swiper('.about-service__swiper',{slidesPerView : 4,
speed : 400,
navigation : {
    prevEl:"#ctrl-prev",
    nextEl:"#ctrl-next",
},
breakpoints : {
    0:{
        slidePerView:1,
    },
    400:{
        slidePerView:2,
            },
    640:{
        slidePerView:3,},
    1080:{
        slidePerView:4,
        },
    },
})
