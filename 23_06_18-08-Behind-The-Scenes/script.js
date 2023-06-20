"use strict";

//* Alcance */

const calcularEdad = (añoNacimiento) => {
  //* Creo una funcion que recibe un parametro */
  const edad = 2023 - añoNacimiento; //* Creo una variable que es una operacion aritmetica */

  const imprimirEdad = () => {
    //* Realizo una funcion, que no solicita nada */
    let salidaConsola = `${primerNombre}, tu edad es de ${edad}, y naciste en ${añoNacimiento}`; //* Una variable, que reciba parametros */
    console.log(salidaConsola); //* Muestro en consola el mensaje de esa variable */

    if (añoNacimiento >= 1981 && añoNacimiento <= 1996) {
      //* Condicion para esta funcion, como es cierta se lee */
      var millenial = true; //* Tu que puedas cambiar, por ser un valor booleano */

      const primerNombre = "Francisco"; //* Defino Primer Nombre, bajo el if */
      salidaConsola = "Nueva Salida"; //* Defino un nuevo mensaje de esta variable */

      const stringText = `Oh, tu eres un Millenial ${primerNombre}`; //* Variable, con un mensaje y variable aqui definida */
      console.log(stringText); //* Hasta aqui llega el alcance de la variable */

      const agregar = (a, b) => {
        //* Nueva Funcion que recibe parametros para funcionar */
        return a + b; //* Es lo que me retornan */
      };
      console.log(agregar(2, 3)); //* Mando llamar esta funcion y le paso parametros */
    }

    console.log(millenial); //* Hasta aqui llega esta variable */
    console.log(salidaConsola); //* Hasta aqui llega esta variable */
    console.log(edad); //* Hasta aqui llega esta variable */
  };
  imprimirEdad(); //* Mando llamar la funcion, para confirmar que sirva */
};

const primerNombre = "Jaime"; //* Esta es una variable Global */
calcularEdad(1987); //* Funcion Global, parametro necesario*/

document.querySelector(".botonEnviar").addEventListener("click", () => {
  //* Etiqueta boton en su clase le pongo un evento click y que realice una funcion */
  const inputSection = String(document.querySelector(".input-section").value); //* Veo el numero que esta en la etiqueta input de adivinanza */

  console.log(inputSection, typeof inputSection); //* Muestro el numero del input, y su tipo */
  document.getElementById("p-section").innerHTML = inputSection; //* Asi puedo meterle info directamente al DOM */
});
