"use strict";

//* Seleccion de Elementos */
const player0El = document.querySelector(".player--0"); //* Asignacion de Elemento en el DOM en Etiqueta Section */
const player1El = document.querySelector(".player--1"); //* Asignacion de Elemento en el DOM en Etiqueta Section */
const score0El = document.querySelector("#score--0"); //* Asignacion de Elemento en el DOM en Etiqueta P */
const score1El = document.querySelector("#score--1"); //* Asignacion de Elemento en el DOM en Etiqueta P */
const current0El = document.querySelector("#current--0"); //* Asignacion de Elemento en el DOM en Etiqueta P */
const current1El = document.querySelector("#current--1"); //* Asignacion de Elemento en el DOM en Etiqueta P */

const diceEl = document.querySelector(".dice"); //* Asignacion de una clase a una etiqueta img */

const btnNew = document.querySelector(".btn--new"); //* Asignacion de una clase a una etiqueta Button */
const btnRoll = document.querySelector("btn--roll"); //* Asignacion de una clase a una etiqueta Button */
const btnHold = document.querySelector(".btn--hold"); //* Asignacion de una clase a una etiqueta Button */

let scores, currentScore, activePlayer, playing; //* Defino nuevas variables que pueden cambiar */

//* Condiciones Iniciales */
const init = () => {
  //* Esta es una funcion de flecha anonima porque no recibe nada */
  scores = [0, 0]; //* Le asigno un valor a este Arreglo */
  currentScore = 0; //* Inicializo esta variable en 0 */
  activePlayer = 0; //* Inicializo esta variable en 0 */
  playing = true; //* La inicializo con un valor booleano */

  score0El.textContent = 0; //* Establezco en el la etiqueta el numero 0 */
  score1El.textContent = 0; //* Establezco en el la etiqueta el numero 0 */

  current0El.textContent = 0; //* Establezco en el la etiqueta el numero 0 */
  current1El.textContent = 0; //* Establezco en el la etiqueta el numero 0 */

  diceEl.classList.remove("hidden"); //* Etiqueta Img, le agrege una nueva clase */

  player0El.classList.remove("player--winner"); //* Creo nueva clase, asignativa al ganador etiqueta Section */
  player1El.classList.remove("player--winner"); //* Creo nueva clase, asignativa al ganador etiqueta Section */

  player0El.classList.add("player--active"); //* Añado nueva clase al Jugador Activo */
  player1El.classList.remove("player--active"); //* Remuevo la clase del jugador Activo */
};
init(); //* Inicializo la funcion para confirmar que todo funcione */

const switchPlayer = () => {
  //* Funcion flecha anonima */
  document.getElementById(`current--${activePlayer}`).textContent = 0; //* Id de <div> que va puntaje abajo, cuadro rosa */
  currentScore = 0; //* Esto es el valor que debe de tener el valor actual */

  activePlayer = activePlayer === 0 ? 1 : 0; //* Jugador activo tienen 0, cambialo 1, sino dejalo en 0 */

  player1El.classList.toggle("player--active"); //* Cambio de turno del jugadoe 0 */
  player0El.classList.toggle("player--active"); //* Cambio de turno al jugador 1 */
};
// switchPlayer(); //* Invoco la funcion para comprobar funcionamiento */
