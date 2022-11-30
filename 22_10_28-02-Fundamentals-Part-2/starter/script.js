const frank = { //** Primero declaramos el objeto */
    primerNombre: 'Francisco', //** Le damos atributos */
    ultimoNombre: 'Duran',
    anoNacimiento: 1987,
    job: 'Developer',
    friend: ['Javier', 'Luis', 'Marcos'],
    licenciaManejo: true,

    // calcularEdad: function(anoNacimiento) { //** Inicializo una funcion por si la necesito */
        //     return 2022 - anoNacimiento
    // }

    // calcularEdad: function() {
        //     // console.log(this);
    //     return 2022 - this.anoNacimiento
    // }

    calcularEdad: function() { //** Con esta funcion consigo la edad */
        this.edad = 2022 - this.anoNacimiento
        return this.edad
    }
}

console.log(frank.calcularEdad()); //** Mando llamar la funcion para ver la edad de frank */

console.log(frank.edad); //** Ya le meti el atributo edad y puedo acceder a el */
// console.log(frank['calcularEdad'](1987));
//**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

const usuario = { //** Otro objeto */
    pN: `Ana`,
    uN: `Lope`,
    aN: 1990,
    pT: `Abogada`,
    mA: [`Tania`, `Monica`, `Alejandra`],
    lM: false,
    
    conseguirEdad: function(){ //** Funcion para calcular edad */
        this.edad = 2022 - this.aN
        return this.edad
    },

    
//** Ana es una mujer de 32 años y es Abogada y no tiene licencia de manejo */
    conseguirInformacion: function(){ //** Simple funcion que me retorna en consola lo que queria */
        return `${this.pN} es una mujer de ${this.conseguirEdad()} años y es ${this.pT} y ${this.lM ? 'tiene' : 'no tiene'} licencia de manejo`
    }
}

console.log(usuario.conseguirInformacion()); //** Invoco la funcion */

const usuario2 = { //** Otro objeto */
    pN: `Ana`,
    uN: `Lope`,
    aN: 1990,
    pT: `Abogada`,
    mA: [`Tania`, `Monica`, `Alejandra`],
    lM: false,
}

//** Vamos a encargarnos de hacernos expertos en conseguir arreglos bien diseñados */

const jonas = { //** Primero creo un objeto */
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    getAge: function() { //** Realizo la funcion que necesito */
        this.age = 2022 - this.birthYear
        return this.age //** Que retorne lo que necesito */
    },

    getSummary: function() { //** Creo una nueva funcion */
        //** Retorne lo que necesito */
        return `${this.firstName} is a ${this.getAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? 'has a' : 'does not have'} driver's license`
    }
}
// console.log(jonas.getAge()); //** Confirmo que la edad este bien */

//** Challenge "Jonas is a 31-year old teacher, and he has a driver's license" */
console.log(jonas.getSummary()); //** Se muestra en consola ese mensaje */