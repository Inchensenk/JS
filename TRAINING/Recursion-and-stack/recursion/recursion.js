"use strict";

function pow(x, n) {
  let result = 1;

  // умножаем result на x n раз в цикле
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8

/*----------------------------------------------------------------------*/
function pow2(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow2(x, n - 1);
  }
}

alert(pow2(2, 3)); // 8

/*----------------------------------------------------------------------*/

function pow3(x, n) {
  return n == 1 ? x : x * pow3(x, n - 1);
}

let rezult = pow3(2, 3);

console.log(rezult);
