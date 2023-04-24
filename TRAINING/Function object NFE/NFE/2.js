"use strict";
//функция sayHi вызывает себя с "Guest", если не передан параметр who:

let sayHi = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest"); // использует func, чтобы снова вызвать себя же
    }
  };
  
  sayHi(); // Hello, Guest
  
  // А вот так - не cработает:
  func(); // Ошибка, func не определена (недоступна вне функции)