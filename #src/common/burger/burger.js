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
// === Burger Handler =====================================================================	