const auto = {
    brand: "BMW",
    drive(){
        console.log(this)
        return `Заведем наш ${this.brand}`;
    }
}

const motorBike = {
    brand: "Suzuki"
}




const autoDrive = auto.drive.bind(auto);

autoDrive();//{ brand: 'BMW', drive: [Function: drive] }// в хроме {brand: 'BMW', drive: ƒ}brand: "BMW"drive: ƒ drive()[[Prototype]]: Object
'Заведем наш BMW'


const motorDrive = auto.drive.bind(motorBike);
motorDrive();//{ brand: 'Suzuki' }// в хроме {brand: 'Suzuki'}brand: "Suzuki"[[Prototype]]: Object 'Заведем наш Suzuki'