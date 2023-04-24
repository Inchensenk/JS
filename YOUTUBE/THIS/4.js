"use strict";

function func()
{
    console.log(this);
}

func();//в режиме "use strict"; : undefined // в legacy режиме: Object [global]