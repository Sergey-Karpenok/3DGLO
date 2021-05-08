function toggleMenu() {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => menu.classList.toggle('active-menu');

    menu.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName !== 'A') return
        handlerMenu();
    });

    btnMenu.addEventListener('click', handlerMenu);
};

export default toggleMenu;