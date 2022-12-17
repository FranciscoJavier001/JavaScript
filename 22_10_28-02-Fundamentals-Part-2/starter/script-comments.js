// 'use strict' //** Nos apoyamos del uso estricto para codificar mejor */
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// //** Funciones */
// function logger() { //** Inicializo una funcion */
//     console.log(`My name is Francisco`); //** Mostrar en consola este mensaje */
// }

// logger(); //** Mando llamar la funcion */
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// function procesadorFrutas(manzanas, naranjas) { //** Funcion que recibe 2 parametros */
//     const jugo = `Jugo con ${manzanas} manzanas y ${naranjas} naranjas` //** Variable que contiene un string */
//     return jugo //** Muestra la variable que acabo de crear */
// }

// const jugoManzana = procesadorFrutas(5, 0) //** Variable que recibe la funcion de arriba recibiendo variables */
// console.log(jugoManzana); //** Muestro la variable de arriba */
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// const jugoManzanaNaranja = procesadorFrutas(2, 4) //** Creo una variable que recibe la funcion con estos parametros dentro */
// console.log(jugoManzanaNaranja); //** Muestro la variable en consola */
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// const num = Number(23) //** Creacion de una variable con el valor de un numero */

//** Funcion Declarariva */
// function calcularEdad(anioNacimiento) { //** Funcion que recibe un argumento */
//     return 2022 - anioNacimiento //** Lo que me va a retornar */
// }

// const myAge = calcularEdad(1987) //** Creo una nueva variable que recibe una funcion y manda un argumento */
// console.log(`My edad es ${myAge}`); //** Muestro mensaje en consola con la edad */
// // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// //** Funcion Expresativa */
// const calcularEdadNueva = function(anioNacimiento) { //** Creo una variable, que tenga un funcion que reciba un parametro */
//     return 3022 - anioNacimiento //** Lo que va a retornar la funcion */
// }
// const myAgeNew = calcularEdadNueva(2000) //** Nueva variable que ejecuta una funcion que recibe un parametro */
// console.log(`La Nueva Edad es de ${myAgeNew}`);
// // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// console.log(`Edad #1: ${myAge} ... Edad #2: ${myAgeNew}`);
//   // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// //** Funcion que me diga cuantos meses faltan para que acabe el año */
// function finAño(numeroMes) { //** Funcion que recibe un argumento */
//     return 12 - numeroMes //** Instrucciones en la funcion */
// }

// const mesOctubre = finAño(10) //** Variable que manda un argumento a la funcion */
// console.log(`Para terminar el año faltan ${mesOctubre} meses`);
// // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */
//** Puedo almacenar en una variable el argumento que acabo de recibir */
//** Declaro funcion que recibe parametros y asigno un procedimiento */
//** Puedo retornar lo que necesito, yo defino aqui las instrucciones a seguir */
//** Declaro una variable que llame cualquier funcion con los argumentos que solicita */
//** Muestro donde quiera la funcion */
// // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */


//** Declaro una funcion que recibe un argumento las instruccione son calculos */
//** Declaro una variable y esta invoca la funcion con el parametro que necesitaba */
//** Muestro en consola lo que quiero */

// //** Declara una funcion que te diga cuantas horas le quedan al dia */
// const horasRestantes = horas => 24 - horas //** Creamos una variable que reciba las horas, donde la instruccion 24-horas recibidas */
// const horaActual = horasRestantes(18) //** Creamos una nueva constante donde se invoque la funcion y mandamos un parametro */
// console.log(`De este dia quedan ${horaActual} horas`); //** Mostramos en consola */
// // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// //** Meses para tu cumpleaños */
// //** Crea una variable donde ingreses el mes de tu cumpleaños */
// //** Otra donde tengamos el mes actual */
// //** Si el cumpleaños es mayor a los meses que faltan entonces pon el mes que le falta con una resta */
// //** Pero si el mes es menor  */
// const mesesFaltantes = meses => 12 - meses //** Variale donde se recibe un parametro y damos instrucciones */

