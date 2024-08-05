"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
//* Arreglos */
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

const accounts = [account1, account2, account3, account4]; //* Un Arreglo que contiene los arreglos */

// Elements
const labelWelcome = document.querySelector(".welcome"); //* Etiqueta de bienvenida */
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in"); //* La seleccionamos con TextContent para mostrar en el DOM */
const labelSumOut = document.querySelector(".summary__value--out"); //* La seleccionamos con TextContent para mostrar en el DOM */
const labelSumInterest = document.querySelector(".summary__value--interest"); //* La seleccionamos con TextContent para mostrar en el DOM */
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements"); //* Declaro esta variable, que va a ser donde aterrizan los cambios html */

const btnLogin = document.querySelector(".login__btn"); //* Lo seleccionamos para darle funcion */
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user"); //* El valor del username */
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = (movements, sort = false) => {
  //* Funcion, que recibe un argumento y otro argumento pero como falso */
  containerMovements.innerHTML = ""; //* Contenedor de movimientos, donde estan los las transacciones */
  // textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  //* Si la condicion de movs es verdadera, nuevo array igual que el original, pero ordenado, sino pues solo los movimientos */

  movs.forEach((mov, i) => {
    //* Argumento recibido, recibe 2 argumentos por cada iteracion */
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

const calcDisplayBalance = (acc) => {
  //* Funcion que recibe un argumento */
  acc.balance = acc.movements.reduce((acc, mov) => {
    //* Funcionque que viene del argumento superior, le paso un metodo y recibe argumentos */
    return acc + mov; //* Retorno el acumulador y valor actual */
  }, 0); //* Lo inicializo en 0 */
  labelBalance.textContent = `${acc.balance} EUR`; //* En el Dom, le agrego esto al Httml */
};
// calcDisplayBalance(account1.movements); //* Llamo la funcion, recibe un arreglo y le paso la este metodo */

const calcDisplaySummary = (acc) => {
  //* Funcion que recibe un argumento */
  const incomes = acc.movements //* Variable que pasa metodos a un argumento */
    .filter((mov) => mov > 0) //* Pasamos Metodo a argumento, donde se recibe un argumento y donde el argumento sea mayor a 0 */
    .reduce((acc, mov) => acc + mov, 0); //* Pasamos otro metodo, donde el acumulador y la iteracion, se suman e inicializo en 0 */
  labelSumIn.textContent = `${incomes}€`; //* En el DOM mostramos este elemento */

  const out = acc.movements //* Variable que pasa metodos a un argumento */
    .filter((mov) => mov < 0) //* Le paso estos metodos, para filtrar los menores a 0 */
    .reduce((acc, mov) => acc + mov, 0); //* Metodo, para hacer la suma, e inicializo en 0 */
  labelSumOut.textContent = `${Math.abs(out)}€`; //* Mostramos este elemento en el DOM pero con valor positivo absoluto */

  const interest = acc.movements //* Variable y un argumento al que le vamos a pasar metodos */
    .filter((mov) => mov > 0) //* Metodo para filrar los movimientos mayores a 0 */
    .map((deposit) => (deposit * acc.interestRate) / 100) //* Nuevo arreglo, con un argumento, donde el argumento lo multiplico y luego lo divido */
    .filter((int, i, arr) => {
      //* Metodo donde solo vamos a dar el total, que recibe argumentos */
      // console.log(arr); //* Muestro en consola el arreglo */
      return int >= 1; //* Retorno, cuando el interes sea mayor o igual a 1 */
    })
    .reduce((acc, int) => acc + int, 0); //* Metodo donde vamos a sumar un numero individual, e inicializa en 0 */
  labelSumInterest.textContent = `${Math.abs(interest)}€`; //* Mostramos este elemento en el DOM pero con valor positivo absoluto */
};

// calcDisplaySummary(account1.movements); //* Inicializamos la funcion, en esta variable y le pasamos este argumento */

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

createUsernames(accounts); //* Esta funcion va a recibir este argumento */
// console.log(accounts); //* Muestro en consola ese argumento definido */

const updateUI = (acc) => {
  displayMovements(acc.movements); //* Llamo esta funcion, analizo el usuario en el login y veo sus movimentos */

  calcDisplayBalance(acc); //* Llamo esta funcion, analizo el balance */

  calcDisplaySummary(acc); //* Analizo los resultado de abajo de la pantalla */
};

let currentAccount; //* Definimos una variable que puede cambiar */

btnLogin.addEventListener("click", (e) => {
  //* Le damos el evento click a este elemento del dom y su argumento recibido es e para ponerle el preventDefault  */
  e.preventDefault(); //* Prevengo la accion determinada del boton */
  // console.log("Login"); //* Muestro en consola login, si no pongo el preventDefault se desaparece el evento en consola */

  currentAccount = accounts.find(
    //* Funcion, trabaja con un array, le paso un metodo */
    (acc) => acc.username === inputLoginUsername.value //* Recibo argumento, funcion, donde el argumento debe hacer con match con el valor recibido */
  );
  console.log(currentAccount); //* Aqui vemos el arreglo del accounts, el que encontro */

  if (currentAccount?.pin === +inputLoginPin.value) {
    //* Si el pin es igual al numero del pin del usuario */
    // console.log("Match Login"); //* Cuando accedemos ponemos esto en consola */

    labelWelcome.textContent = `Welcome back, ${
      //* Etiqueta donde cambiamos el texto */
      currentAccount.owner.split(" ")[0] //* Nombre, donde solo va el primer nombre */
    }`;
    containerApp.style.opacity = 100; //* Cuando todo concuerda, mostramos el DOM */

    inputLoginUsername.value = inputLoginPin.value = ""; //* Vuelvo a poner los inputs blancos */
    inputLoginPin.blur(); //* Señalo el input */

    updateUI(currentAccount); //* Funcion, que dentro realiza mas funciones en argumentos */
  }
});

btnTransfer.addEventListener("click", (e) => {
  //* Boton que le asignamos funcionalidad */
  e.preventDefault(); //* Para que no se recarge cada que le damos click */

  const amount = +inputTransferAmount.value; //* Defino una variable, que sera igual al valor del input transformado en un numero */
  const receiverAcc = accounts.find(
    //* Funcion que recibe las cuentas y busca en ellas */
    (acc) =>
      acc.username ===
      inputTransferTo.value /* Recibo argumento, funcion, donde el argumento debe hacer con match con el valor recibido */
  );
  console.log(amount, receiverAcc); //* Muestro en consola las 2 variables devlaradas */

  inputTransferAmount.value = inputTransferTo.value = ""; //* Asi borro el input, despues de hacer las transferencias */

  if (
    //* Validacion */
    amount > 0 && //* Si la cantidad es mayor a 0 */
    receiverAcc && //* Y la cuenta que recibe */
    currentAccount.balance >= amount && //* Si el dinero en la cuenta actual es mayor a la cantidad */
    receiverAcc?.username !== currentAccount.username //* Si la cuenta que recibe tiene un usuario es diferente a esa misma cuenta */
  ) {
    console.log("Transfer Valid"); //* Muestro en consola que se realizo la transferencia */
    currentAccount.movements.push(-amount); //* Le descuento a la cantidad el monto transferido */
    receiverAcc.movements.push(amount); //* Le agrego esta nueva variable del arreglo a los movimientos */

    updateUI(currentAccount); //* Ejecuto esta funcion, que tiene funciones */
  }
});

btnLoan.addEventListener("click", (e) => {
  //* Le doy funcionamiento al boton */
  e.preventDefault(); //* Para que solo se recarge cuando haga click */

  const amount = +inputLoanAmount.value; //* Esta variable es el valor que tiene este input transformado a un numero */

  if (
    //* Condicional */
    amount > 0 && //* Si la cantidad */
    currentAccount.movements.some((mov) => mov >= amount * 0.1) //* Si algun movimiento, es mayor o igual por la cantidad total existente autorizar */
  ) {
    currentAccount.movements.push(amount); //* Agrego esto al array, si cumple la condicion pasada */

    updateUI(currentAccount); //* Esta funcion, recibe este valor */
  }
  inputLoanAmount.value = ""; //* Limpio en input */
});

btnClose.addEventListener("click", (e) => {
  //* Le asignamos un funcionamiento a este boton que es una clase */
  e.preventDefault(); //* Para que solo se carge cuando hacemos click */
  // console.log("Delete"); //* Muestro en consola este mensaje */

  if (
    //* Condicional */
    inputCloseUsername.value === currentAccount.username && //* Si este campo, tiene el mismo campo */
    +inputClosePin.value === currentAccount.pin //* Si el numero en el input, pasandolo a numero con su valor es el mismo */
  ) {
    const index = accounts.findIndex(
      //* Cuando queremos encontrar el indice con esta propiedad */
      (acc) => acc.username == currentAccount.username //* Argumento recibido, tiene que ser igual a estos argumentos con propiedades */
    );
    // console.log(index);
    accounts.splice(index, 1); //* Del elemento encontrado en el indice, lo voy a eliminar */

    containerApp.style.opacity = 0; //* Muestro la pagina como si apenas ingresara */
  }
  inputCloseUsername.value = inputClosePin.value = ""; //* Limpio el campo */
});

let sorted = false;
btnSort.addEventListener("click", (e) => {
  //* Le agrego funcion al boton */
  e.preventDefault(); //* Para que solo se active al darle click */
  displayMovements(currentAccount.movements, !sorted);
  //* Llamamos esta funcion, con la cuenta actual y sus movimientos, y sorted que pueda cambiar entre ambos */
  sorted = !sorted; //* Que el valor de esta variable sea lo contrario para poderlo cambiar */
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; //* Un arreglo */

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

// const firstWithdrawal = movements.find((mov) => mov < 0); //* Funcion, de donde viene, metodo, parametro que recibe e instrucciones */

// console.log(movements); //* Muestro en consola los movimientos */
// console.log(firstWithdrawal); //* Muestro en consola el primer retiro */

// console.log(accounts); //* Muestro en consola los arreglos, que son 4 */

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// //* Funcion, de donde viene lo que recibe, metodo, argumento que recibe, variable de argumento igual a */
// console.log(account); //* Muestro el arreglo en consola */

// console.log(movements); //* Muestro en consola los movimientos */
// console.log(movements.includes(-130)); //* Con este metodo, busco que ese numero exista */

// console.log(movements.some((mov) => mov === -130)); //* Muestro en consola esta condicion */
// const anyDeposits = movements.some((mov) => mov > 0); //* Funcion, que busca en esta variable, algun movimiento, que cumpla esta condicion */
// console.log(anyDeposits); //* Muestro en consola true, porque es verdadero */

// console.log(movements.every((mov) => mov > 0)); //* JS Esta loco, este metodo mas */
// console.log(account4.movements.every((mov) => mov > 0)); //* JS Esta loco, este metodo mas */

// console.log("---");

// const deposit = (mov) => mov > 0; //* Funcion con una condicion */
// console.log(movements.some(deposit)); //* Funciona */
// console.log(movements.every(deposit)); //* Metodo a evitar */
// console.log(movements.filter(deposit)); //* Muestra un arreglo con lo verdadero */

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8],
// ]; //* Un arreglo */

// console.log(arr.flat()); //* Muestro el arreglo continuo */

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]; //* Nuevo Arreglo */
// console.log(arrDeep.flat(2)); //* Asi muestro todo el arreglo */

// const accountMovements = accounts.map((acc) => acc.movements); //* Recibo un arreglo, lo mapeo y lo paso como nuevo */
// console.log(accountMovements); //* Muestro en consola ese arreglo */
// const allMovements = accountMovements.flat(); //* Quiero ver todos los elementos de los arreglos */
// console.log(allMovements); //* Muestro en consola todos los movimientos continuos */
// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0); //* Metodo para hacer una suma, recibo argumentos, lo que hago y con que numero inicio */

// const overalBalance1 = accounts.map((acc) =>
//   acc.movements.flat().reduce((acc, mov) => acc + mov, 0)
// ); //* Funcion, mapeo, recibo, a cada arreglo lo hago unico, lo hago arreglo continuo, le doy instruccion aritmetica e inicia en 0 */

// console.log(overalBalance1); //* Muestro en consola el total de cada arreglo */

// const overalBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0); //* Variable, que mapea el arreglo, recibiendo los movimientos, hago el arreglo continuo y recibo el total inicio en 0 */

// console.log(overalBalance); //* Muestro en consola el total */

// const overalBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0); //* Variable, que mapea el arreglo y lo hago continuo y recibo el total inicio en 0 */

// console.log(overalBalance2); //* Muestro en consola el total */

// const owners = ["Jonas", "Zach", "Adam", "Martha"]; //* Un arreglo */
// console.log(owners); //* Consola arreglo desordenado */
// console.log(owners.sort()); //* Arreglo ordenado 0-9,A-Z */

// console.log(movements); //* Arreglo Desordenado */
// console.log(movements.sort()); //* Arreglo ordenado */

// movements.sort((a, b) => {
//   if (a > b) return 1; //* Asi salen ordenados, de menor a mayor en el menor */
//   if (a < b) return -1; //* Asi salen ordenados de mayor a menor en el menor */
// });
// // movements.sort((a, b) => a - b); //* Lo mismo */
// console.log(movements); //* Muestro en consola los movimientos */

// movements.sort((a, b) => {
//   if (a > b) return -1; //* Asi salen ordenados, de menor a mayor en el menor */
//   if (a < b) return 1; //* Asi salen ordenados, de menor a mayor en el menor */
// });
// // movements.sort((a, b) => b - a); //* Lo mismo */
// console.log(movements); //* Muestro en consola los movimientos */

// console.log([1, 2, 3, 4, 5, 6, 7]); //* Defino un arreglo y lo muestro en consola */
// console.log(new Array([1, 2, 3, 4, 5, 6, 7])); //* Creo un nuevo array con estas propiedades */

// const x = new Array(7); //* Creo un nuevo array de 7 posiciones */
// console.log(x); //* Muestro en consola el nuevo array, esta vacio */
// console.log(x.map(() => 5)); //* Se cre un nuevo array con 7 posicones */

// x.fill(1); //* Al array lo llevo con puro 1 */
// console.log(x); //* Muestro en consola el array de puroa 1 */

// const y = Array.from({ length: 7 }, () => 1); //* Funcion, que crea un array de 7 posiciones que recibe puros 1 */
// console.log(y); //* Arreglo que solo muestra 1 */

// const z = Array.from({ length: 7 }, (_, i) => 1 + 1); //* Un array, que recibe 2 argumentos y los suma */
// console.log(z); //* Un arreglo de 7 posiciones con puro 2 */

// labelBalance.addEventListener("click", () => {
//   //* Le agregamos un evento click al boton */
//   const movementsUI = Array.from(
//     //* Definimos una variable, que agarra todos los argumentos */
//     document.querySelectorAll(".movements__value"), //* De esta parte del documento */
//     (el) => Number(el.textContent.replace("€", "")) //* Recibo un argumento, lo hago numero, de donde viene el contenido y lo replazo con esto */
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll(".movements__value")]; //* Variable, que recibe el arreglo de esta parte del documento */
//   console.log(movementsUI2); //* Muestro en consola el array */
// });

// const dogs = [
//   //* Un arreglo con propiedades definidas y dentro otro arreglo */
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];
// console.log(dogs); //* Muestro en consola el arreglo */

// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// //* Variable en cada elemento, recibe elemento, al elemento le paso variable y recibe metodo, variable recibida de una propiedad y operacion aritmetica */

// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah")); //* Funcion del arreglo metodo de argumento recibido, argumento recibido definido, metodo definido */
// console.log(dogSarah); //* Muestro en consola la variable */
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? "much" : "little" //* Comparo 2 variables de diferentes arreglos, el primero verdadero, otro falso */
//   }`
// );

// const ownersEatTooMuch = dogs //* Funcion que trabaja con array, le paso metodo que filtre el arreglo y hago una comparacion */
//   .filter((dog) => dog.curFood > dog.recFood)
//   .flatMap((dog) => dog.owners); //* Metodo que aplana el arreglo para cada elemento del array y me dice el nombre del perro y dueño(s) */

// console.log(ownersEatTooMuch); //* Muestro en consola el resultado de la condicion y dueños */

// console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
// // console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too little`);

// console.log(dogs.some((dog) => dog.curFood === dog.recFood)); //* Coindicion si algun perro recive la misma comida que la comida recomendada */

// const checkEatingOkay = (
//   dog //* Funcion que recibe un argumento */
// ) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1; //* Si la comida del perro es mayor a la comida recomendada operacion aritmetica y si es menor operacion aritmetica */

// console.log(dogs.some(checkEatingOkay)); //* Esta condicion es verdadera */

// console.log(dogs.filter(checkEatingOkay)); //* Filtra a los que estan comiendo bien */

// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood); //* Recorto una seccion del arreglo, de una posicion a otra y luego lo ordeno de a-z,0-9 */
// console.log(dogsSorted); //* Muestro en consola el ultimo arreglo */

console.log(23 === 23.0); //* Son Iguales */

console.log(0.1 + 0.2); //* Se suma xD */

console.log(Number("23")); //* Combierto este string en numero */
console.log(+"23"); //* Asi me ahorro el Number */

console.log(Number.parseInt("30xD")); //* Lo hago un numero */
console.log(Number.parseInt("e30")); //* No es un numero */

console.log(Number.parseInt(2.5)); //* Lo hago un entero */
console.log(Number.parseFloat("2.5rem")); //* Lo muestro como esta, pero sin el texto */

console.log(Number.isNaN(20)); //* Falso porque es un numero */
console.log(Number.isNaN("20")); //* Falso porque es un numero */
console.log(Number.isNaN(+"20x")); //* Verdadero porque no es un numero */
console.log(Number.isNaN(23 / 0)); //* Falso porque es un numero */

console.log(Number.isFinite(20)); //* Es Finito */
console.log(Number.isFinite("20")); //* Es Infinito */
console.log(Number.isFinite(+"20x")); //* Es Infinito */
console.log(Number.isFinite(23 / 0)); //* Es Infinito */
