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
const labelSumIn = document.querySelector(".summary__value--in"); //* La seleccionamos con TextContent para mostrar en el DOM */
const labelSumOut = document.querySelector(".summary__value--out"); //* La seleccionamos con TextContent para mostrar en el DOM */
const labelSumInterest = document.querySelector(".summary__value--interest"); //* La seleccionamos con TextContent para mostrar en el DOM */
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements"); //* Declaro esta variable, que va a ser donde aterrizan los cambios html */

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
  //* Declaro una variable, que recibe esto de las variables declaras, lo que recibe es una de sus propiedades */
  containerMovements.innerHTML = ""; //* Contenedor de movimientos, donde estan los las transacciones */
  // textContent = 0
  movements.forEach((mov, i) => {
    //* Propiedad recibida, que recibe 2 argumentos de cada iteracion */
    const type = mov > 0 ? "deposit" : "withdrawal"; //* Defino una variable, si el mov es mayor a 0 deposito y menor retiro  */
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `; //* Estructura HTML, primero van los colores, luego contador de operacion, luego si es deposito o retiro */

    containerMovements.insertAdjacentHTML("afterbegin", html); //* Para agregar contenido dinamico, donde aterrizan los cambios */
  });
};

displayMovements(account1.movements); //* Esta funcion, recibe una propiedad y muestra sus movimientos */

// console.log(containerMovements.innerHTML); //* Mostramos en consola su estructira html */

const calcDisplayMovements = (movements) => {
  //* Funcion que recibe un argumento */
  const balance = movements.reduce((acc, mov) => {
    //* Funcionque que viene del argumento superior, le paso un metodo y recibe argumentos */
    return acc + mov; //* Retorno el acumulador y valor actual */
  }, 0); //* Lo inicializo en 0 */
  labelBalance.textContent = `${balance} EUR`; //* En el Dom, le agrego esto al HTtml */
};
calcDisplayMovements(account1.movements); //* Llamo la funcion, recibe un arreglo y le paso la este metodo */

const calcDisplaySummary = (movements) => {
  //* Funcion que recibe un argumento */
  const incomes = movements //* Variable que pasa metodos a un argumento */
    .filter((mov) => mov > 0) //* Pasamos Metodo a argumento, donde se recibe un argumento y donde el argumento sea mayor a 0 */
    .reduce((acc, mov) => acc + mov, 0); //* Pasamos otro metodo, donde el acumulador y la iteracion, se suman e inicializo en 0 */
  labelSumIn.textContent = `${incomes}€`; //* En el DOM mostramos este elemento */

  const out = movements //* Variable que pasa metodos a un argumento */
    .filter((mov) => mov < 0) //* Le paso estos metodos, para filtrar los menores a 0 */
    .reduce((acc, mov) => acc + mov, 0); //* Metodo, para hacer la suma, e inicializo en 0 */
  labelSumOut.textContent = `${Math.abs(out)}€`; //* Mostramos este elemento en el DOM pero con valor positivo absoluto */

  const interest = movements //* Variable y un argumento al que le vamos a pasar metodos */
    .filter((mov) => mov > 0) //* Metodo para filrar los movimientos mayores a 0 */
    .map((deposit) => (deposit * 1.2) / 100) //* Nuevo arreglo, con un argumento, donde el argumento lo multiplico y luego lo divido */
    .filter((int, i, arr) => {
      //* Metodo donde solo vamos a dar el total, que recibe argumentos */
      // console.log(arr); //* Muestro en consola el arreglo */
      return int >= 1; //* Retorno, cuando el interes sea mayor o igual a 1 */
    })
    .reduce((acc, int) => acc + int, 0); //* Metodo donde vamos a sumar un numero individual, e inicializa en 0 */
  labelSumInterest.textContent = `${Math.abs(interest)}€`; //* Mostramos este elemento en el DOM pero con valor positivo absoluto */
};

calcDisplaySummary(account1.movements); //* Inicializamos la funcion, en esta variable y le pasamos este argumento */

const createUsernames = (accs) => {
  //* Defino una variable, que recibe un argumento */
  accs.forEach((acc) => {
    //* Del argumento recibido, para cada uno de ellos, va a recibir un argumento */
    acc.username = acc.owner //* Este argumento tiene una propiedad y esta argumento recibe de esta propiedad */
      .toLowerCase() //* Estp se va a poner en minusculas */
      .split(" ") //* Se va a separar en cada espacio */
      .map((name) => name[0]) //* Se mapea, se recibe un argumento, y se retorna ese argumento en suposicion 0 del arreglo */
      .join(""); //* Se van a unir sin espacio */
  });
};

createUsernames(accounts); //* Esta funcion va a recibir este argumento anteriormente definido */
// console.log(accounts); //* Muestro en consola ese argumento definido */

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; //* Un arreglo */

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

// const checkDogs = (dogsJulia, dogsKate) => {
//   //* Defino una funcion que recibe 2 parametros */
//   const dogsJuliaCorrected = dogsJulia.slice(); //* Defino una variable que sera un nuevo array, conservando el original  */
//   dogsJuliaCorrected.splice(0, 1); //* Nuevo arreglo donde elimino el elemento 1 del array */
//   // console.log(dogsJuliaCorrected);
//   dogsJuliaCorrected.splice(-2); //* Nuevo arreglo donde elimino los ultimos 2 */
//   // console.log(dogsJuliaCorrected);
//   // dogsJulia(1,3)
//   const dogs = dogsJuliaCorrected.concat(dogsKate); //* Voy a juntar los 2 arreglos en 1 solo */
//   // console.log(dogs);

//   dogs.forEach((dog, i) => {
//     //* Para cada elemento del array y aparte voy a iterar */
//     if (dog >= 3) {
//       //* Si el perro es mayor o igual a 3 años */
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`); //* El numero de perro es un perro de x años y es adulto */
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`); //* Pero el numero de perro es menor a 3 entonces es un cachorro */
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]); //* Estos simplemente son los arreglos que recibe la funcion checkDogs */
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const eurToUsd = 1.1; //* Le asigno el valor a una variable */

// const movementsUSD = movements.map((mov) => mov * eurToUsd); //* Variable, mapeo el arreglo que recibe variable y retorna operacion */
// console.log(movements); //* Estos son los movimientos */
// console.log(movementsUSD); //* Aqui estan con una operacion artiemtica */

// const movementsUSDfor = []; //* Defino un arreglo vacio */
// movements.forEach((mov) => movementsUSDfor.push(mov * eurToUsd)); //* Para cada iteracion, a este arreglo añado resultado de operacion */
// console.log(movementsUSDfor); //* Muestro nuevo arreglo en consola */

// const movementsDescriptions = movements.map(
//   //* Voy a crear un nuevo arreglo mapeado */
//   (
//     mov,
//     i //* Va a recibir 2 propiedades */
//   ) =>
//     `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
//       //* Iterador e if, con valores absolutos */
//       mov
//     )}`
// );

// console.log(movementsDescriptions); //* Descripcion de movimientos */

// const deposits = movements.filter((mov) => {
//   //* Funcion, viene de movements(definida) la vamos a filtrar y vamos a recibir un argumento */
//   return mov > 0; //* Vamos a retornar los movimientos mayores a 0 */
// });

// const depositsFor = []; //* Defino un arreglo vacio */
// movements.forEach((mov) => {
//   //* Para cada iteracion de esta variable */
//   if (mov > 0) depositsFor.push(mov); //* Si el movimiento es mayor a 0, agregar a este arreglo cada uno de los movimientos */
// });
// console.log(depositsFor); //* Muestro el arreglo positivo */

// const withdrawals = movements.filter((mov) => {
//   //* Funcion que viene de movements, lo filtramos, recibimos un argumento */
//   return mov < 0; //* Retornamos los movimientos menores a 0 */
// });

// console.log(movements); //* Mostramos todos los movimientos */
// console.log(deposits); //* Mostramos los depositos */
// console.log(withdrawals); //* Mostramos los retiros */

// console.log(movements); //* Muestro en consola esta variable */

// const balance = movements.reduce((acc, cur, i) => {
//   //* Funcion, que utiliza esta variable, metodo acumular valor array, primero acumulador valor actual e iterador */
//   console.log(`Iteration ${i}: ${acc}`); //* Consola, el numero de iteracion y el valor acumulado */
//   return acc + cur; //* Retornamos la suma del valor actual y la suma */
// }, 0); //* Iniciamos el inicializador en 0 */

// console.log(balance); //* Mostramos el valor, pero no supe como sumar ultimo valor*/

// let sum = 0; //* Inicializo una variable */
// movements.forEach((cur, i) => {
//   //* De esta variable, para cada iteracion, voy a poner 2 variables, valor actual e iteracion */
//   sum = sum + cur; //* Operacion aritmetica a la variable sum */
//   console.log(`Iteration ${i + 1}: ${sum}`); //* Muestro en consola, para cada iteracion */
// });

// let balance2 = 0; //* inicializo una variable en 0 */
// movements.forEach((mov) => {
//   //* Para cada movimiento, recibo un argumento */
//   return (balance2 += mov); //* Voy a retornar una operacion aritmetica */
// });
// console.log(balance2); //* Muestro en consola, el total del arreglo */

// const max = movements.reduce((acc, mov) => {
//   //* Defino variable, de un arreglo, recibo 2 argumentos */
//   if (acc > mov)
//     return acc; //* Si acumulador es mayor que el movimiento retorno el acumulador */
//   else return mov; //* Si ya no hay mayor, entonces retorno el mov */
// }, movements); //* De donde inicio el arreglo */

// console.log(max); //* Muestro el mayor valor */

// const calcAverageHumanAge = (ages) => {
//   //* Funcion que recibe un argumento */
//   //* Variable mapea argumento con condicional, por ley de signos primero multiplicacion luego sumar */
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter((age) => age >= 18); //* Variable, filtro edades solo edades mayores de 18 */
//   console.log(humanAges); //* Muestro en conosla edades de todos con operacion aritmetica */
//   console.log(adults); //* Muestro edades solo de personas mayores de 18 años */

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.legth

//   const average = adults.reduce(
//     //* Voy a darle un solo valor al arreglo */
//     (acc, age, i, arr) => acc + age / arr.length, //* Argumentos que recibe, acumulador, edad a sumar y divion entre los que hay */
//     0 //* Inicio en 0 */
//   );

//   // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//   return average; //* Al final del argumento, retorno esta variable */
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); //* El arreglo que le paso a una funcion */
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2); //* Muestro en consola el resultado */

