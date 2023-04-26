

/*Счет */
const bill =
{
    tip: 0.1,//чаявые
    calculate(total)//общий счет с чаявыми
    {
        console.log(this);
        return total + total*this.tip
    }
}
/*
const pay = bill.calculate(1000);
console.log(pay) */

//привязываем функцию к объекту bill
const payCount = bill.calculate.bind(bill);
console.log(payCount(1000));