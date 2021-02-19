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
}