// const eurToUsd = 1.1; //* Definimos una variable que sea una operacion aritmetica */
// // console.log(movements); //* Mostramos los movimientos en consola */

// const totalDepositUSD = movements //* Funcion que reciba argumento */
//   .filter((mov) => mov > 0) //* Filtramos el arreglo (se crea una nuevo), donde solo sumemos las cantidades mayor a 0 */
//   .map((mov, i, arr) => {
//     //* Mapeamos un arreglo donde recibamos estos argumentos */
//     // console.log(arr); //* Mostramos en consola los argumentos mayores a 0 */
//     return mov * eurToUsd; //* Retornamos el resultado de la suma de esto x 1.1 */
//   })
//   // .map((mov) => mov * eurToUsd) //* Se mapea un arreglo, donde hagamos la operacion aritmetica de intereses */
//   .reduce((acc, mov) => acc + mov, 0); //* Vamos a recibir el total del acumulado y movimientos, donde se inicie el valor en 0 */
// // console.log(totalDepositUSD); //* Mostramos en consola el total de depositados en euros */

// const calcAverageHumanAge = (ages) => {
//   //* Defino una funcion que recibe un argumento */
//   return ages //* Voy a retornar el argumento (obligado cuando uso asi el metodo) */
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4)) //* Mapeo el argumento y que siga esta condicional */
//     .filter((age) => age >= 18) //* Filtro el argumento y le pongo condicional */
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0); //* Resultado unico, del argumento, con operacion aritmetica */
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); //* Variable que recibe la funcion y un arreglo */
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); //* Variable que recibe la funcion y un arreglo */
// console.log(avg1, avg2); //* Muestro en consola la respuesta */
