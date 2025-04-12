// class Car { /* inicializo una clase, van con Mayusculas la primera */
//     constructor(brand, speed) { /* Le asigno un constructor */
//         this.brand = brand /* Donde van a aterrizar los parametros definidos */
//         this.speed = speed
//     }

//     accelerate() { /* Defino una funcion */
//         this.speed += 10 /* Aterrizo esta operacion aritmetica y lo que ocaciona un cambio aritmetico */
//         console.log(`${this.brand} is going at ${this.speed} km/h`); /* Muestro en consola un mensaje */
//     }

//     brake() { /* Defino una funcion */
//         this.speed -= 5 /* Aterrizo esta operacion aritmetica y ocaciona un cambio aritmetico */
//         console.log(`${this.brand} is going at ${this.speed} km/h`); /* Muestro en consola un mensaje */
//     }

//     get speedUS() { /* Defino un una funcion */
//         return this.speed / 1.6 /* Retorno la propiedad interna con una operacion aritmetica */
//     }

//     set speedUSset({ speed }) { /* Metodo que redefine la funcion y recibe un argumento */
//         this.speed = speed * 1.6 /* Nuevo valor de Speed */
//     }
// }

// const bmw = new Car('BMW', 120) /* Creo un nuevo objeto llamado bmw que recibe parametros de la funcion */
// const mercedes = new Car('Mercedes', 95) /* Creo un nuevo objeto y le paso parametros al constructor de la clase */

// bmw.brake() /* Le paso la funcion a el objeto llamado bmw */
// bmw.accelerate()
// bmw.accelerate()

// mercedes.accelerate()
// mercedes.accelerate()
// mercedes.brake()
// mercedes.accelerate()

// const ford = new Car('Ford', 120) /* Inicializo una nueva variable con el costructor del carro y le paso argumentos */
// ford.accelerate() /* Invoco la funcion de acelerar */
// ford.accelerate()
// ford.accelerate()
// ford.brake() /* Invoco la funcion de frenado */
// console.log(ford.speedUS); /* Aqui tengo el resultado en consola de las millas por hora */

// ford.speedUSset = { speed: 500 } /* Reasigno el valor de speed */
// console.log(ford.speedUS); /* Muestro el nuevo valor de speed */

// // /*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  */

const getPosition = function () {
    return new Promise(function (res, rej) {
        navigator.geolocation.getCurrentPosition(res, rej)
    })
}

const whereAmI = async function () {
    const pos = await getPosition()
    const { latitude: lat, longitude: lng } = pos.coords

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    const dataGeo = await resGeo.json()
    console.log(dataGeo);

    const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.Mexico}`)
    const data = await res.json()
    console.log(data);
}
whereAmI()
