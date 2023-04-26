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
people.forEach