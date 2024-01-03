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

    const agregarFlecha = (a, b) => a + b; //* Funcion de Flecha */
    console.log(agregarFlecha(10, 20)); //* Muestro en conola la funcion de flecha con sus parametros */

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

console.log("Nuevos Datos"); //* Volvemos a JS */
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"); //* Espacio */

function calcularEdadDos(anoNacimientoDos) {
  //* Defino una funcion que recibe un parametro */
  const edadDos = 2024 - anoNacimientoDos; //* Defino una variable que sea una operacion artimetica */
  console.log(primerNombreDos); //* Muestro en consola una variable que aun no defino */
  return edadDos; //* Regreso la variable para que no salga undefine */
}

const primerNombreDos = "Francisco"; //* Defino una variable global que se ejecuta en la linea 55 */
console.log(calcularEdadDos(1987)); //* Ejecuto la funcion recibiendo un parametro */

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"); //* Espacio */

//*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  */

function calcularEdadTres(anoNacimientoTres) {
  //* Defino una funcion que recibe un parametro */
  const edadTres = 2024 - anoNacimientoTres; //* Defino una variable que sea una operacion artimetica */

  function imprimirEdadTres() {
    //* Defino una funcion que no recibe nada */
    const salidaTres = `${primerNombreDos}, Tu edad es ${edadTres}, naciste en ${anoNacimientoTres}`; //* Defino una variable que sea un mensaje */
    console.log(salidaTres); //* Muestro en consola la variable de L72 */
  }

  imprimirEdadTres(); //* Invoco la funcion anteriormente creada */
  return edadTres; //* Lo que se va a regresar cuando invoque la funcion */
}

console.log(calcularEdadTres(1987)); //* Ejecuto la funcion recibiendo un parametro */

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"); //* Espacio */

//*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  *///*  */

function calcularEdadCuatro(anoNacimientoCuatro) {
  //* Defino una funcion que recibe un parametro */
  const edadCuatro = 2024 - anoNacimientoCuatro; //* Defino una variable que sea una operacion artimetica */

  function imprimirEdadCuatro() {
    //* Defino una funcion que no recibe nada */
    const salidaCuatro = `${primerNombreDos}, Tu edad es ${edadCuatro}, naciste en ${anoNacimientoCuatro}`; //* Defino una variable que sea un mensaje */
    console.log(salidaCuatro); //* Muestro en consola la variable de L92 */

    if (anoNacimientoCuatro >= 1981 && anoNacimientoCuatro <= 1999) {
      const stringCuatro = `Eres un Millenial, ${primerNombreDos}`;
      console.log(stringCuatro);
    }
  }

  imprimirEdadCuatro(); //* Invoco la funcion anteriormente creada */
  return edadCuatro; //* Lo que se va a regresar cuando invoque la funcion */
}

console.log(calcularEdadCuatro(1987)); //* Ejecuto la funcion recibiendo un parametro */
