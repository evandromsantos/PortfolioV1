const exeScrollAnimation = () => {
    scrollAnimationOp();
    scrollAnimationDr();
    scrollHeader();
    scrollFontMenu();
}

const scrollAnimationOp = () => {
    const observer = new IntersectionObserver((entries) => {
        Array.from(entries).forEach((entry) => {
            if (entry.intersectionRatio >= .1) {
                entry.target.classList.add('init-hidden-off');
            } else {
                entry.target.classList.remove('init-hidden-off');
            }
        })
    }, {
        threshold: .1
    });
    Array.from(document.querySelectorAll('.init-hidden')).forEach((element) => {
        observer.observe(element);
    });
}

const scrollAnimationDr = () => {
    const observer = new IntersectionObserver((entries) => {
        Array.from(entries).forEach((entry) => {
            if (entry.intersectionRatio >= .1) {
                entry.target.classList.add('box-right-off');
            } else {
                entry.target.classList.remove('box-right-off');
            }
        })
    }, {
        threshold: .1
    });
    Array.from(document.querySelectorAll('.box-right')).forEach( (element) => {
        observer.observe(element);
    });
}


const scrollHeader = () => {
    const header = document.querySelector('.cabecalho');
    const menu = document.querySelector('.menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 70) {
            header.classList.add('cabecalho-2');
            menu.classList.add('menu-2');
        } else {
            header.classList.remove('cabecalho-2');
            menu.classList.remove('menu-2');
        }
    });
}

const scrollFontMenu = () => {
    Array.from(document.querySelectorAll('.link-menu')).forEach( (element) => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                element.classList.add('link-menu-2');
            } else {
                element.classList.remove('link-menu-2');
            }
        });
    });
}

exeScrollAnimation();