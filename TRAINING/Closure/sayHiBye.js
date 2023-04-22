"use strict";

function sayHiBye(firstName, lastName) {

    // функция-помощник, которую мы используем ниже
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
  
  }

  sayHiBye('John','Smit');