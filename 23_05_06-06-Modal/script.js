"use strict";

const modal = document.querySelector(".modal"); //* La variable modal, va a ser la clase modal del documento html */
const superposicion = document.querySelector(".superposicion"); //* Le asigno esta clase del html a una variable */
const btnCerrarModal = document.querySelector(".cerrar-modal"); //* Llamo a esta clase del html, personalizada en CSS */
const btnsMostrarModal = document.querySelectorAll(".mostrar-modal"); //* Asigno una variable a todas las clases del html */

const abrirModal = () => {
  modal.classList.remove("oculto"); //* De esta manera remuevo esa clase y se va a mostrar */
  superposicion.classList.remove("oculto"); //* Entonces tambien le removemos la clase  */
};
for (let i = 0; i < btnsMostrarModal.length; i++) {
  //* Recorro el arreglo de btnsMostrarModal con un for */
  btnsMostrarModal[i].addEventListener("click", abrirModal); //* Cada ve que damos click en el Modal, evocamos la funcion */

  const cerrarModal = () => {
    //* Nueva variable, funcion de flecha que sigue instrucciones */
    modal.classList.add("oculto"); //* A la variable modal le volvemos a agregamos la clase oculto z-index */
    superposicion.classList.add("oculto"); //* Variable superposicion le volvemos a agregamos la clase oculto z-index */
  };

  btnCerrarModal.addEventListener("click", cerrarModal); //* Variable que esta en el DOM, le damos un evento y una funcion */
  superposicion.addEventListener("click", cerrarModal); //* Variable que esta en el DOM, le damos un evento y una funcion */
}
