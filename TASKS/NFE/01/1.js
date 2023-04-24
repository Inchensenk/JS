/* 
Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
*/
"use strict";
/*
function makeCounter() {
    let count = 0;
  
    function counter() 
    {
        return counter.count++;
    };

    function decrease() 
    {
        return counter.count--;
    };

    function set(count)
    {
    return counter.count=count;
    };

      counter.count = 0;
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  console.log( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  console.log( counter() ); // 10 (вместо 11)*/

  /****************************************************************************************************************************
   * В решении использована локальная переменная count, а методы сложения записаны прямо в counter.
   * Они разделяют одно и то же лексическое окружение и также имеют доступ к текущей переменной count.
   * 
   * ***************************************************************************************************************************/

  function makeCounter() 
  {
    
    let count = 0;
  
    function counter() 
    {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }

  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  console.log( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  console.log( counter() ); // 10 (вместо 11)