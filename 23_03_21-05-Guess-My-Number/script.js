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

document.querySelector('.check').addEventListener('click', function () {
  //* <button/.check, le agrego el evento click que dispara esta funcion */
  const guess = Number(document.querySelector('.guess').value); //* Variable que es el numero recibido en <input/.guess y veo su valor */

  console.log(guess, typeof guess); //* Muestro el numero guess y su tipo en consola si disparo el boton Revisa */

  //* Creamos un estado inicial, que no va a cambiar, recomiendo el mismo que en HTML, luego ya ponemos los cambios de estado */
  if (!guess) {
    //* Cuando !gues sea diferente a un numero */
    document.querySelector('.message').textContent = 'Comienza a Adivinar...'; //* Muestro otro mensaje en el DOM */
  } else if (guess == secretNumber) {
    //* Si el numero guess es igual al numero secreto */
    document.querySelector('.message').textContent = '✅ Numero Correcto'; //* Reasigno mensaje en <p/.message */
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Muy alto';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Muy bajo';
  }
});

console.log(secretNumber); //* Muestro en consola el numeroSecreto nuevo creado */
