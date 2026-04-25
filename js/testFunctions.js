import { checkStringLength, checkPalindrome, checkPalindromeTwoPointers, chooseNumbers } from './functions.js';
/* eslint-disable no-console */
console.log('Результаты тестов для функции проверки длины строки:');
// Строка короче 20 символов
console.log(checkStringLength('проверяемая строка', 20)); // true
// Строка короче 5 символов
console.log(checkStringLength('проверяемая строка', 5)); // false
// Длина строки ровно 18 символов
console.log(checkStringLength('проверяемая строка', 18)); // true
// Строка короче 10 символов
console.log(checkStringLength('проверяемая строка', 10)); // false

console.log('Результаты тестов для функции проверки строки на палиндром методом переворота строки:');
// Строка является палиндромом
console.log(checkPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(checkPalindrome('ДовОд')); // true
// Это не палиндром
console.log(checkPalindrome('Кекс')); // false
// Это палиндром
console.log(checkPalindrome('Лёша на полке клопа нашёл ')); // true

console.log('Результаты тестов для функции проверки строки на палиндром методом двух указателей:');
// Строка является палиндромом
console.log(checkPalindromeTwoPointers('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(checkPalindromeTwoPointers('ДовОд')); // true
// Это не палиндром
console.log(checkPalindromeTwoPointers('Кекс')); // false
// Это палиндром
console.log(checkPalindromeTwoPointers('Лёша на полке клопа нашёл ')); // true

console.log('Результаты тестов для функции выбора чисел из строки:');
console.log(chooseNumbers('2023 год')); // 2023
console.log(chooseNumbers('ECMAScript 2022')); // 2022
console.log(chooseNumbers('1 кефир, 0.5 батона')); // 105
console.log(chooseNumbers('агент 007')); // 7
console.log(chooseNumbers('а я томат')); // NaN
console.log(chooseNumbers(2023)); //2023
console.log(chooseNumbers(-1)); // 1
console.log(chooseNumbers(1.5)); // 15
