"use strict";

//* Seleccion de elementos */
const jugador0 = document.querySelector(".jugador-0"); //* Selecciono <> por su clase */
const jugador1 = document.querySelector(".jugador-1"); //* Selecciono <> por su clase */
const puntos0 = document.querySelector("#puntos-0"); //* Selecciono <> por su id */
const puntos1 = document.querySelector("#puntos-1"); //* Selecciono <> por su id */

let puntos, puntosActuales; //* Empiezo a definir las variables para iniciar la funcion */

jugador0.classList.remove(".jugador-ganador"); //* Cuando el Juego Empiece, les quitamos estas clases */
jugador1.classList.remove(".jugador-ganador"); //* Cuando el Juego Empiece, les quitamos estas clases */
