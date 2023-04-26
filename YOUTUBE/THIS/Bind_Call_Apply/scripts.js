

/*Счет */
const bill =
{
    tip: 0.1,//чаявые
    calculate(total)//общий счет с чаявыми
    {
        console.log(this);
        return total + total*this.tip
    },
    detail(dish1, dish2, sum)
    {
        return `Ваш обед (${dish1}, ${dish2} стоит${this.calculate(sum)})`;
    }
}
/*
const pay = bill.calculate(1000);
console.log(pay) */

/*
//привязываем функцию к объекту bill
const payCount = bill.calculate.bind(bill);
console.log(payCount(1000));*/

/*//меняем процент чаевых на 20%
const payCount = bill.calculate.bind({tip: 0.2});
console.log(payCount(1000));*/
/*
//тоже самое что и выше
const payCount = bill.calculate.bind({tip: 0.2}, 1000);
console.log(payCount());*/
/*
//Контекст привязывается 1 раз и мы не можем его повторно перепривязывать поэтому в выводе 1100
const payCount = bill.calculate.bind(bill).bind({tip: 0.2}).bind({tip: 0.5});
console.log(payCount(1000));
*/
/*
const pay = bill.calculate.bind(bill);
const payCount = bill.calculate.call(bill, 1000);
const payCount2 = bill.calculate.apply(bill, [1000]);

console.log(pay(1000));//1100
console.log(payCount);//1100
console.log(payCount2);//1100*/