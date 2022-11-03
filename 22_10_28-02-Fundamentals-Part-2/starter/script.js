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

//** Declara una funcion que te diga cuantas horas le quedan al dia */
const horasRestantes = horas => 24 - horas
const horaActual = horasRestantes(18)
console.log(`De este dia quedan ${horaActual} horas`);
// // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

//** Meses para tu cumpleaños */
//** Crea una variable donde ingreses el mes de tu cumpleaños */
//** Otra donde tengamos el mes actual */
//** Si el cumpleaños es mayor a los meses que faltan entonces pon el mes que le falta con una resta */
//** Pero si el mes es menor  */
const mesesFaltantes = meses => 12 - meses

const mesActual = mesesFaltantes(11)
console.log(`Para terminar el año faltan ${mesActual} meses`);
//** Completar */
// // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1980, 'Bob'));
// // //**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

//** Vamos a calcular los meses que faltan para tu cumpleaños */
const mesesFaltantesCumpleaños = (mesCumpleaños, mesActual) => {
    if(mesCumpleaños < mesActual) {
        const mesesFaltantes = (13 - mesActual + mesCumpleaños)
        console.log(`mesCumpleaños < mesActual = Para tu Cumpleaños Faltan ${mesesFaltantes}`)
    } else if (mesCumpleaños > mesActual) {
        const mesesFaltantes = (mesCumpleaños - mesActual)
        console.log(`mesCumpleaños > mesActual = Para tu Cumpleaños Faltan ${mesesFaltantes}`)
    } else {
        console.log(`mesCumpleaños = mesActual = Cumples Años este Mes`)
    }
}
//** Pruebas */
mesesFaltantesCumpleaños(1, 10) //** Cumplo Enero Estamos Octubre = 4 */
mesesFaltantesCumpleaños(3, 10) //** Cumplo Marzo Estamos Octubre = 6 */
mesesFaltantesCumpleaños(7, 10) //** Cumplo Julio Estamos Octubre = 10 */
mesesFaltantesCumpleaños(9, 10) //** Cumplo Septiembre Estamos Octubre = 12 */
mesesFaltantesCumpleaños(11, 10) //** Cumplo Noviembre Estamos Octubre = 1 */
mesesFaltantesCumpleaños(12, 10) //** Cumplo Diciembre Estamos Octubre = 2 */
mesesFaltantesCumpleaños(10, 10) //** Cumplo Octubre Estamos Octubre = 0*/
