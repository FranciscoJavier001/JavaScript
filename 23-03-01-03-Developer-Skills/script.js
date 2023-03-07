//* Defino un arreglo con numeros y un error */

//* Realizo una funcion, que reciba un parametro */
//* Defino una variable maxima y una minima que reciban el parametro en su posicion 0 */

//* Ciclo for, que inicializa la variable en 0, recorre todo el arreglo del paramtro recibido, sube una posicion */
//* Defino un variable con la temperatura actual que inicie en la primer posicion del arreglo */

//* Si el tipo de temperatura actual es diferente a un numero, solo continua */

//* Condicional si temperatura actual es mayor a maxima, que defina maxima como temperatura actual */
//* Condicional si temperatura actual es menor a minima, que defina minima como temperatura actual */

//* Mostrar por consola temperatura maxima y minima */
//* Retornar la variable maxima menos minima que sera el rango de temperaturas

//* Llamamos a la funcion de temperaturas recibiendo el array, por consola */

//* Defino una nueva variable que llame una funcion con el array */
//* Muestro en consola la variable definida */

const array = [-10, -5, -1, 0, 2, 4, 6, 8, 10, 12, 'error'];

const calcularTemperaturas = (arregloTemperaturas) => {
  let min = arregloTemperaturas[0];
  let max = arregloTemperaturas[0];

  for (i = 0; i < arregloTemperaturas.length; i++) {
    const temperaturaActual = arregloTemperaturas[i]; //* Lo tenia en 0 y era en i */

    if (typeof temperaturaActual !== 'number') continue; //* Tenia la variable arregloTemperaturas y no temperaturaActual */

    if (temperaturaActual < min) min = temperaturaActual;
    if (temperaturaActual > max) max = temperaturaActual;
  }
  console.log(
    `La temperatura minima es ${min} y la temperatura maxima es de ${max}`
  );
  return `El rango de temperatura es de ${max - min} grados`;
};

console.log(calcularTemperaturas(array));
