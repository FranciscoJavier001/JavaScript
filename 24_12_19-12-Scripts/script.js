class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    accelerate() {
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

