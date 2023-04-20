/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/

"use strict";

/*Через рекурсию*/
function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(5));
console.log(sumTo(100));
