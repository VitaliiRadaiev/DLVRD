

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


$(document).ready(function () {
	document.body.classList.add('is-load');

	// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	// === // Проверка, поддержка браузером формата webp ==================================================================

			//==== ADD PADDING-TOP ================================
			{
				let wrapper = document.querySelector('._margin-top');
				if (wrapper) {
					let header = document.querySelector('.header');
					if(header) {
						let headerHeight = header.clientHeight;
						wrapper.style.marginTop = headerHeight + 'px';
					}
					
				}
			}
			//==== AND PADDING-TOP ================================
	
	// ==== PAGES ================================
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

{
    let servicesList = document.querySelector('.services__list');
    if(servicesList) {
        let cards = document.querySelectorAll('.services__card');
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                if(!e.target.closest('.big-card-services__close')) {
                    this.classList.add('_open');

                    
                    cards.forEach(card => {
                        if(card == this) {
                            return
                        }
    
                        card.classList.remove('_open');
                    })
                }
            })

            let close = card.querySelector('.big-card-services__close');
            close.addEventListener('click', function() {
                
                this.closest('.services__card').classList.remove('_open');
            })
            if(document.documentElement.clientWidth > 767) {
                let height = card.getBoundingClientRect().top - servicesList.getBoundingClientRect().top;
                let bigCard = card.querySelector('.services__big-card');
                bigCard.style.top = height + 'px';
            }

            if(document.documentElement.clientWidth < 768) {
                let height = card.getBoundingClientRect().top - servicesList.getBoundingClientRect().top;
                let bigCard = card.querySelector('.services__big-card');
                bigCard.style.top = height + 'px';
                bigCard.style.minHeight = (card.getBoundingClientRect().height * 2) + 15 + 'px';
                
            }

        })

        // if(cards.length > 8) {
        //     if((cards.length - 8) >= 4) {
        //         cards[cards.length - 1].classList.add('_downRight');
        //         cards[cards.length - 2].classList.add('_downRight');
        //         cards[cards.length - 3].classList.add('_downLeft');
        //         cards[cards.length - 4].classList.add('_downLeft');
        //     } else if((cards.length - 8) == 3) {
        //         cards[cards.length - 1].classList.add('_downRight');
        //         cards[cards.length - 2].classList.add('_downRight');
        //         cards[cards.length - 3].classList.add('_downLeft');
                
        //     } else if((cards.length - 8) <= 2) {
        //         cards[cards.length - 1].classList.add('_downLeft');
        //         cards[cards.length - 2].classList.add('_downLeft');
        //     }
        // }

        window.addEventListener('click', (e) => {
            if(!e.target.closest('.services__list')) {
                cards.forEach(card => {
                    card.classList.remove('_open');
                })
            }
        })
    }
};
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

;
	
{
    let navBlock = document.querySelector('.nav-block');
    if(navBlock) {
        let navBg = document.querySelector('.nav-block__list-bg');
        let navLinks = navBlock.querySelectorAll('.nav-block__link');
        let height = 0;
        navLinks.forEach(item => {
            height += item.clientWidth;
        })
        navBg.style.width = (height + 45) + 'px';

        
    }


    let servicesListWrap = document.querySelectorAll('.services-block__list-wrap');
    if(servicesListWrap.length) {
        servicesListWrap.forEach(list => {
            if(document.documentElement.clientWidth > 991) {
                let height = list.querySelector('.services-block__list').clientHeight;
                list.style.height = height + 'px';

            }

            let observer = new MutationObserver(mutationRecords => {
                if(document.documentElement.clientWidth > 991) {
                    let height = list.querySelector('.services-block__list').clientHeight;
                    list.style.height = height + 'px';
                }
              });
              
              observer.observe(list, {
                childList: true, 
                subtree: true, 
               
              });
        })
    }
};
	// {