// const mesActual = mesesFaltantes(11) //** Variable que manda llamar funcion con parametro */
// console.log(`Para terminar el año faltan ${mesActual} meses`); //** Mostramos en consola */
// //** Completar */
// // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// const yearsUntilRetirement = (birthYeah, firstName) => { //** Variable que recibe 2 parametros */
//   const age = 2037 - birthYeah; //** Variable que que la definimos y hace una resta de un parametro recibido(Sin/Sentido) */
//   const retirement = 65 - age; //** Variable que definimos una operacion con menos parametro age */
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`; //** Mostramos en consola */
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));  //** En consola invocamos la funcion y mandamos parametros */
// console.log(yearsUntilRetirement(1980, 'Bob')); 
// // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// //** Vamos a calcular los meses que faltan para tu cumpleaños */
// const mesesFaltantesCumpleaños = (mesCumpleaños, mesActual) => { //** Variable que recibe 2 parametros */
//     if(mesCumpleaños < mesActual) { //** Condicional */
//         const mesesFaltantes = (13 - mesActual + mesCumpleaños) //** Variable que recibe parametros y tiene instrucciones */
//         console.log(`mesCumpleaños < mesActual = Para tu Cumpleaños Faltan ${mesesFaltantes}`)
//     } else if (mesCumpleaños > mesActual) {
//         const mesesFaltantes = (mesCumpleaños - mesActual)
//         console.log(`mesCumpleaños > mesActual = Para tu Cumpleaños Faltan ${mesesFaltantes}`)
//     } else { //** Respuesta cuando ninguna condicion se cumple */
//         console.log(`mesCumpleaños = mesActual = Cumples Años este Mes`)
//     }
// }
// //** Pruebas */
// mesesFaltantesCumpleaños(1, 10) //** Cumplo Enero Estamos Octubre = 4 */
// mesesFaltantesCumpleaños(3, 10) //** Cumplo Marzo Estamos Octubre = 6 */
// mesesFaltantesCumpleaños(7, 10) //** Cumplo Julio Estamos Octubre = 10 */
// mesesFaltantesCumpleaños(9, 10) //** Cumplo Septiembre Estamos Octubre = 12 */
// mesesFaltantesCumpleaños(11, 10) //** Cumplo Noviembre Estamos Octubre = 1 */
// mesesFaltantesCumpleaños(12, 10) //** Cumplo Diciembre Estamos Octubre = 2 */
// mesesFaltantesCumpleaños(10, 10) //** Cumplo Octubre Estamos Octubre = 0*/
// // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// Functions Calling Other Functions
// function cutFruitPieces(fruit) { //** Funcion que recibe un parametro */
//     return fruit * 4; //** Retornamos la variable por 4 */
//   }
  
//   function fruitProcessor(apples, oranges) { //** Funcion que recibe 2 parametros */
//     const applePieces = cutFruitPieces(apples); //** Variable que recibe parametros */
//     const orangePieces = cutFruitPieces(oranges); 
  
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`; //** Variable String */
//     return juice; //** Regresamos la variable String de arriba */
//   }
//   console.log(fruitProcessor(2, 3)); //** Funcion que manda 2 parametros */
  // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// function pedasosFruta(fruta) { //** Declaramos funcion que recibe un parametro */
//     return fruta * 4 //** Estas son las instrucciones */
// }

// function procesadorFruta(manzanas, naranjas) { //** Declaramos una nueva funcion que recibe 2 parametros */
//     const pedazosManzana = pedasosFruta(manzanas) //** Creamos una constante, ejecuta primera funcion, y recibe parametros de la segunda */
//     const pedazosNaranja = pedasosFruta(naranjas)

//     const jugo = `Jugo con ${pedazosManzana}, pedasos de manzana y ${pedazosNaranja} pedasos de naranja` //** Declaramos una variable */
//     return jugo //** Retornamos la variable creada */
// }

// console.log(procesadorFruta(3, 4)); //** Llamamos la segunda funcion con los parametros de la segunda */
// // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// function pedazosFruta(fruta) {
//     return fruta*4
// }

