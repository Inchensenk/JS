"use strict";

function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)
//Pete: потому что в локальной области видимости функции есть такая переменная,
// то она не будет обращать внимание на такую же переменную в глобалноой области видимости
