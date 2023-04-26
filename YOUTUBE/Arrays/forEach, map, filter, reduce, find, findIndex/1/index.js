const people = [
    {name: 'Владимир', age: 25, budget: 40000},
    {name: 'Елена', age: 17, budget: 3400},
    {name: 'Игорь', age: 49, budget: 50000},
    {name: 'Михаил', age: 15, budget: 1800},
    {name: 'Василиса', age: 24, budget: 25000},
    {name: 'Виктория', age: 38, budget: 23000},
];

/*
        //привычный способ 1 ES5
for(let i = 0; i<people.length; i++)
{
    console.log(people[i])
}
            //привычный способ 2 ES6
for (let person of people)
{
    console.log(person);
}
*/

                //ForEach
/*
people.forEach(function(person, index, peopleArr)
{
    console.log(person);
    console.log(index);
    console.log(peopleArr);
});*/

//ES6
//people.forEach(person =>  console.log(person));

                    //Map возвращает новый массив

//итерируем по всему массиву и итерируем сам объект
/*
const newPeaple = people.map(person => {
    return person;
});
console.log(newPeaple);*/

/*
const newPeaple = people.map(person => {
    return 'Hello';
});
console.log(newPeaple);//[ 'Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello' ]*/
/*
const newPeaple = people.map(person => {
    return person.name;
});
console.log(newPeaple);//[ 'Владимир', 'Елена', 'Игорь', 'Михаил', 'Василиса', 'Виктория' ]*/
/*
const newPeaple = people.map(person => {
    return `${person.name} (${person.age})`;
});
console.log(newPeaple);//[    'Владимир (25)',    'Елена (17)',    'Игорь (49)',    'Михаил (15)',    'Василиса (24)',    'Виктория (38)'  ]*/

/*
const newPeaple = people.map(person =>  `${person.name} (${person.age})`);
console.log(newPeaple);//[    'Владимир (25)',    'Елена (17)',    'Игорь (49)',    'Михаил (15)',    'Василиса (24)',    'Виктория (38)'  ]*/

const newPeaple = people.map(person =>  person.age*3);
console.log(newPeaple);//[75, 51, 147, 45, 72, 114]

            //Filter фильтрует массив по условию

//
/*
const adults = people.filter( person => {
    if(person.age >= 18) {  return true; }
});
console.log(adults);*/

//тоже самое что выше
const adults = people.filter( person => person.age >= 18);
console.log(adults);//вернет людей старше 18



            //Reduce возвращает финалное значение совершив итерацию по массиву
 /*
//оющий бюджет
const amount = people.reduce((total, person) => {
    return total+person.budget;
}, 0);
console.log(amount);//143200
*/
const amount = people.reduce((total, person) => total+person.budget, 0);
console.log(amount);//143200

            //Find находит нужный элемент по условию
const igor = people.find(person => person.name === 'Игорь')
console.log(igor);//{name: 'Игорь', age: 49, budget: 50000}

            //FindIndex тоже самое что и файнд но возвращает индекс 'ktvtynf
const igorIndex = people.findIndex(person => person.name === 'Игорь')
console.log(igorIndex);//2
