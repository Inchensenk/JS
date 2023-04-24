"use strict";

const myArray = ["first", "second", "third"];

//в колбэк функции 2 параметра элемент массива и индекс элемента, index является необязательным параметром.
myArray.forEach((element, index) => {
  console.log(element, index);
});

// forEach возврващаент undefined поэтому нет смысла присваивать его переменной

/**https://www.youtube.com/watch?v=CxgOKJh4zWE&t=22908s */
