'use strict'

let timerHellow = document.querySelector('#timer-hellow'),
    timerDay = document.querySelector('#timer-day'),
    timerTime = document.querySelector('#timer-time'),
    timerNewYear = document.querySelector('#timer-newYear');

let now = new Date(),
    dateStop = new Date('01 january 2022').getTime(),
    dateNow = new Date().getTime();

let daysForNewYear = Math.floor((dateStop - dateNow) / 1000 / 60 / 60 / 60);

timerHellow.style.display = 'block';
timerDay.style.display = 'block';
timerTime.style.display = 'block';
timerNewYear.style.display = 'block';

function setHellow() {
    let hour = now.getHours();
    console.log('hour: ', hour);
    if (hour > 6 && hour < 12) {
        timerHellow.textContent = 'Доброе Утро!!!';
    } else if (hour >= 12 && hour < 18) {
        timerHellow.textContent = 'Добрый День!!!';
    } else if (hour >= 18 && hour < 24) {
        timerHellow.textContent = 'Добрый Вечер!!!';
    } else timerHellow.textContent = 'Доброй Ночи!!!';
};

function setDays() {
    let day = now.getDay();

    switch (day) {
        case 1:
            timerDay.textContent = 'Сегодня: Понедельник';
            break;

        case 2:
            timerDay.textContent = 'Сегодня: Вторник';
            break;

        case 3:
            timerDay.textContent = 'Сегодня: Среда';
            break;

        case 4:
            timerDay.textContent = 'Сегодня: Четверг';
            break;

        case 5:
            timerDay.textContent = 'Сегодня: Пятница';
            break;

        case 6:
            timerDay.textContent = 'Сегодня: Суббота';
            break;

        case 7:
            timerDay.textContent = 'Сегодня: Воскресение';
            break;
    }
}


setHellow();
setDays();
timerTime.textContent = 'Текущее время:' + now.toLocaleTimeString('en');
timerNewYear.textContent = 'До нового года осталось' + daysForNewYear + 'дней';