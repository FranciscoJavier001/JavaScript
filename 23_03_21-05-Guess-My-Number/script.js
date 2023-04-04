'use strict'; //* Usamos el uso Estricto en JS */

// console.log(document.querySelector('.message')); //* Mostramos el objeto de la clase message */
// console.log(document.querySelector('.message').textContent); //* Mostramos una propiedad del objeto de la clase message */

// document.querySelector('.message').textContent = 'Numero Correcto'; //* Asi cambie lo que dice la clase message */

// document.querySelector('.number').textContent = 13; //* Cambie el valor de la clase number */
// document.querySelector('.score').textContent = 10; //* Cambie el valor de la clase score */

// document.querySelector('.guess').value = 13; //* Asi le asigno un valor */
// console.log(document.querySelector('.guess').value); //* Este valor no tengo nada, por eso no muestro nada en consola */

// const x = () => {
//   //* Creo una funcion llamada x */
//   console.log(23); //* Que muestra el numero 23 en consola */
// };

const number = Math.floor(Math.random() * 20); //* Solamente guardo una variable creada aleatoreamente como una constante y crea un numero hasta el 20*/
document.querySelector('.number').textContent = number; //* div/.number va a cambiar texto por variable number */

document.querySelector('.check').addEventListener('click', function () {
  //* A la clase check, le agrego el evento click que dispara esta funcion */
  const guess = Number(document.querySelector('.guess').value); //* Creo una variable, que sea un numero en la clase check y veo su valor */

  console.log(guess, typeof guess); //* Por consola muestro el numero de la clase guess y su tipo */

  if (!guess) {
    //* Si el numero guess es diferente */
    document.querySelector('.message').textContent = '⛔️ Numero Incorrecto'; //* Reasigno un comentario en clase message en el DOM con nuevo mensaje */
  }
});

console.log(number); //* Muestro en consola el numero creado */
