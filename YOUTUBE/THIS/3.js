"use strict";

/*Значение this назавается контекстом вызова, если 1 и туже функцию запускать в контексте разных объектов, то она будет получать разный this */

let user =
{
    name: 'Max',
}

let user2 =
{
    name: 'Valera',
}

user.sayHi = function()
{
    console.log('Hello!' + "  " +this.name);
}

user2.sayHi = function()
{
    console.log('Hello!' + "  " +this.name);
}

user.sayHi();
user2.sayHi();

/*https://www.youtube.com/watch?v=tfzrgp22Hwo */