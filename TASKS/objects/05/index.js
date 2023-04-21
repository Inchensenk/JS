/*Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.*/

"use strict"

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  /*Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.*/

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

  
  multiplyNumeric(menu);

  alert(menu.width + " " + menu.height + " " + menu.title);