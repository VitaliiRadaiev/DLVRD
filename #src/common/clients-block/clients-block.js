{
    let clientsBlock = document.querySelector('.clients-block');
    if(clientsBlock) {
        let dataSlider = new Swiper(clientsBlock.querySelector('.swiper-container'), {
            slidesPerView:3,
            loop: true,
            speed: 600,
            // autoplay: {
            //   delay: 4000,
            //    disableOnInteraction: false,
            // },
            spaceBetween: 15,
            navigation: {
                nextEl: clientsBlock.querySelector('.clients-block__btn_prev'),
                prevEl: clientsBlock.querySelector('.clients-block__btn_next'),
            },
             breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                   // slidesPerGroup: 2,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                   // slidesPerGroup: 2,
                },

            },
            })
    }

    let logosImg = document.querySelectorAll('.clients-block .swiper-slide img');
    if(logosImg.length) {
        function imgToColourImg() {
            let srcColourImg = this.dataset.imgcoloursrc;
            this.dataset.imgcoloursrc = this.src;
            this.style.maxWidth = this.clientWidth + 'px';
            if(srcColourImg) {
                this.src = srcColourImg;
            }
        }

        function imgToGrayImg() {
            let scrImg = this.dataset.imgcoloursrc;
            this.dataset.imgcoloursrc = this.src;
            if(scrImg) {
                this.src = scrImg;
            }
        }

        logosImg.forEach(img => {
            img.addEventListener('mouseenter', imgToColourImg);
            img.addEventListener('mouseleave', imgToGrayImg);
        })
    }
    
}
