"use strict";

let btn = document.querySelector('button');

btn.onclick = function()
{
    console.log(this);//вывод в консоль элемента по которому было нажатие
}