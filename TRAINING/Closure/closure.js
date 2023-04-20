"use strict";

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"? // будет Hi, Pete
