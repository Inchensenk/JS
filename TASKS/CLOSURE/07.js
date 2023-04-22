"use strict";

function makeArmy() {

  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = function() { // функция shooter
      console.log( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);


  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[1](); // 1
army[2](); // 2
army[3](); // 3
army[4](); // 4
army[5](); // 5
army[6](); // 6
army[7](); // 7
army[8](); // 8
army[9](); // 9