// const procesadorFruta= (manzanas, naranjas) => {
//     const procesoManzanas = pedazosFruta(manzanas)
//     const procesoNaranjas = pedazosFruta(naranjas)

//     const jugo = `Pedazos de manzanas ${procesoManzanas} Pedazos de naranjas ${procesoNaranjas}`
//     return jugo
// }

// console.log(procesadorFruta(2,3));
// // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// Reviewing Functions
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;
  
//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired 🎉`);
//       return -1;
//     }
// }
  
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));
// // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// const edadActual = (añoNacimiento) => { //** Creo una funcion para saber la edad actual */
//     return 2022 - añoNacimiento
// }

// const añosParaRetiro = (primerNombre, añoNacimiento) => { //** Creo una funcion que recibe parametros */
//     const edad = edadActual(añoNacimiento) //** Creo una variable e invoco la primera funcion */
//     const edadRetiro = 65 - edad //** Creo otra variable para edad de retiro */

//     if(edadRetiro > 0) { //** Sentencia condicional */
//         console.log(`${primerNombre}; edad ${edad} años y para 65 faltan ${edadRetiro} años`);
//         return edadRetiro
//     } else {
//         console.log(`${primerNombre}, edad ${edad} años y hace ${edadRetiro} años tenias 65 años`);
//         return edadRetiro
//     }
// }

// console.log(añosParaRetiro('Francisco', 1987)); //** Invoco la funcion con parametros */
// // console.log(añosParaRetiro('Papa', 1950));

// //** Operacion para sacar los puntos finles */
// const calcularPuntos = (p1, p2, p3) => {
//     return ((p1+p2+p3)/3)
// }

// const delfines1 = calcularPuntos(44, 23, 71)
// const koalas1 = calcularPuntos(65, 54, 49)

// console.log(delfines1);
// console.log(koalas1);


// const revisarGanador = (delfines1, koalas1) => {

//     const equipoDelfines = delfines1*2
//     const equipoKoalas = koalas1*2

//     if(delfines1 > equipoKoalas) {
//         console.log(`Ganaron los Delfines ${delfines1}`);
//         return koalas1
//     } else if (koalas1 > equipoDelfines) {
//         console.log(`Ganaron los Koalas ${koalas1}`);
//         return koalas1
//     } else {
//         console.log(`No se alcanzaron los puntos minimos ${delfines1} vs ${koalas1}`);
//         return 0
//     }
// }

// console.log(revisarGanador(delfines1, koalas1));

// const delfines2 = calcularPuntos(85, 54, 41)
// const koalas2 = calcularPuntos(23, 34, 49)

// console.log(delfines1);
// console.log(koalas1);


// const revisarGanador = (delfines1, koalas1) => {

//     const equipoDelfines = delfines1*2
//     const equipoKoalas = koalas1*2

//     if(delfines1 > equipoKoalas) {
//         console.log(`Ganaron los Delfines ${delfines1}`);
//         return koalas1
//     } else if (koalas1 > equipoDelfines) {
//         console.log(`Ganaron los Koalas ${koalas1}`);
//         return koalas1
//     } else {
//         console.log(`No se alcanzaron los puntos minimos ${delfines1} vs ${koalas1}`);
//         return 0
//     }
// }

// console.log(revisarGanador(delfines1, koalas1));

// // // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// const calcAverage = (p1,p2,p3) => (p1+p2+p3)/3 //** Creo una funcion que sigue instruccuines */

// const checkWinner = (avgd, avgk) => { //** Realizo la funcion para confirmar al ganador */
//     if (avgd >= (avgk * 2)) {
//         console.log(`del wins ${avgd} vs ${avgk} lose koa`);
//     } else if ((avgd * 2) <= avgk) {
//         console.log(`koa win ${avgk} vs ${avgd} lose del`);
//     } else if (avgd == avgk) {
//         console.log(`No win anyone = ${avgk} vs ${avgd}`);
//     } else {
//         console.log(`No minumum points`);
//     }
// }

