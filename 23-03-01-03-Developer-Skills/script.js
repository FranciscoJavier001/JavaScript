//* Crear un arreglo de numeros, que puedas mostrar su temperatura minima y maxima y su rango de temperaturas */

//* Como se Programa */

const arregloTemp = [-10, 5, 10, 'error']; //* Primero debemos de crear un arreglo de numeros */

const calculoTemperaturas = (temperaturas) => {
  //* En este caso debo de crar una funcion que reciba un parametro */
  let min = temperaturas[0]; //* Debo de crear una variable que reciba un parametro del arreglo, en alguna posicion */
  let max = temperaturas[0];

  for (i = 0; i < temperaturas.length; i++) {
    //* Creo un ciclo que va a recorrer todo el arreglo creado */
    const tempActual = temperaturas[i]; //* La tempActual esta en alguna variable de temperaturas */

    if (tempActual < min) min = tempActual; //* Asigno temperatura minima y maxima */
    if (tempActual > max) max = tempActual;
  }
  console.log(min, max); //* Muestro en consola sus variables minimas y maximas */
  return max - min; //* Retorno el rango de temperaturas */
};
console.log(calculoTemperaturas(arregloTemp)); //* En consola invoco la funcion recibiendo un parametro */
