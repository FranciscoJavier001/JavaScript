"use strict";

//* Seleccion de elementos */
const jugador0 = document.querySelector(".jugador-0"); //* Selecciono <> por su clase */
const jugador1 = document.querySelector(".jugador-1"); //* Selecciono <> por su clase */

jugador0.classList.remove(".jugador-ganador"); //* Cuando el Juego Empiece, les quitamos estas clases */
jugador1.classList.remove(".jugador-ganador"); //* Cuando el Juego Empiece, les quitamos estas clases */