// //** Creo nuevas variables donde se reciban los argumentos, pero pudiendolas mutar */
// let dg = calcAverage(44,23,71) //** 56 */ 
// let kg = calcAverage(65,54,49) //** 46 */

// console.log("#1");
// checkWinner(dg, kg) //** Invoco la funcion con parametros establecidos */

// //** Como esta en let, puedo reasignarlas e invoco la funcion */
// dg = calcAverage(85,54,41) //** 60 */
// kg = calcAverage(23,34,27) //** 28 */
// console.log("#2");
// checkWinner(dg, kg)

// //** Otra llamada a la funcion */
// dg = calcAverage(85,54,91) //** 76 */
// kg = calcAverage(85,54,91) //** 76 */
// console.log("#3");
// checkWinner(dg, kg)

// //** Otra llamada a la funcion */
// dg = calcAverage(1,54,41) //** 20 */
// kg = calcAverage(1,34,27) //** 32 */
// console.log("#4");
// checkWinner(dg, kg)

// // // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// const friend1 = "Michael" //** Declaramos variables */
// const friend2 = "Steven"
// const friend3 = "Peter"

// const friends = ["Michael", "Steven", "Peter"] //** Voy a crear un nuevo array */
// console.log(friends); //** Mostramos en consola */

// const years = new Array(1991, 1984, 2008, 2020) //** Simplemente implementamos otro nuevo Array, diferente manera */

// console.log(friends[2]); //** Invocamos una posicion del array friends */

// console.log(friends.length); //** Asi vemos el tamaño del arreglo */

// console.log(friends[friends.length -1]); //** Asi vemos el ultimo elemento del arreglo */

// friends[2] = 'Jay' //** Reasignamos el elemento de friends en el arreglo 3 */

// friends[3] = 'xD' //** Creamos un nuevo elemento */

// console.log(friends); 

// const firstName = 'Frank' //** Creo solo una nueva variable */
// const jonas = [firstName, 'Duran', 2022 - 1990, 'dev', friends] //** Creo un arreglo con infomacion */

// console.log(jonas);
// console.log(jonas.length); //** Para ver el tamaño del arreglo */

// // // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

//** Excercise */
//** Quiero crear un array, que a traves de una funcion me diga la edad de cada uno de los elementos */

// const calcAge = (birthYear) => {
//   return 2022 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018]

// console.log(calcAge(years[0])); //** Muestro en consola el primer elemento del arreglo */

// const age1 = calcAge(years[1]); //** Creo en nuevas variables cada edad */
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[3]);
// const age4 = calcAge(years[4]);

// console.log(age1, age2, age3, age4); //** Muestro en consola las edades */

// const ageLast = calcAge(years[years.length -1]) //** Asi podemos ver el ultimo elemento utilizando hack en array */
// console.log(ageLast); //** Ultima edad en consola */

// const ages = [calcAge(years[0]), calcAge(years[years.length -1])] //** SAco primera edad y ultima */
// console.log(ages); //** Muestro en consola las edades */

// // // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

//** ... */
// const friends = ["a", "b", "c"] //** Arreglo con esos elementos */
// friends.push("d") //** Con el metodo push metemos un elemento */

// console.log(`Mostramos el arreglo`);
// console.log(friends); //** Mostramos el arreglo*/

// //** ... */
// const newLength = friends.push("e") //** Con el metodo push metemos un elemento al final */

// console.log(`Mostramos tamaño del arreglo con nuevo elemento`);
// console.log(newLength); //** Tamaño del arreglo */

// //** ... */
// friends.unshift('f') //** Metemos variable al inicio del Arreglo */

// console.log(`Metemos elemento en el primer arreglo`);
// console.log(friends);

// //** ... */
// friends.pop(friends) //** Elimino el ultimo elemento del array "e" */
// friends.pop(friends) //** Elimino el ultimo elemento del array "d" */

// console.log(`Muestro el arreglo menos los ultimos 2 elementos`);
// console.log(friends);

// //** ... */

