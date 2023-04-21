const myArray = [1,2,3, 10];
console.log(myArray);

//перебирает все элементы массива и вызывает для каждого элемента колбэк функцию el => console.log(el*2) 
const res = myArray.forEach(el => console.log(el*2));
/*метод forEach не меняет оригинальный массив*/

console.log(myArray);

console.log(res);