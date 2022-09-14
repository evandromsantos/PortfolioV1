const exeFuncaoMenu = () => {
    clickMenu();
    btnHamburger();
}

const btnHamburger = () => {
    const btnMobile = document.querySelector('#btn-mobile');
    btnMobile.addEventListener('click', () => {
        document.querySelector('.animated-icon').classList.toggle('open');
        document.querySelector('.nav-bar').classList.toggle('open');
    });
}

const clickMenu = () => {
    Array.from(document.querySelectorAll('.link-menu')).forEach((element) => {
        element.addEventListener('click', () => {
            if (document.querySelector('.nav-bar').classList.contains('open')) {
                document.querySelector('.nav-bar').classList.remove('open');
                document.querySelector('.animated-icon').classList.remove('open');
            } 
        });
    });
}
exeFuncaoMenu();