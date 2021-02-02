{
    let imgSliders = document.querySelectorAll('.img-slider');
    if(imgSliders.length) {
        imgSliders.forEach(slider => {
            let dataSlider = new Swiper(slider.querySelector('.swiper-container'), {
                slidesPerView:1,
                //loop: true,
                speed: 600,
                spaceBetween: 15,
                navigation: {
                    nextEl: slider.querySelector('.img-slider__btn-next'),
                    prevEl: slider.querySelector('.img-slider__btn-prev'),
                },

                })
        })
    }
}