// const popMethod = friends.pop() //** Creo una funcion para utilizar elemento arreglo mediante pop */

// console.log(`Elemento a eliminar`);
// console.log(popMethod); //** Muestro cual sera el elemento del arreglo que se eliminara */
// console.log(`Muestro el nuevo arreglo`);
// console.log(friends); //** Consola el arreglo friends */

// //** ... */

// friends.shift() //** Elimina el primer elemento del array */

// console.log(`Elimino el primer elemento del array "f"`);
// console.log(friends);

// //** ... */
// console.log(`Busco un arreglo en el array`);
// console.log(friends.indexOf('b')) //** Me dice en que posicion esta ese arreglo */

// console.log(`Si no esta muestro -1`);
// console.log(friends.indexOf('x')) //** Me dice en que posicion esta ese arreglo */

// //** ... */
// console.log(friends.includes("a")) //** Para saber si esta incluido retorno booleano */
// console.log(friends.includes("xD")) 

// //** ... */
// friends.push(00)

// console.log(`Metimos elemento al arreglo; Comparacion restrictiva`);
// console.log(friends.includes('00')); //** Comparacion Retrictiva */

// console.log(`Muestro el nuevo arreglo`);
// console.log(friends);

// //** ... */
// console.log(`Utilizacion del metodo includes`);
// if (friends.includes('p')) { //** Utilizacion del metodo includes */
//     console.log(`Tenemos elemento p`);
// } else {
//     console.log(`No tenemos el elemento`);
// }

// // // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// const frank = { //** Primero declaramos el objeto */
//   primerNombre: 'Francisco', //** Le damos atributos */
//   ultimoNombre: 'Duran',
//   anoNacimiento: 1987,
//   job: 'Developer',
//   friend: ['Javier', 'Luis', 'Marcos'],
//   licenciaManejo: true,

//   // calcularEdad: function(anoNacimiento) { //** Inicializo una funcion por si la necesito */
//       //     return 2022 - anoNacimiento
//   // }

//   // calcularEdad: function() {
//       //     // console.log(this);
//   //     return 2022 - this.anoNacimiento
//   // }

//   calcularEdad: function() { //** Con esta funcion consigo la edad */
//       this.edad = 2022 - this.anoNacimiento
//       return this.edad
//   }
// }

// console.log(frank.calcularEdad()); //** Mando llamar la funcion para ver la edad de frank */

// console.log(frank.edad); //** Ya le meti el atributo edad y puedo acceder a el */
// // console.log(frank['calcularEdad'](1987));
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// const usuario = { //** Otro objeto */
//   pN: `Ana`,
//   uN: `Lope`,
//   aN: 1990,
//   pT: `Abogada`,
//   mA: [`Tania`, `Monica`, `Alejandra`],
//   lM: false,
  
//   conseguirEdad: function(){ //** Funcion para calcular edad */
//       this.edad = 2022 - this.aN
//       return this.edad
//   },

  
// //** Ana es una mujer de 32 años y es Abogada y no tiene licencia de manejo */
//   conseguirInformacion: function(){ //** Simple funcion que me retorna en consola lo que queria */
//       return `${this.pN} es una mujer de ${this.conseguirEdad()} años y es ${this.pT} y ${this.lM ? 'tiene' : 'no tiene'} licencia de manejo`
//   }
// }

// console.log(usuario.conseguirInformacion()); //** Invoco la funcion */

// const usuario2 = { //** Otro objeto */
//   pN: `Ana`,
//   uN: `Lope`,
//   aN: 1990,
//   pT: `Abogada`,
//   mA: [`Tania`, `Monica`, `Alejandra`],
//   lM: false,
// }

// //** Vamos a encargarnos de hacernos expertos en conseguir arreglos bien diseñados */

