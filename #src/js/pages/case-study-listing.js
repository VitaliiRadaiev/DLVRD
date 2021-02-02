{
    let sliders = document.querySelectorAll('._swiper');
    if (sliders) {
        for (let index = 0; index < sliders.length; index++) {
            let slider = sliders[index];
            if (!slider.classList.contains('swiper-bild')) {
                let slider_items = slider.children;
                if (slider_items) {
                    for (let index = 0; index < slider_items.length; index++) {
                        let el = slider_items[index];
                        el.classList.add('swiper-slide');
                    }
                }
                let slider_content = slider.innerHTML;
                let slider_wrapper = document.createElement('div');
                slider_wrapper.classList.add('swiper-wrapper');
                slider_wrapper.innerHTML = slider_content;
                slider.innerHTML = '';
                slider.appendChild(slider_wrapper);
                slider.classList.add('swiper-bild');
            }
            if (slider.classList.contains('_gallery')) {
                //slider.data('lightGallery').destroy(true);
            }
        }

    }

    let caseStudiesSliders = document.querySelectorAll('.case-studies-list-item__slider._swiper');
    if(caseStudiesSliders.length) {
        caseStudiesSliders.forEach((item, index) => { 
            let caseStudiesSlider;
                caseStudiesSlider = new Swiper(item, {
                slidesPerView: 1,
                spaceBetween: 15,
                speed: 600,
                navigation: {
                    nextEl: item.nextElementSibling.querySelector('.case-studies-list-item__btn-next'),
                    prevEl: item.nextElementSibling.querySelector('.case-studies-list-item__btn-prev'),
                },
                /*
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
                */
                on: {
                    lazyImageReady: function () {
                        ibg();
                    },
                }
                // And if we need scrollbar
                //scrollbar: {
                //	el: '.swiper-scrollbar',
                //},
            });

            if(index % 2 != 0) {
                caseStudiesSlider.slideTo(caseStudiesSlider.slides.length, 0);
            }
            
        })
    }
}

