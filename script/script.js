window.addEventListener('DOMContentLoaded', function() {
    'use strict'

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
            console.log('timer: ', timer);

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
        let idInterval = setInterval(updateClock(), 1000);
        console.log('idInterval: ', setInterval);

        function addNull(time) {
            if (time > 0 && time < 10) {
                return '0' + time
            } else return time
        };

    };

    timerCount('2021 24 april');




});