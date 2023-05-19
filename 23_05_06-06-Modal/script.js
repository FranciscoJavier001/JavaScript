"use strict";

const modal = document.querySelector(".modal"); //* La variable modal, va a ser la clase modal del documento html */
const superposicion = document.querySelector(".superposicion"); //* Le asigno esta clase del html a una variable */
const btnCerrarModal = document.querySelector(".cerrar-modal"); //* Llamo a esta clase del html, personalizada en CSS */
const btnsMostrarModal = document.querySelectorAll(".mostrar-modal"); //* Asigno una variable a todas las clases del html */
const reinicioDOM = document.querySelector(".reinicio"); //* Tomo control del DOM para reiniciarlo */

console.log(btnsMostrarModal); //* Mostramos en consola los Modales */

for (let i = 0; i < btnsMostrarModal.length; i++) {
  //* Recorro el arreglo de btnsMostrarModal con un for */
  btnsMostrarModal[i].addEventListener("click", function () {
    //* A cada boton, con el evento click, lanzo funcion anonima que muestre en consola Click */
    console.log("Click en Modal");
    modal.classList.remove("oculto"); //* De esta manera remuevo esa clase y se va a mostrar */
    superposicion.classList.remove("oculto"); //* Entonces tambien le removemos la clase  */
  });
}
