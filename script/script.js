window.addEventListener('DOMContentLoaded', function() {
    'use strict'

    // Timer
    function timerCount(deadLine) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaning() {
            let dateStop = new Date(deadLine).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor((timeRemaining / 3600) % 24);
            return { timeRemaining, hours, minutes, seconds }
        }

        function updateClock() {
            let timer = getTimeRemaning();
            if (timer.timeRemaining > 0) {
                timerSeconds.textContent = addNull(timer.seconds);
                timerMinutes.textContent = addNull(timer.minutes);
                timerHours.textContent = addNull(timer.hours);
            } else {
                clearInterval(idInterval);
                timerSeconds.textContent = '00';
                timerMinutes.textContent = '00';
                timerHours.textContent = '00';
            }

        };

        let idInterval = setInterval(updateClock, 1000);

        function addNull(time) {
            if (time > 0 && time < 10) {
                return '0' + time
            } else return time
        };

    };
    timerCount('2021 22 april');

    // Делаем Menu
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
    toggleMenu()

    // Делаем Popup
    function togglePopUp() {

        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');

        popupBtn.forEach((item) => {
            item.addEventListener('click', () => {
                if (window.innerWidth > 768) {
                    popup.style.display = 'block';
                    showInt = requestAnimationFrame(animatedPopup);
                    count = 0;
                } else {
                    popup.style.display = 'block';
                    popupContent.style.top = 0 + `%`;
                    console.log('popup.style.top: ', popup.style.top);
                }
            })
        });

        let count = 0,
            showInt;

        function animatedPopup() {
            let clientHeigh = document.documentElement.clientHeight / 2,
                popupHeigh = popupContent.getBoundingClientRect().height / 2;
            showInt = requestAnimationFrame(animatedPopup);
            count = count + 4;
            if (count < (clientHeigh - popupHeigh)) {
                popupContent.style.top = count + 'px';
            } else {
                cancelAnimationFrame(showInt);
            }
        };

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content')
                if (target === null) {
                    popup.style.display = 'none';
                }
            }
        });
    };
    togglePopUp()

    // Делаем табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            tabContent.forEach((item, i) => {
                if (item === tabContent[index]) {
                    tab[i].classList.add('active');
                    item.classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    item.classList.add('d-none');
                }
            });
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                })
            }
        })
    };
    tabs();

    // Делаем слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            };

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                })
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } else if (currentSlide <= 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        })

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });

        const addDots = () => {
            slide.forEach(() => {
                const newElem = document.createElement('li');
                newElem.classList.add('dot');
                portfolioDots.append(newElem);
            });
            let dots = document.querySelectorAll('.dot');
            dots[currentSlide].classList.add('dot-active');
        };

        addDots();
        let dot = document.querySelectorAll('.dot');
        startSlide(15000);


    };
    slider();

    // меняем data атрибут у картинок
    const changeImg = () => {
        const photo = document.querySelectorAll('.command__photo');

        photo.forEach((item) => {
            let src;
            item.addEventListener('mouseenter', (event) => {
                src = event.target.src;
                event.target.src = event.target.dataset.img;
            })
            item.addEventListener('mouseout', (event) => {
                event.target.src = src;
            })

        });

    };
    changeImg();

    // запрещаем ввод букв в калькуляторе
    const calcCheck = () => {
        const calcs = document.querySelectorAll('.calc-item');

        calcs.forEach((item) => {
            item.addEventListener('input', (event) => {
                event.target.value = event.target.value.replace(/\D/g, '');
            })
        });
    };
    calcCheck();



});