"use strict";
/*this не привязывается статически ни к какому объекту, а зависет только от контекста вызова.
Значением this является объект перед точкой в контексте которого вызван метод


*/

let user =
{
    name: 'Max',

    sayHi: function()
    {
        console.log('Hello!');
    }
}

//вызов метода sayHi() у объекта user
user.sayHi();

/*https://www.youtube.com/watch?v=tfzrgp22Hwo */