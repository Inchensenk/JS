/*Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию. */
"use strict";
function factorial(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

/*
По определению факториал n! можно записать как n * (n-1)!.

Другими словами, factorial(n) можно получить как n умноженное на результат factorial(n-1). 
И результат для n-1, в свою очередь, может быть вычислен рекурсивно и так далее до 1.

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120


Базисом рекурсии является значение 1. 
А можно было бы сделать базисом и 0, однако это добавило рекурсии дополнительный шаг:

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120
*/
