/* eslint-disable no-console */
/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
import {isMeetingWithInWorkday} from './functions.js';
console.log(isMeetingWithInWorkday('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingWithInWorkday('8:0', '10:0', '8:0', 120)); // true
console.log(isMeetingWithInWorkday('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingWithInWorkday('14:00', '17:30', '08:0', 90)); // false
console.log(isMeetingWithInWorkday('8:00', '17:30', '08:00', 900)); // false
