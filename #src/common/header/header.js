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
    }
}