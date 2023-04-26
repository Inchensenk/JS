function Auto(brand, price, gas){
   this.brand=brand;
   this.price=price;
   this.gas=gas;
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

const bmw = new Auto('bmw', '100,000', 100);
const nissan = new Auto('nissan', '40,000', 100);

bmw.drive();//80
bmw.drive();//60
bmw.drive();//40
bmw.drive();//20
bmw.drive();//0
bmw.drive();//бензин закончился

//https://www.youtube.com/watch?v=o_HntOTCqks