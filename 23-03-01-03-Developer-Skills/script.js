//* Crear un arreglo de numeros, que puedas mostrar su temperatura minima y maxima y su rango de temperaturas */

//* Como se Programa */

// const arregloTemp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]; //* Primero debemos de crear un arreglo de numeros */

const calculoTemperaturas = (t1, t2) => {
  //* En este caso debo de crar una funcion que reciba dos parametro */

  const temps = t1.concat(t2); //* Junto los 2 arrays en 1 solo */
  console.log(temps); //* Muestro el arreglo nuevo completo */

  let min = temps[0]; //* Debo de crear una variable que reciba un parametro del arreglo, en alguna posicion */
  let max = temps[0];

  for (i = 0; i < temps.length; i++) {
    //* Creo un ciclo que va a recorrer todo el arreglo creado */
    const tempActual = temps[i]; //* La tempActual esta en alguna variable de temperaturas */

    if (typeof tempActual !== 'number') continue; //* Reviso si la temperatura actual es diferente a un numero */

    if (tempActual < min) min = tempActual; //* Asigno temperatura minima y maxima */
    if (tempActual > max) max = tempActual;
  }
  console.log(min, max); //* Muestro en consola sus variables minimas y maximas */
  return max - min; //* Retorno el rango de temperaturas */
};

// console.log(calculoTemperaturas(arregloTemp)); //* En consola invoco la funcion recibiendo un parametro */
console.log(calculoTemperaturas([-11, 19, 34], [-9, 40, 'error'])); //* Nuevas variables que recibe la funcion */
