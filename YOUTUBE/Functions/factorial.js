"use strict";

let f = function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
};

let g = f;
f = null;

console.log(g(5));

/*https://www.youtube.com/watch?v=rtGTZ4knRSY */
