{
    let ourProcessSlider = document.querySelector('.our-process__slider');
    if(ourProcessSlider) {
        let dataSlider;
         dataSlider = new Swiper(ourProcessSlider.querySelector('.swiper-container'), {
            speed: 600,
            navigation: {
                nextEl: ourProcessSlider.querySelector('.our-process__slider-btn-prev'),
                prevEl: ourProcessSlider.querySelector('.our-process__slider-btn-next'),
            },
            
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                576: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 'auto',
                    spaceBetween: 44,
                },
            },
        });
    }
}
