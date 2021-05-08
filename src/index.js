'use strict';

import timerCount from './modules/timerCount';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImg from './modules/changeImg';
import calcCheck from './modules/calcCheck';
import nameMessageCheck from './modules/nameMessageCheck';
import emailCheck from './modules/emailCheck';
import phoneCheck from './modules/phoneCheck';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


// Timer
timerCount('2021 22 may');
// Делаем Menu
toggleMenu()
    // Делаем Popup
togglePopUp()
    // Делаем табы
tabs();
// Делаем слайдер
slider();
// меняем data атрибут у картинок
changeImg();
// запрещаем ввод букв в калькуляторе
calcCheck();
// проверка формы на корректный ввод данных
//  проверка имени и сообщения
nameMessageCheck();
// проверка формы email
emailCheck();
// проверка формы телефон
phoneCheck();
// делаем калькулятор
calc(100);
// send-ajax-form 
sendForm();