//     let ourProcessSlider = document.querySelector('.our-process__slider');
//     if(ourProcessSlider) {
//         let dataSlider;
//          dataSlider = new Swiper(ourProcessSlider.querySelector('.swiper-container'), {
//             speed: 600,
//             navigation: {
//                 nextEl: ourProcessSlider.querySelector('.our-process__slider-btn-prev'),
//                 prevEl: ourProcessSlider.querySelector('.our-process__slider-btn-next'),
//             },
            
//             breakpoints: {
//                 320: {
//                     slidesPerView: 1,
//                     spaceBetween: 20,
//                 },
//                 576: {
//                     slidesPerView: 'auto',
//                     spaceBetween: 20,
//                 },
//                 992: {
//                     slidesPerView: 'auto',
//                     spaceBetween: 44,
//                 },
//             },
//         });
//     }
// }
;
	// ==== AND PAGES ================================

	//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================





$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});




//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================


// === lazy load ==================================================================
document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	if ("IntersectionObserver" in window) {
		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					//lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
		// Possibly fall back to event handlers here
	}
});
// === // lazy load ==================================================================

// === Плавный скрол на якорях ==================================================================
if($('.anchor').length>0) {
	$(".anchor").click(function() {
	  var elementClick = $(this).attr("href")
	  var destination = $(elementClick).offset().top - 150;
	  jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 600);
	  return false;
	});
}
// === Плавный скрол на якорях ==================================================================


;
	// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;
	// //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
// let forms = document.querySelectorAll('form');
// if (forms.length > 0) {
// 	for (let index = 0; index < forms.length; index++) {
// 		const el = forms[index];
// 		el.addEventListener('submit', form_submit);
// 	}
// }
// function form_submit(e) {
// 	let btn = event.target;
// 	let form = btn.closest('form');
// 	let message = form.getAttribute('data-message');
// 	let error = form_validate(form);
// 	if (error == 0) {
// 		//SendForm
// 		form_clean(form);
// 		if (message) {
// 			popup_open('message-' + message);
// 			e.preventDefault();
// 		}
// 	} else {
// 		let form_error = form.querySelectorAll('._error');
// 		if (form_error && form.classList.contains('_goto-error')) {
// 			_goto(form_error[0], 1000, 50);
// 		}
// 		event.preventDefault();
// 	}
// }
// function form_validate(form) {
// 	let error = 0;
// 	let form_req = form.querySelectorAll('._req');
// 	if (form_req.length > 0) {
// 		for (let index = 0; index < form_req.length; index++) {
// 			const el = form_req[index];
// 			if (!_is_hidden(el)) {
// 				error += form_validate_input(el);
// 			}
// 		}
// 	}
// 	return error;
// }
// function form_validate_input(input) {
// 	let error = 0;
// 	let input_g_value = input.getAttribute('data-value');

// 	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
// 		if (input.value != input_g_value) {
// 			let em = input.value.replace(" ", "");
// 			input.value = em;
// 		}
// 		if (email_test(input) || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
// 		form_add_error(input);
// 		error++;
// 	} else {
// 		if (input.value == '' || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	}
// 	return error;
// }
// function form_add_error(input) {
// 	input.classList.add('_error');
// 	input.parentElement.classList.add('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// 	let input_error_text = input.getAttribute('data-error');
// 	if (input_error_text && input_error_text != '') {
// 		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
// 	}
// }
// function form_remove_error(input) {
// 	input.classList.remove('_error');
// 	input.parentElement.classList.remove('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// }
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
// 	let checkboxes = form.querySelectorAll('.checkbox__input');
// 	if (checkboxes.length > 0) {
// 		for (let index = 0; index < checkboxes.length; index++) {
// 			const checkbox = checkboxes[index];
// 			checkbox.checked = false;
// 		}
// 	}
// 	let selects = form.querySelectorAll('select');
// 	if (selects.length > 0) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_default_value = select.getAttribute('data-default');
// 			select.value = select_default_value;
// 			select_item(select);
// 		}
// 	}
// }

