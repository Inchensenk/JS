"use strict";

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // 0 // так-как counter2 новая переменная и для каждого вызова создается новое лексическое окружение,
  console.log( counter2() ); // 1 // то counter2 будет сохранять данные вызовов заново

  /*
  Ответ: 0,1.

  Функции counter и counter2 созданы разными вызовами makeCounter.

  Так что у них независимые внешние лексические окружения, у каждого из которых свой собственный count.
  */