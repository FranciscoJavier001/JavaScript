'use strict'; //* Usamos el uso Estricto en JS */

console.log(document.querySelector('.message')); //* Mostramos el objeto de la clase message */
console.log(document.querySelector('.message').textContent); //* Mostramos una propiedad del objeto de la clase message */

document.querySelector('.message').textContent = 'Numero Correcto'; //* Asi cambie lo que dice la clase message */

document.querySelector('.number').textContent = 13; //* Cambie el valor de la clase number */
document.querySelector('.score').textContent = 10; //* Cambie el valor de la clase score */

document.querySelector('.guess').value = 13; //* Asi le asigno un valor */
console.log(document.querySelector('.guess').value); //* Este valor no tengo nada, por eso no muestro nada en consola */
