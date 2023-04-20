"use strict";
let arr = [1, 2];
/**Обычно он копирует только элементы из массивов. Другие объекты, даже если они выглядят как массивы, добавляются как есть: */

let arrayLike = {
  0: "что-то",
  length: 1,
};

console.log(arr.concat(arrayLike)); // 1,2,[object Object] // [ 1, 2, { '0': 'что-то', length: 1 } ]
