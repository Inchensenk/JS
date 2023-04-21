/* 
    Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/

"use strict";

/**Просто в цикле перебираем свойства объекта и возвращаем false, как только встречаем свойство. */
function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }