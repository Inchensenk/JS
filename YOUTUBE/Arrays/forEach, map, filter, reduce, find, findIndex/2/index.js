const people = [
    {name: 'Владимир', age: 25, budget: 40000},
    {name: 'Елена', age: 17, budget: 3400},
    {name: 'Игорь', age: 49, budget: 50000},
    {name: 'Михаил', age: 15, budget: 1800},
    {name: 'Василиса', age: 24, budget: 25000},
    {name: 'Виктория', age: 38, budget: 23000},
];
/*
//трансформация объекта
const newPeople = people
      .filter(person => person.budget>3000)
      .map(person => {
        return{
                info: `${person.name} (${person.age})`,
                budget: person.budget}
            })


console.log(newPeople);//[  { info: 'Владимир (25)', budget: 40000 },    { info: 'Елена (17)', budget: 3400 },  { info: 'Игорь (49)', budget: 50000 },    { info: 'Василиса (24)', budget: 25000 },  { info: 'Виктория (38)', budget: 23000 }]*/

//трансформация объекта с расчетом
const amount = people
      .filter(person => person.budget>3000)
      .map(person => {
        return{
                info: `${person.name} (${person.age})`,
                budget: person.budget}
            })
            .reduce((total, person) => total+person.budget, 0);

            console.log(amount);//141400

            
//https://www.youtube.com/watch?v=nEabP9CYCAQ&t=19s
