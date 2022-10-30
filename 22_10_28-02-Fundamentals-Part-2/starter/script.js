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