// let viewPass = document.querySelectorAll('.form__viewpass');
// for (let index = 0; index < viewPass.length; index++) {
// 	const element = viewPass[index];
// 	element.addEventListener("click", function (e) {
// 		if (element.classList.contains('_active')) {
// 			element.parentElement.querySelector('input').setAttribute("type", "password");
// 		} else {
// 			element.parentElement.querySelector('input').setAttribute("type", "text");
// 		}
// 		element.classList.toggle('_active');
// 	});
// }


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];

			if (input.classList.contains('_mask')) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				let maskValue = input.dataset.mask;
				input.classList.add('_mask');
				Inputmask(maskValue, {
					//"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function () {
						//input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}
			if (input.classList.contains('_date')) {
				datepicker(input, {
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}

			//const input_g_value = input.getAttribute('data-value');
			//input_placeholder_add(input);
			// if (input.value != '' && input.value != input_g_value) {
			// 	input_focus_add(input);
			// }
			// input.addEventListener('focus', function (e) {
			// 	if (input.value == input_g_value) {
			// 		input_focus_add(input);
			// 		input.value = '';
			// 	}
			// 	if (input.getAttribute('data-type') === "pass") {
			// 		input.setAttribute('type', 'password');
			// 	}
			// 	if (input.classList.contains('_date')) {
			// 		/*
			// 		input.classList.add('_mask');
			// 		Inputmask("99.99.9999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 		*/
			// 	}
			// 	if (input.classList.contains('_phone')) {
			// 		//'+7(999) 999 9999'
			// 		//'+38(999) 999 9999'
			// 		//'+375(99)999-99-99'
			// 		input.classList.add('_mask');
			// 		Inputmask("+375 (99) 9999999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	if (input.classList.contains('_digital')) {
			// 		input.classList.add('_mask');
			// 		Inputmask("9{1,}", {
			// 			"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	form_remove_error(input);
			// });
			// input.addEventListener('blur', function (e) {
			// 	if (input.value == '') {
			// 		input.value = input_g_value;
			// 		input_focus_remove(input);
			// 		if (input.classList.contains('_mask')) {
			// 			input_clear_mask(input, input_g_value);
			// 		}
			// 		if (input.getAttribute('data-type') === "pass") {
			// 			input.setAttribute('type', 'text');
			// 		}
			// 	}
			// });
			// if (input.classList.contains('_date')) {
			// 	datepicker(input, {
			// 		customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			// 		customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			// 		formatter: (input, date, instance) => {
			// 			const value = date.toLocaleDateString()
			// 			input.value = value
			// 		},
			// 		onSelect: function (input, instance, date) {
			// 			input_focus_add(input.el);
			// 		}
			// 	});
			// }
		}
	}
}
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }

// ==  QUANTITY =====================================================
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
// == // QUANTITY =====================================================

// == PRICE SLIDER =====================================================
let priceSlider = document.querySelector('.price-filter');

if(priceSlider) {
	let inputNumFrom = document.getElementById('priceStart');
	let inputNumTo = document.getElementById('priceEnd');
	let value = document.querySelector('.values-price-filter');

	let min = value.dataset.min;
	let max = value.dataset.max;
	let numStart = value.dataset.start;
	let numEnd = value.dataset.end;
	noUiSlider.create(priceSlider, {
		start: [+numStart, +numEnd],  
		connect: true,
		tooltips:[wNumb({decimals: 0, thousand: ','}) , wNumb({decimals: 0, thousand: ','})], 
		range: {
			'min': [+min],
			'1%': [100,100],
			'max': [+max],
		}
	});

	priceSlider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    if (handle) {
	        inputNumTo.value = Math.round(value);
	    } else {
	        inputNumFrom.value = Math.round(value);
	    }
	});

	inputNumTo.onchange = function() {
		setPriceValues()
	}

	inputNumFrom.onchange = function() {
		setPriceValues()
	}

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if(inputNumFrom.value != '') {
			priceStartValue = inputNumFrom.value;
		}

		if(inputNumTo.value != '') {
			priceEndValue = inputNumTo.value;
		}

		  priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
	}
}

