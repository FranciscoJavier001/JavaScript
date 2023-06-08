"use strict";

//* Seleccion de elementos */
const jugador0 = document.querySelector(".jugador-0"); //* Selecciono <> por su clase */
const jugador1 = document.querySelector(".jugador-1"); //* Selecciono <> por su clase */
const puntos0 = document.querySelector("#puntos-0"); //* Selecciono <> por su id */
const puntos1 = document.querySelector("#puntos-1"); //* Selecciono <> por su id */
const puntosActuales0 = document.querySelector("#actual-0"); //* Selecciono <> por su id */
const puntosActuales1 = document.querySelector("#actual-1"); //* Selecciono <> por su id */

let puntos, puntosActuales; //* Empiezo a definir las variables para iniciar la funcion */

const init = () => {
  //* Funcion que no recibe nada, pero se ejecuta cuando se le indica */
  puntos = [0, 0]; //* Inicializo lo puntos en 0 */
  puntosActuales = 0; //* inicializo esta variable en 0 */

  puntos0.textContent = 0; //* Se muestra esto en el DOM */
  puntos1.textContent = 0; /* Se muestra esto en el DOM */
  puntosActuales0.textContent = 0; /* Se muestra esto en el DOM */
  puntosActuales1.textContent = 0; /* Se muestra esto en el DOM */
};
init(); //* Ejecuto la funcion para confirmar lo que hace */

jugador0.classList.remove(".jugador-ganador"); //* Cuando el Juego Empiece, les quitamos estas clases */
jugador1.classList.remove(".jugador-ganador"); //* Cuando el Juego Empiece, les quitamos estas clases */
