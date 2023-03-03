// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* "Hacer un arreglo de temperaturas, calcula la amplitus de temperaturas, tambien hay que mantener uno que diga error y muestre max y min" */

// Enternder el problema
// Cual es la amplitus de temperatura, la diferencia entre la mas alta y baja temperatura
// Como calculo la maxima y minima temperatura
// Que hace el mensaje de error

// Subdividirlos en multiples problemas
// Como ignorar los errores
// Encontrar la temperatura maxima en el arreglo
// Encontrar la temperatura minima en el arreglos
// Substraer el minimo y el maximo y retornarlo

//*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  */

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const amplitudTemperaturas = (temperaturas) => {
//   let max = temperaturas[0];
//   let min = temperaturas[0];

//   for (let i = 0; i < temperaturas.length; i++) {
//     const temperaturaActual = temperaturas[i];
//     if (typeof temperaturaActual !== 'number') continue;

//     if (temperaturaActual > max) max = temperaturaActual;
//     if (temperaturaActual < min) min = temperaturaActual;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const ampplitud = amplitudTemperaturas(temperatures);
// console.log(ampplitud);

//*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  */

//* Defino un arreglo */
//* Defino una funcion que reciba una variable */
//* Ingreso un valor minimo/max en el array de variable recibida */
//* Ciclo que empieza en 0, recorre todo el arreglo recibido y aumenta contador */
//* Variable que almacene la temperatura actual del arreglo recibido en una posicion */
//* Si el tipo de temperatura actual es diferente a un numero solo continua */
//* Si el tipo de la temperatura actual es mayor a max, entonces max es igual a la temperatura actual (inversa) */
//* Llamamos por consola el maximo y minimo */
//* Los retornamos */
