"use strict";
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = salaries.John+salaries.Ann+salaries.Pete;

  alert(sum);

  /* 
  
  Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

    Если объект salaries пуст, то результат должен быть 0.

  */
  let sum2 = 0;
  for (let key in salaries) 
  {
    sum2 += salaries[key];
  }

  alert(sum2);