"use strict";
//Оператор расширения spread


const args = [1,2,3,4,5];
const args2 = [6,7,8,9,10];

const func = (...rest) =>
{
    return rest.reduce((ac, item) =>
    {
        return ac+item;
    }, 0);
};

console.log(func(...args, 10, ...args2));

console.log(Math.max(...args, ...args2));



/*https://www.youtube.com/watch?v=n_qeNBatU_k */