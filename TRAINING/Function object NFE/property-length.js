"use strict";

// Ещё одно встроенное свойство «length» содержит количество параметров функции в её объявлении. Например:
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
