"use strict";
/*Так делать не нужно */
function func()
{
    arguments.array.forEach((element, index) => 
    {
        console.log(element);
    });
};

func(1,2,3,4,5);//ошибка

/*https://www.youtube.com/watch?v=n_qeNBatU_k */