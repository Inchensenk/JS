"use strict";
//Остаточные операторы REST
const func = (...rest) =>
{
    return rest.reduce((ac, item) =>
    {
        return ac+item;//аккумулятор+элемент
    }, 0);//0-изначальное значение
};

console.log(func(1,2,3,4,5));

/*https://www.youtube.com/watch?v=n_qeNBatU_k */