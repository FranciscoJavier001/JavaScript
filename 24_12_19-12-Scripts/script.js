class Car { /* inicializo una clase, van con Mayusculas la primera */
    constructor(brand, speed) { /* Le asigno un constructor */
        this.brand = brand /* Donde van a aterrizar los parametros definidos */
        this.speed = speed
    }

    accelerate() { /* Defino una funcion */
        this.speed += 10
        console.log(`${this.brand} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5
        console.log(`${this.brand} is going at ${this.speed} km/h`);
    }
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)

bmw.brake()
bmw.accelerate()
bmw.accelerate()

mercedes.accelerate()
mercedes.accelerate()
mercedes.brake()
mercedes.accelerate() 
