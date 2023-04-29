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
  console.log(numeroSecreto); //* Muestro en consola el numero secreto */
});

document.querySelector(".btnRevisa").addEventListener("click", function () {
  //* Etiqueta boton en su clase le pongo un evento click y que realice una funcion */
  const adivinanza = Number(document.querySelector(".adivinanza").value); //* Veo el numero que esta en la etiqueta input de adivinanza */

  console.log(adivinanza, typeof adivinanza); //* Muestro el numero del input, y su tipo */

  if (!adivinanza) {
    //* Cuando el numero en el input de adivinanza sea incorrecto */
  } else if (adivinanza === numeroSecreto) {
    //* Pero cuando sean iguales ambos numeros */
    document.querySelector(".mensaje").textContent = "Numero Correcto"; //* Etiqueta Parrafo, se modifica el comentario, donde dice Comienza. */
    document.querySelector(".numero").textContent = adivinanza; //* Se Coloca el numero secreto en el Div en la clase numero */
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".numero").style.width = "30rem"; //* Le cambio el tamaño cuando adivino el numero */
  }
});
