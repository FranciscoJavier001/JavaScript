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

// control+cmd+<space> = emoji
// -cualquierLetraInicialMayuscula y me da un color

const secretNumber = Math.floor(Math.random() * 21); //* Variable que me da un numero del 0 al 20 */
// document.querySelector('.number').textContent = secretNumber; //* <div/.number va a cambiar texto por una variable */

let score = 20; //* Valor inicial del score */

document.querySelector('.check').addEventListener('click', function () {
  //* <button/.check, le agrego el evento click que dispara esta funcion */
  const guess = Number(document.querySelector('.guess').value); //* Variable que es el numero recibido en <input/.guess y veo su valor */

  console.log(guess, typeof guess); //* Muestro el numero guess y su tipo en consola si disparo el boton Revisa */

  if (!guess) {
    //* Cuando guess sea diferente */
  } else if (guess === secretNumber) {
    //* Cuando guess y el secretNumber sean iguales */
    document.querySelector('.message').textContent = '✅ Numero Correcto'; //* Muestra este mensaje en esta clase */
  } else if (guess > secretNumber) {
    //* Cuando guess sea mayor a secretNumber */
    document.querySelector('.message').textContent = '📈 Muy alto'; //* Muestra este mensaje en esta clase */
    score--; //* Disminuye el valor del score */
    document.querySelector('.score').textContent = score; //* Muestra este mensaje en esta clase */
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Muy bajo'; //* Muestra este mensaje en esta clase */
    score--; //* Disminuye el valor del score */
    document.querySelector('.score').textContent = score; //* Muestra este mensaje en esta clase */

    if (score < 1) {
      //* Cuando score sea 0 */
      document.querySelector('.score').textContent = 'Perdiste'; //* Muestra este mensaje en esta clase */
    }
  }
});

console.log(secretNumber); //* Muestro en consola el numeroSecreto nuevo creado */
