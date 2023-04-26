function Auto(brand, price, gas){
   this.brand=brand;
   this.price=price;
   this.gas=gas;
   this.discount = 'Скидка 20%';
}

Auto.prototype.drive = function()
{
    if(this.gas > 0)
    {
        this.gas = this.gas - 20;
        return console.log(this.gas);
    }
    else
    {
        console.log('бензин закончился');
    }
}

Auto.prototype.discount = 'Скидка 70%';

Auto.prototype.info = function(){
    return `Стоимость ${this.brand} = ${this.price}`;
}

Auto.prototype.info = function(){
    return `Уровень топлива ${this.brand} = ${this.gas}`;
}

const bmw = new Auto('bmw', '100,000', 100);
const nissan = new Auto('nissan', '40,000', 100);

bmw.drive();//80
bmw.drive();//60
bmw.drive();//40
bmw.drive();//20
bmw.drive();//0
bmw.drive();//бензин закончился

console.log(bmw.discount);//Скидка 20% так как приоритет у свойства экземпляра обьекта, 
                        //если у экземпляра нет такого свойства тогда уже выводится свойство из прототипа то есть Скидка 70%

//https://www.youtube.com/watch?v=o_HntOTCqks