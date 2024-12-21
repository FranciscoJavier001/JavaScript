class Car { /* inicializo una clase, van con Mayusculas la primera */
    constructor(brand, speed) { /* Le asigno un constructor */
        this.brand = brand /* Donde van a aterrizar los parametros definidos */
        this.speed = speed
    }

    accelerate() { /* Defino una funcion */
        this.speed += 10 /* Aterrizo esta operacion aritmetica y lo que ocaciona un cambio aritmetico */
        console.log(`${this.brand} is going at ${this.speed} km/h`); /* Muestro en consola un mensaje */
    }

    brake() { /* Defino una funcion */
        this.speed -= 5 /* Aterrizo esta operacion aritmetica y ocaciona un cambio aritmetico */
        console.log(`${this.brand} is going at ${this.speed} km/h`); /* Muestro en consola un mensaje */
    }
}

const bmw = new Car('BMW', 120) /* Creo un nuevo objeto llamado bmw que recibe parametros de la funcion */
const mercedes = new Car('Mercedes', 95) /* Creo un nuevo objeto y le paso parametros al constructor de la clase */

bmw.brake() /* Le paso la funcion a el objeto llamado bmw */
bmw.accelerate()
bmw.accelerate()

mercedes.accelerate()
mercedes.accelerate()
mercedes.brake()
mercedes.accelerate() 
