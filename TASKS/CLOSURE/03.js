"use strict";

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// Результатом будет ошибка.
// Функция sayHi объявлена внутри if, так что она живёт только внутри этого блока. Снаружи нет sayHi.