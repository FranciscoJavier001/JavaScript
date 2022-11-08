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

//** xD */