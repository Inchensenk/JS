/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/

"use strict";

/*С использованием цикла. */
function sumTo(n) {
  console.log(`***Аргумент ${n} начало***`);
  console.log("\n");
  let rezult = 0;
  for (let i = 1; i <= n; i++) {
    rezult += i;
    console.log(`${i}-я итерация: ${rezult}`);
  }

  console.log(`Сумма с аргументом ${n}:  ${rezult}`);
  console.log(`***Аргумент ${n} конец***`);
  console.log("\n");
}

sumTo(2);
sumTo(3);
sumTo(4);
sumTo(5);
sumTo(100);
