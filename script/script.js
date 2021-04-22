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

    // Menu

    function toggleMenu() {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => menu.classList.toggle('active-menu');

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((item) => item.addEventListener('click', handlerMenu));
    };
    toggleMenu()

    //  Popup
    function togglePopUp() {

        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        popupBtn.forEach((item) => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
            })
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        })

    };
    togglePopUp()


});