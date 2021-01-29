{
    let promoVideo = document.querySelector('.promo-header__video');
    if(promoVideo){
        let btnPlay = document.querySelector('.promo-header__play');
        let btnPause = document.querySelector('.promo-header__pause');

        btnPlay.addEventListener('click', () => {
            promoVideo.play();
            
        })
        btnPause.addEventListener('click', () => {
            promoVideo.pause();

        })

    }

    let bottomTabs = document.querySelector('.bottom-tabs');
    if(bottomTabs) {
        let slider = bottomTabs.querySelector('.swiper-container');
        let dataSlider;

        function mobileSlider() {
            if(document.documentElement.clientWidth <= 991 && bottomTabs.dataset.mobile == 'false') {
                dataSlider = new Swiper(slider, {
					slidesPerView: 'auto',
					//centeredSlides: true,
                    speed: 600,
                    spaceBetween: 20,
                });
                
                bottomTabs.dataset.mobile = 'true';
                
            }

            if(document.documentElement.clientWidth > 991) {
				bottomTabs.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					dataSlider.destroy();
				}
			}
        }

        mobileSlider();

        window.addEventListener('resize', () => {
			mobileSlider();
		})
    }

    {
        let slider = document.querySelectorAll('.slider');
    
        if(slider.length>0) {
            slider.forEach(item => {
                var mySwiper = new Swiper(item.querySelector('.swiper-container'), {
                slidesPerView:1,
                //loop: true,
                speed: 600,
                autoplay: {
                  delay: 4000,
                   disableOnInteraction: false,
                },
                spaceBetween: 15,
                pagination: {
                    el: item.querySelector('.swiper-pagination'),
                     clickable: true,
                     renderBullet: function(index, className) {
                         return '<div class="' + className + '"> <span class="progress"></span> </div>'
                     }
                  },
                 on: {
    
                     slideChangeTransitionStart: function(current) {
                         let pagination = item.querySelector('.swiper-pagination');
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
                    // scrollbar: {
                    //   el: item.querySelector('.swiper-scrollbar'),
                    // },
                })
            })
        }
    }


}


{
    let caseStudiesLinks = document.querySelectorAll('.case-studies__head-link');
    if(caseStudiesLinks.length) {
        caseStudiesLinks.forEach(item => {
            item.addEventListener('click', (e)=> {
                e.preventDefault();
                const id = e.target.getAttribute('href').replace('#','');
        
                document.querySelectorAll('.case-studies__head-link').forEach((child) => {
                    child.classList.remove('active');
                });
    
                document.querySelectorAll('.case-studies__content-tab').forEach((child) => {
                    child.classList.remove('active');
                });
    
                item.classList.add('active');
                document.getElementById(id).classList.add('active');
            })
        })
    }
}