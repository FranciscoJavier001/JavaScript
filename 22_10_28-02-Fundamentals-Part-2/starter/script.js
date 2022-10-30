'use strict' //** Nos apoyamos del uso estricto para codificar mejor */
//**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

//** Funciones */
function logger() { //** Inicializo una funcion */
    console.log(`My name is Francisco`); //** Mostrar en consola este mensaje */
}

logger(); //** Mando llamar la funcion */
//**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

function procesadorFrutas(manzanas, naranjas) { //** Funcion que recibe 2 parametros */
    const jugo = `Jugo con ${manzanas} manzanas y ${naranjas} naranjas` //** Variable que contiene un string */
    return jugo //** Muestra la variable que acabo de crear */
}

const jugoManzana = procesadorFrutas(5, 0) //** Variable que recibe la funcion de arriba recibiendo variables */
console.log(jugoManzana); //** Muestro la variable de arriba */
//**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

const jugoManzanaNaranja = procesadorFrutas(2, 4) //** Creo una variable que recibe la funcion con estos parametros dentro */
console.log(jugoManzanaNaranja); //** Muestro la variable en consola */
//**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

const num = Number(23) //** Creacion de una variable con el valor de un numero */