const myArray = [1,2,3, 10];
console.log(myArray);

//map возврвщает новый массив с результатами колбэк функции el => el*3
const newArray = myArray.map(el => el*3);

//с использованием стрелочной функции
const newArray2 = myArray.map((el) => 
{
    return el*4;
});

//с использованием анонимного функционального выражения
const newArray3 = myArray.map(function (el)
{
    return el*5;
});

console.log(newArray);
console.log(newArray2);
console.log(newArray3);
console.log(myArray);//оригинал не изменился