// == // PRICE SLIDER =====================================================;
	// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');
		let classNameElem = document.querySelector('.burger').dataset.activel;
		let header = document.querySelector('.header');
		if(window.pageYOffset <= 10) {
			header.classList.toggle('_isMenuOpen');
		}
		document.querySelector(`.${classNameElem}`).classList.toggle('open');
		document.body.classList.toggle('lock');
		_slideToggle(document.querySelector(`.${classNameElem}`));
	}
	$('.burger').click((e) => burgerBtnAnimation(e));
// === Burger Handler =====================================================================	;
	{

    let header = document.querySelector('.header');
    if(header) {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 10) {
                header.classList.add('_isMove');
            } else {
                header.classList.remove('_isMove');
            }
            
        })

        let links = document.querySelectorAll('.menu__list .menu__link');
        links.forEach(link => {
            if(link.nextElementSibling){
                if(link.nextElementSibling.classList.contains('sub-menu')) {

                    link.closest('li').classList.add('is-drop-down');
                }
            }
        })

        if(document.documentElement.clientWidth < 992) {
            let logo = document.querySelector('.header__logo');
            let menu = document.createElement('div');
            menu.className = 'header__menu menu_mobile';

            let list = document.createElement('ul');
            list.className = 'menu__list';

            let dropDownBlock = document.querySelector('.is-drop-down');
            list.append(dropDownBlock);
            menu.append(list);
            logo.after(menu);

        }

        let dropDownBlock = document.querySelector('.is-drop-down');
        dropDownBlock.addEventListener('click', (e) => {
            if(document.documentElement.clientWidth < 992) {
                e.preventDefault();
            }
        })
    }
};
	{
    let slider = document.querySelectorAll('.testimonials__slider');

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

    let slids = document.querySelectorAll('.testimonials__slider .swiper-slide');
    if(slids.length) {
        if(document.documentElement.clientWidth > 1140) {
            slids.forEach(slide => {
                let height = slide.querySelector('.testimonials__text').clientHeight;
                let logo = slide.querySelector('.testimonials__logo');
                logo.style.height = height + 'px';
            })
        }
    }
};
	// === team card handler ==================================================================
{
	if($('.list-team__cord-wrap').length>0) {
		$('.list-team__cord-wrap').click(function(e){
			if(document.documentElement.clientWidth <= 1023) {
				$(this).find('.card-team__hover-box').slideToggle(300);
			} else {
                this.classList.toggle('_open');
            }
			
        })
        
	}
}
// === // team card handler ==================================================================



// ==== team correct height =======================================================

