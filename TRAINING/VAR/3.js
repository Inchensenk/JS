"use strict";

/*Используя var, можно переобъявлять переменную сколько угодно раз. Повторные var игнорируются: */


var user = "Pete";

var user; // ничего не делает, переменная объявлена раньше
// ...нет ошибки

alert(user); // Pete