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

            timerSeconds.textContent = addNull(timer.seconds);
            timerMinutes.textContent = addNull(timer.minutes);
            timerHours.textContent = addNull(timer.hours);

            if (timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            } else {
                timerSeconds.textContent = '00';
                timerMinutes.textContent = '00';
                timerHours.textContent = '00';
            }
        }

        function addNull(time) {
            if (time > 0 && time < 10) {
                return '0' + time
            } else return time
        }

        updateClock();

    }

    timerCount('2021 24 april');




});