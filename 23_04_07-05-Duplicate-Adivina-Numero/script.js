"use strict"; //* Forzamos el uso estrictor de JS */

let numeroSecreto = Math.floor(Math.random() * 21); //* Solicito un numero entero que este entre el 0 y el 20 */
let puntaje = 20; //* Inicializamos el puntaje, importante definirlo aqui afuera */
let puntajeMasAlto = 0; //* Inicializamos el puntaje, importante definirlo aqui afuera */

document.querySelector(".btnReinicio").addEventListener("click", function () {
  //* En el DOM, seleccionamos una clase de una etiqueta button, le asignamos una accion click y que realice una funcion boton Reinicio */
  puntaje = 20; //* Le asignamos un puntaje estatico */

  numeroSecreto = Math.floor(Math.random() * 21); //* Reasigno un nuevo numero Secreto del 0 al 20 */
  document.querySelector(".numero").textContent = "?"; //* Cambiamos el texto por un ? */
  document.querySelector(".mensaje").textContent = "Comienza a Adivinar..."; //* Cambiamos el mensaje */
  document.querySelector("body").style.backgroundColor = "#222"; //* Le pongo un color negro a todo el body */
  document.querySelector(".puntaje").textContent = puntaje; //* Voy a volver a colocar el puntaje en 20 */
  document.querySelector(".numero").style.width = "15rem"; //* Le cambio el tamaño que tenia desde el inicio asignado */
  document.querySelector(".adivinanza").value = ""; //* Dejamos el numero de la adivinanza en blanco */
});
