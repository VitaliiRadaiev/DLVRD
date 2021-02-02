
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
}