// const jonas = { //** Primero creo un objeto */
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   getAge: function() { //** Realizo la funcion que necesito */
//       this.age = 2022 - this.birthYear
//       return this.age //** Que retorne lo que necesito */
//   },

//   getSummary: function() { //** Creo una nueva funcion */
//       //** Retorne lo que necesito */
//       return `${this.firstName} is a ${this.getAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? 'has a' : 'does not have'} driver's license`
//   }
// }
// // console.log(jonas.getAge()); //** Confirmo que la edad este bien */

// //** Challenge "Jonas is a 31-year old teacher, and he has a driver's license" */
// console.log(jonas.getSummary()); //** Se muestra en consola ese mensaje */

// // // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

/* 
    Declaramos dos objetos con estas caracteristicas

    mark
    Mark Miller
    Peso 78 Kg
    Altra 1.69 m
    BMI=27.3

    john
    John Smith
    Peso 92 Kg
    Altura 1.95 m
    BMI=24.2

    Ambos objetos les asignamos el nombre a una funcion luego la inicializamos sin llamar a nada luego le damos instrucciones
    con un nuevo this utilizamos esta instruccion (pintarron y retornmos la inicializacion de la funcion)

    creamos un if simple y listo ahi mismo invocamos la funcion
*/

// const mark = {
//   fullName: 'Mark Miller',
//   peso: 78,
//   altura: 1.69,
//   calcBMI: function() {
//       this.imc = this.peso / (this.altura * this.altura)
//       return this.imc
//   }
// }

// const john = {
//   fullName: 'John Smith',
//   peso: 92,
//   altura: 1.95,
//   calcBMI: function() {
//       this.imc = this.peso / (this.altura * this.altura)
//       return this.imc
//   }
// }

// if(mark.calcBMI() > john.calcBMI()) {
//   console.log(`Pesa mas Mark`);
// } else {
//   console.log(`Pesa mas John`);
// }

// // // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

/* 
    Declaramos dos objetos con estas caracteristicas

    mark
    Mark Miller
    Peso 78 Kg
    Altra 1.69 m
    BMI=27.3

    john
    John Smith
    Peso 92 Kg
    Altura 1.95 m
    BMI=24.2

    Ambos objetos les asignamos el nombre a una funcion luego la inicializamos sin llamar a nada luego le damos instrucciones
    con un nuevo this utilizamos esta instruccion (pintarron y retornmos la inicializacion de la funcion)

    creamos un if simple y listo ahi mismo invocamos la funcion
*/

// const mark = { //** Declaramos los objetos */
//   fullName: 'Mark Miller',
//   peso: 78,
//   altura: 1.69,
//   calcBMI: function() { //** Dentro del objeto le asignamos un metodo con una funcion */
//       this.imc = this.peso / (this.altura * this.altura) //** Utilizo el this para tomar las variables del objeto */
//       return this.imc //** Retorno el nombre de inicio de la funcion */ 
//   }
// }

// const john = {
//   fullName: 'John Smith',
//   peso: 92,
//   altura: 1.95,
//   calcBMI: function() {
//       this.imc = this.peso / (this.altura * this.altura)
//       return this.imc
//   }
// }

// if(mark.calcBMI() > john.calcBMI()) { //** Creo la condicional */
//   console.log(`Pesa mas ${mark.fullName} con un IMC = ${mark.imc.toFixed(2)} y ${john.fullName} con un IMC = ${john.imc.toFixed(2)} pesa menos`);
// } else {
//   console.log(`Pesa mas ${john.fullName} con un IMC = ${john.imc.toFixed(2)} y ${mark.fullName} con un IMC = ${mark.imc.toFixed(2)} pesa menos`);
// }

// // // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

//** Loop Exercise */

// for(let rep=1; rep <= 100; rep++) {
//   console.log(`Rep # ${rep}`);
// }

// // // // // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

//** Lopp Array */ 2022-12-13

// const persona = [ //** Arreglo */
//     'Pepe',
//     'Lopez',
//     2022-1990,
//     'Mesero',
//     ['Carlos', 'Luis', 'Edgar'],
//     true
// ]
// const tipos = [] //** Arreglo vacio, que puede contener lo que quiera */

// for(let i=0; i<persona.length; i++){ //** Para ver cada posicion del arreglo */
//     //** Valores de cada posicion, muestra el tipo de elemento en cada posicion del arreglo */
//     console.log(persona[i], typeof persona[i]);

//     // tipos[i] = typeof persona[i] //** Del arreglo persona muestrame de cada posicion su tipo */
//     tipos.push(typeof persona[i]) //** Voy a ingresar un nuevo elemento al arreglo (no agrege nada) */
// }

// console.log(tipos); //** Muestro en consola que tipo de elemento es cada posicion */
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// const anios = [1980, 1985, 1987, 1990, 1995, 2000, 2010, 2020] //** Creo un nuevo arreglo */
// const edades = [] //** Inicializo un arreglo vacio */

// for(let i=0; i<anios.length; i++){ //** Loop que lee el arreglo anios */
//     edades.push(2022 - anios[i]) //** Dentro del arreglo edades agrego los anios (de la operacion) */
// }

// console.log(edades); //** Muestro en consola las edades actuales */
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// for(let i=0; i < persona.length; i++){ //** Un loop */
//     //** Condicional, del arreglo persona, muestrame todos lo que no sean diferentes al tipo string recoriendo el arreglo total */
//     if(typeof persona[i] !== 'string') continue

//     console.log(persona[i], typeof persona[i]); //** Muestro en consola las variables del arreglo  */
// }

// for(let i=0; i<persona.length; i++){ //** Loop */
//     //** Condicional que deja de continuar cuando detecta un tipo numero en el arreglo */
//     if(typeof persona[i] === 'number') break

//     console.log(persona[i], typeof persona[i]); //** Muestro en consola las variables del arreglo hasta que se rompen con un numero */
// }
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// //** Crea un array con varios parametros y dentro mas mas arreglos */
// //** Creamos un for, que se inicialize con el length-1 y pare hasta el 0, y menos */
// //** Mostramos en consola el nombre del arreglo dentro la variabe del loop */
// //** Crea un loop dentro de otro loop */

// const persona = [ //** Defino un objeto con propiedades */
//     nombre = 'Pepe',
//     apellido = 'Jimenez',
//     puesto = 'Gerente',
//     Empleados = ['Carlos', 'Ernesto', 'Manuel'],
//     Salario = 10000,
//     activo = true
// ]

// for(let i = persona.length -1; i >= 0; i--) { //** Loop que itera desde el final hasta el inicio */
//     console.log(i, persona[i]);
//     console.log(typeof persona[i]); //** Muestro el tipo de prpiedad del arreglo */
// }

// for(let j = 0; j <= 5; j++) { //** Creo un array */
//     console.log(`Numero de vuelta ${j}`);

//     for(let k = 0; k <= 5; k++) { //** Pongo otro array dentro del aray */
//         console.log(`Vuelta ${j} - Repeticion ${k}`);
//     }
// }
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

// //** LOOP */
// for (let i = 1; i <= 10; i++) { //** Creamos un loop */
//     console.log(`LOOP: Numero de iteracion ${i}`);
// }

// //** WHILE */
// let i = 1 //** Inicializamos la variable con un numero */
// while( i <= 10) { //** Creamos la condicion */
//     console.log(`WHILE: Numero de iteracion ${i}`); //** Mostramos en consola */
//     i++ //** Lo que se hace despues de mostrar en consola */
// }

// //** WHILE */
// //** Inicializamos la creacion de un numero aleatorio, que sea un integer y que pueda llegar al 6 */
// let numAleatorio = Math.trunc(Math.random() * 6) + 1

// while (numAleatorio !== 6) { //** Creamos un ciclo, mientras numAleatorio sea diferente a 6 */
//     console.log(`Numero aleatorio numero ${numAleatorio}`); //** Mostramos en consola el numAleatorio que salio */
//     numAleatorio = Math.trunc(Math.random() * 6) + 1 //** Instruccion a seguir mientras sea diferente a 6, lo debemos de incializar antes */
//     if(numAleatorio === 6) console.log(`Se consiguio el numero 6`); //** Condicional cuando llega al 6 */
// }
// //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */