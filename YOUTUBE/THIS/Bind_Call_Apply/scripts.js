const auto = {
    brand: "Tesla",
    drive(){
        console.log(this)
        return `Заведем нашу ${this.brand}`;
    }
}

const autoDrive =auto.drive.bind(auto);