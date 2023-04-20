/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

1.С использованием цикла.
2.Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3.С использованием формулы арифметической прогрессии.
*/

"use strict";

/*С использованием формулы арифметической прогрессии.*/
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(5));
console.log(sumTo(100));
