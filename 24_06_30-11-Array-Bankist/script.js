"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = (movements) => {
  containerMovements.innerHTML = "";
  // textContent = 0
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"]; //* Inicializo un array */

// console.log(arr.slice(2)); //* Metodo Slice me muestra un inicio y hasta el final(opcional) */
// console.log(arr.slice(2, 4)); //* Aqui le pongo un inicio y un final */
// console.log(arr.slice(-2)); //* Asi muestro los ultimos elementos del array */
// console.log(arr.slice(-1)); //* Asi muestro el ultimo elemento del array */
// console.log(arr.slice(1, -2)); //* Muestro posicion 2 (real) y posicion -3 (real) */
// console.log(arr.slice()); //* Muestro todo el arreglo */
// console.log([...arr]); //* Muestro todo el arreglo */

// console.log(arr.splice()); //* Este metodo elimina elementos */
// console.log(arr.splice(2)); //* Elimino los primeros 2 elementos */
// console.log(arr.splice(-1)); //* Solo dejo el elemento 2 real */

// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse()); //* Mostramos el arreglo pero del ultimo elemento al primero */
// console.log(arr2); //* Este metodo muta el arreglo */

// const letters = arr.concat(arr2); //* Se unen 2 array */
// console.log(letters); //* Mostramos en consola el array completo de los 2 el arr y arr2 */
// console.log([...arr, ...arr2]); //* Mismo resultado */

// console.log(letters.join(" - ")); //* El arreglo, pero ya esta mutado y lo separo con - */

// const movements = [200, 450, -400, 3000, -650, -130.1, 70, 1300]; //* Un arreglo */

// for (const movement of movements) {
//   //* Defino un nuevo arreglo que tenga una variable de variables */
//   if (movement > 0) {
//     //* Si el movimiento es mayor a 0 */
//     console.log(`You deposited ${movement}`); //* Mostrar esto en consola, con el movimiento individual */
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`); //* Metodo JS para conseguir el numero absoluto, sin el signo de - */
//   }
// }

// console.log("---");

// for (const [i, movement] of movements.entries()) {
//   //* Creo un index para cada movimiento y e itero cada una de ellas con entries */
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log("---");

// movements.forEach((movement) => {
//   //* Para cada movimiento */
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// console.log("---");

// movements.forEach((mov, i) => {
//   //* Para cadamovimiento creo una iteracion */
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// const currencies = new Map([
//   //* Un nuevo arreglo mapeado (nuevo) que contiene 2 valores */
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach((value, key) => {
//   //* Para cada uno de los elementos consigue estos 2 valores, (reasigne nombres) */
//   console.log(`${key}: ${value}`); //* Muestra en consola los valores que se solicitan */
// });

// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR"]); //* Defino un nuevo arreglo que no se repita nada */
// console.log(currenciesUnique); //* Muestro el set del arreglo en consola */
// currenciesUnique.forEach((value, key) => {
//   //* Para cada arreglo, muestrame estas 2 variables, van a ser iguales */
//   console.log(`${key}: ${value}`); //* Muestro en consola los valores identicos separador por : */
// });
