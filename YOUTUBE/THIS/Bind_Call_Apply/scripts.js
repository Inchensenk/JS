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



/*
const autoDrive = auto.drive.bind(auto);
autoDrive();//{ brand: 'BMW', drive: [Function: drive] }// в хроме 'Заведем наш BMW'

const motorDrive = auto.drive.bind(motorBike);
motorDrive();//{ brand: 'Suzuki' }// в хроме 'Заведем наш Suzuki'

const motorDrive1 = auto.drive.bind({brand: 'Корабл'});// в хроме 'Заведем наш Корабл'*/

const $ = document.querySelector.bind(document); 
const header = $('h2');
console.log(header);


