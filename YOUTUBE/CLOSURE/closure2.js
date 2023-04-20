"use strict";

function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();

increment(); //1
increment(); //2
increment(); //3
log(); //Count is 0

//https://www.youtube.com/watch?v=mI6Jcfsgma4
