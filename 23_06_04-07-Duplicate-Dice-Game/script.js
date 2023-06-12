"use strict";

//* Seleccion de elementos */
const jugador0 = document.querySelector(".jugador-0"); //* Selecciono <> por su clase */
const jugador1 = document.querySelector(".jugador-1"); //* Selecciono <> por su clase */
const puntos0 = document.querySelector("#puntos-0"); //* Selecciono <> por su id */
const puntos1 = document.querySelector("#puntos-1"); //* Selecciono <> por su id */
const puntosActuales0 = document.querySelector("#actual-0"); //* Selecciono <> por su id */
const puntosActuales1 = document.querySelector("#actual-1"); //* Selecciono <> por su id */

const dado = document.querySelector(".dado"); //* Selecciono <> por su clase */

const btnNuevo = document.querySelector(".btn-nuevo"); //* Selecciono <> por su clase */
const btnTirar = document.querySelector(".btn-juega"); //* Selecciono <> por su clase */
const btnQuedarse = document.querySelector(".btn-quedarse"); //* Selecciono <> por su clase */

let puntos, puntosActuales, jugadorActivo, jugando; //* Defino variables para las funciones */

const init = () => {
  //* Funcion que no recibe nada, pero se ejecuta cuando se le indica */
  puntos = [0, 0]; //* Inicializo lo puntos en 0 */
  puntosActuales = 0; //* inicializo esta variable en 0 */
  jugadorActivo = 0; //* Defino esta variable en 0 */
  jugando = true; //* Esta variable es solo un valor booleano */

  puntos0.textContent = 0; //* Se muestra esto en el DOM */
  puntos1.textContent = 0; /* Se muestra esto en el DOM */
  puntosActuales0.textContent = 0; /* Se muestra esto en el DOM */
  puntosActuales1.textContent = 0; /* Se muestra esto en el DOM */

  dado.classList.add("oculto"); //* Oculto el dado, agregando una clase a un elemento en el DOM */

  jugador0.classList.remove("jugador-ganador"); //* Remuevo esta Clase de cada variable y la puedo reactivar */
  jugador1.classList.remove("jugador-ganador"); //* Remuevo esta Clase de cada variable y la puedo reactivar */
  jugador0.classList.add("jugador-activo"); //* Agrego esta clase a la variable. DOM y CSS */
  jugador1.classList.remove("jugador-activo"); //* Remuevo esta Clase y la puedo reactivar */
};
init(); //* Ejecuto la funcion para confirmar lo que hace */
