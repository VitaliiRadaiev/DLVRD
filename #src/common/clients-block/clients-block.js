{
    let clientsBlock = document.querySelector('.clients-block');
    if(clientsBlock) {
        let dataSlider = new Swiper(clientsBlock.querySelector('.clients-block__list'), {
            slidesPerView:3,
            //loop: true,
            speed: 600,
            autoplay: {
              delay: 4000,
               disableOnInteraction: false,
            },
            spaceBetween: 15,
            pagination: {
                el: clientsBlock.querySelector('.swiper-pagination'),
                 clickable: true,
                 renderBullet: function(index, className) {
                     return '<div class="' + className + '"> <span class="progress"></span> </div>'
                 }
              },
             on: {

                 slideChangeTransitionStart: function(current) {
                     let pagination = clientsBlock.querySelector('.swiper-pagination');
                     let lenght = pagination.children.length;
                     
                     for(let i = 0; i < lenght; i++) {
                         if(i == current.activeIndex) break;
                         pagination.children[i].classList.add('isShow');
                     }

                     for(let i = current.activeIndex; i < lenght; i++) {
                         pagination.children[i].classList.remove('isShow');
                         pagination.children[i].firstElementChild.style.transform = 'scaleX(0)';
                     }
                 }
             }, 
             breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                   // slidesPerGroup: 2,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                   // slidesPerGroup: 2,
                },

            },
            })
    }
}
