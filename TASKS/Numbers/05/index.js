/*
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

*/

"use strict";

/*
Простое, но неправильное решение
Самое простое, но неправильное решение – генерировать случайное число от min до max и округлять его:

        function randomInteger(min, max) {
            let rand = min + Math.random() * (max - min);
            return Math.round(rand);
        }

        alert( randomInteger(1, 3) );

        Функция будет работать, но неправильно. Вероятность получить min и max значения в 2 раза меньше, чем любое другое число.
        Если вы запустите приведённый выше пример, то заметите, что 2 появляется чаще всего.
        .;
        Это происходит потому, что метод Math.round() получает случайные числа из интервала 1..3 и округляет их следующим образом:
*/

