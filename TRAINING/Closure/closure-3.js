"use strict";

// функция-конструктор возвращает новый объект
function User(name) {
  // методом объекта становится вложенная функция
  this.sayHi = function () {
    console.log(name);
  };
}

let user = new User("John");

user.sayHi(); // "John" (у кода метода "sayHi" есть доступ к внешней переменной "name")
