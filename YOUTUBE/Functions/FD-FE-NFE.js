"use strict";

console.log(sum(1, 2));
console.log(sum1(1, 2)); //щшибка

//Function declaration ф-ия объявленная в основном потоке кода// создается интерпритатором до обьявления

function sum(a, b) {
  return a + b;
}

//Function expression функциональное выражение

let sum1 = function (a, b) {
  return a + b;
};

console.log(sum1(1, 2));

//Named Function Expression NFE именнованное функциональное выражение, помимо того что она присваивается в переменную она т ак же имеет имя
//имя доступно только из нутри функции. NFE Используется когда нужно из нутри ф-ции вызвать саму себя
//В практике NFE используется редко

let func = function sum3(a, b) {
  return a + b;
};

/*https://www.youtube.com/watch?v=rtGTZ4knRSY */
