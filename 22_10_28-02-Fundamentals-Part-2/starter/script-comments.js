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