{
	let block = document.querySelector('.list-team');
	if(block) {

		function transferCardsForSmallWindow() {
			let arrElem = [];

			for(let item of block.children) {
				for(let i of item.children) {
					arrElem.push(i);
				}
			}

			let ul = document.createElement('ul');
			let li = document.createElement('li');

			ul.classList = 'team__list list-team';

			for(let i = 0; i < arrElem.length; i++) {
				li.append(arrElem[i]);
			}

			ul.append(li);

			block.replaceWith(ul);
		}

		function transferCardsForBigWindow() {
			let arrElem = [];

			for(let item of block.children) {
				if(item.children.length > 3) {
					for(let i = 3; i < item.children.length; i++ ) {
						arrElem.push(item.children[i]);
					}
				}
			}


			const transfer = () => {
				for(let item of block.children) {
					if(arrElem.length>0 && item.children.length < 3) {
						if(item.children.length == 0) {
							for(let i = 0; i < 3; i++) {
								if(arrElem[i]) {
									item.append(arrElem[i]);
								}
							}
							arrElem = arrElem.slice(3, arrElem.length);
						} else if(item.children.length == 1) {
							for(let i = 0; i < 2; i++) {
								if(arrElem[i]) {
									item.append(arrElem[i]);
								}
							}
							arrElem = arrElem.slice(2, arrElem.length);
						} else if (item.children.length == 2) {
							for(let i = 0; i < 1; i++) {
								if(arrElem[i]) {
									item.append(arrElem[i]);
								}
							}
							arrElem = arrElem.slice(1, arrElem.length);
						}
					}
				}
			}

			transfer();

			if(arrElem.length>0) {
				let count = arrElem.length / 3;

				for(let i = 0; i < count; i++) {
					let li = document.createElement('li');
					block.append(li);
				}
			}

			transfer();


			for(let item of block.children) {
				item.style.minHeight = item.getBoundingClientRect().height * 0.1 + 'rem';

				if(item.children.length == 1) {
					item.classList.add('_one');
				}

				if(item.children.length == 2) {
					item.classList.add('_two');
				}

				let arrHeight = [];

				for(let inItem of item.children) {
					let textBox = inItem.querySelector('.card-team__text-box');
					arrHeight.push(textBox.getBoundingClientRect().height);
				}

				let maxHeight = Math.max(...arrHeight);

				for(let inItem of item.children) {
					let textBox = inItem.querySelector('.card-team__text-box');
					textBox.style.minHeight = maxHeight * 0.1 + 'rem';
				}
			}
		}


		if(document.documentElement.clientWidth <= 1023) {
			transferCardsForSmallWindow();
		} else {
			transferCardsForBigWindow();
			//block.querySelector('.list-team__cord-wrap').classList.add('_open');
		}

		if(document.documentElement.clientWidth > 1023 && document.documentElement.clientWidth <= 1440) {
		 	document.querySelector('html').style.fontSize = '7.6px';
		}

		window.addEventListener('resize', () => {
			if(document.documentElement.clientWidth > 1023 && document.documentElement.clientWidth <= 1440) {
				document.querySelector('html').style.fontSize = '7.6px';
			} else if(document.documentElement.clientWidth > 1440) {
				document.querySelector('html').style.fontSize = '10px';
			} else if(document.documentElement.clientWidth < 1234) {
				document.querySelector('html').style.fontSize = '10px';
				transferCardsForSmallWindow();
			}
		})

	}
}
// ==== // team correct height =======================================================
;
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
};
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
                nextEl: clientsBlock.querySelector('.clients-block__btn_next'),
                prevEl: clientsBlock.querySelector('.clients-block__btn_prev'),
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
            // on: {
            //     init: function () {
                  
            //     },
            //   }
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
           // img.style.maxWidth = (img.clientWidth / 1.7) + 'px';
            
        })

        // preloadImages(logosImg, createWidth)

        // function createWidth() {
         
            
        //     logosImg.forEach(img => {
        //         img.style.maxWidth = (img.clientWidth / 1.7) + 'px';
        //     })
        // }

        // function preloadImages(sources, callback) {
        //     let counter = 0;
      
        //     function onLoad() {
          
                
        //       counter++;
        //       if (counter == sources.length) {

        //         callback();
        //       }
        //     }
      
        //     for(let img of sources) {
           
                
        //       img.onload = img.onerror = onLoad;

        //     }
        //   }
    }


  
    
}
;
	
});

//// html example --- <img class="lazy" data-src="https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" src="img/photo/placeholder.jpg" alt="img">


// === lazy load ==================================================================
document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;

	if ("IntersectionObserver" in window) {
        
		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					//lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
        const lazyLoad = function() {
            if (active === false) {
              active = true;
              setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                  if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                    lazyImage.src = lazyImage.dataset.src;
                    //lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
        
                    lazyImages = lazyImages.filter(function(image) {
                      return image !== lazyImage;
                    });
        
                    if (lazyImages.length === 0) {
                      document.removeEventListener("scroll", lazyLoad);
                      window.removeEventListener("resize", lazyLoad);
                      window.removeEventListener("orientationchange", lazyLoad);
                    }
                  }
                });
        
                active = false;
              }, 200);
            }
          };
      
          lazyLoad();
        
          document.addEventListener("scroll", lazyLoad);
          window.addEventListener("resize", lazyLoad);
          window.addEventListener("orientationchange", lazyLoad);
    }
    
});
// === // lazy load ==================================================================;
