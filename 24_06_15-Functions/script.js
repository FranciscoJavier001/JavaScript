"use strict";

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", 1000);
// createBooking("LH123", undefined, 1000);

// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24123123098,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "Lh999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 24123123098) {
//     console.log("Check In");
//   } else {
//     console.log("Wrong Passport");
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   //* Defino variable que reciba el parametro str */
//   return str.replace(/ /g, "").toLowerCase(); //* Regresa el parametro, pero seleccionamos los espacios y los eliminamos en minusculas */
// };

// const upperFirstWord = function (str) {
//   //* Defino variable, que reciba un parametro */
//   const [first, ...others] = str.split(" "); //* Desestructuro un arreglo, que sea igual al parametro str, pero 2 partes */
//   return [first.toUpperCase(), ...others].join(" "); //* Retorno la primera frase en mayusculas, y luego junto lo demas pero con un espacio */
// };

// const transformer = function (str, fn) {
//   //* Defino una variable que recibe 2 parametros, el fn es nuevo */
//   console.log(`Original string ${str}`); //* Muestro en consola el string original */
//   console.log(`Transformed string ${fn(str)}`); //* Muestro en consola, invoco la funcion fn y veo el string cambiado */

//   console.log(`Transformed by: ${fn.name}`); //* Muestro en consola la funcion que realizo el cambio y su nombre */
// };

// transformer("JavaScript is the best!", upperFirstWord); //* Invoco la funcion y le paso esta variable (funcion) */
// transformer("JavaScript is the best!", oneWord); //* Invoco la funcion y le paso esta variable (funcion) */

// const high5 = function () {
//   //* Declaro esta variable que invoca una funcion */
//   console.log("👋🏻"); //* Muestro en consola la manita como string */
// };
// document.body.addEventListener("click", high5); //* Al precionarle en cualquier parte del body invoco la funcion, al hacer click */

// ["Jonas", "Martha", "Adam", "x"].forEach(high5); //* Para cada uno de los parametros invoco la funcion */

// const greet = function (greeting) {
//   //* Defino variable que recibe el parametro de una funcion */
//   return function (name) {
//     //* Retorno un parametro */
//     console.log(`${greeting} ${name}`); //* Muestro en consola el parametro que recibe greet y el parametro que retorno  */
//   };
// };

// //* Misma funcion pero como funcion de flecha */
// const greet = (greeting) => {
//   //* Defino una variable que reciba un parametro */
//   return (name) => {
//     //* Lo que va a regresar */
//     console.log(`${greeting} ${name}`); //* Lo que muestro en consola */
//   };
// };

// const greeterHey = greet("Hey"); //* Le doy un valor al parametro greet en la variable greeterHey */
// greeterHey("Jonas"); //* Parametro que retorna la funcion de la linea 91 */
// greeterHey("Steven"); //* Parametro que retorna la funcion de la linea 91 */

// greet("Hello")("Jonas"); //* Invoco funcion greet y le paso los parametros que necesita */

// const lufthansa = {
//   //* Defino una variable que es un objeto */
//   airline: "Lufthansa", //* Le defino unas propiedades con informacio */
//   iataCode: "Lh",
//   bookings: [], //* Es un arreglo dentro de un objeto */
//   book(flightNum, name) {
//     //* Defino una funcion que recibe 2 parametros */
//     console.log(
//       //* Voy a mostrar en consola */
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     ); //* Scope con el name, el otro esta fuera, asi que utilizo el this */
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //* En este arreglo, agrega esta informacion */
//   },
// };

// lufthansa.book(239, "Jonas Schmedtmann"); //* Invoca esta funcion y llama esta funcion y pasale estos parametros */
// lufthansa.book(635, "John Smith"); //* Invoca esta funcion y llama esta funcion y pasale estos parametros */
// console.log(lufthansa); //* Muestra en consola estos parametros, son los primeros dos */

// const eurowings = {
//   //* Defino una variable que dentro tiene propiedades */
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book; //* Defino una variable, que haga el llamado a una funcion */

// // Boes NOT Work
// // book(23, 'Sarah Williams')

// // Call Method
// book.call(eurowings, 23, "Sarah Williams"); //* Llamo una funcion, con el metodo de llamada, llamo otra funcion y le paso parametros */
// console.log(eurowings); //* Muestro en consola lo que se recibio, es el la variable y sus propiedades como array */

// book.call(lufthansa, 239, "Mary Cooper"); //* Llamo la otra funcion pero con los mismos parametros */
// console.log(lufthansa); //* Lamo esta funcion y recibe estos parametros */

// const swiss = {
//   //* Defino una variable y dentro le asigno propiedades */
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 583, "Mary Cooper"); //* Llamo la funcion y le paso parametros */
// console.log(swiss); //* Muestro en consola el arreglo definido */

// // Apply Method
// const flightData = [583, "George Cooper"]; //* Defino una variable que recibe un arreglo */
// book.apply(swiss, flightData); //* Llamo una funcion definida, y le paso los parametros de un arreglo */
// console.log(swiss); //* Muestro en consola lo que recibio el parametro */

// book.call(swiss, ...flightData); //* Llamo una fuincion, recibe un arreglo con propiedades, muestra la informacion dentro de la funcion */

// const bookEW = book.bind(eurowings); //* Defino una variable y mando llamar la funcion */
// const bookLH = book.bind(lufthansa); //* Defino la variable y mando llamar la funcion */
// const bookLX = book.bind(swiss); //* Defino la variable y mando llamar la funcion */

// bookEW(23, "Steven Williams"); //* Invoco la funcion, le paso parametros que necesita y se muestra en consola porque asi defini la funcion */

// const bookEW23 = book.bind(eurowings, 23); //* Defino una variable, que recibe parametros de una funcion con un argumento definido */
// bookEW23("Jonas Schmedtmann"); //* Le falta un arguento a la variable llamada, solo le falta el nombre */
// bookEW23("Martha Cooper");

// lufthansa.planes = 300; //* Le asigno un metodo llamado como planes a la variable lufthansa */
// lufthansa.buyPlane = function () {
//   //* Asigno un metodo que invoca una funcion */
//   //* Le asigno un */
//   console.log(this); //* Muestro lo que tenga este arreglo */

//   this.planes++; //* Le voy a agregar un valor a la variable que tiene el metodo planes y aumento 1 */
//   console.log(this.planes); //* Muestro en consola el nuevo valor de la suma en planes */
// };

// // lufthansa.buyPlane();

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// //* Selecciono en el documento la clase buy, cuando le haga click llama a este metodo, lo invocas como viene con el bind y lo vuelves a llamar */

// const addTax = (rate, value) => value + value * rate; //* Defino una variable que recibe 2 valores, luego hace una operacion */
// console.log(addTax(0.1, 200)); //* Muestro en consola la funcion, recibiendo 2 prametros que se necesitan */

// const addVAT = addTax.bind(null, 0.23); //* Defino una variable que mando llamar una funcion, que viene con 2 valores */
// // addVAT = (value) => value + value * 0.23;

// console.log(addVAT(100)); //* Se le asigna un valor de 23% */
// console.log(addVAT(23)); //* Se le asigna un valor de 23% */

// const addTaxRate = function (rate) {
//   //* Declaro una variable que recibe un parametro */
//   return function (value) {
//     //* Retorno una nueva funcion que recibe un valor */
//     return value + value * rate; //* Esta me retorna una operacion aritmetica */
//   };
// };

// const addVAT2 = addTaxRate(0.23); //* Aqui le asigno un valor definido a la funcion declarada */

// console.log(addVAT2(100)); //* Se muestra el valor de la operacion pero con otra metodologia en declaracion de funcion */
// console.log(addVAT2(23));

// const poll = {
//   //* Creo un objeto en JS */
//   question: "What is your favorite programming language?", //* Propiedades del objeto */
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"], //* Propiedades del objeto que es un array */
//   answers: new Array(4).fill(0), //* Propiedad que es un arreglo de 5 elementos que se va a llenar desde la posicion 0 */
//   registerNewAnswer() {
//     //* Realizamos una nueva funcion, pero no recibe nada */
//     const answer = Number(
//       //* Creamos una variable que recibe un numero */
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       ) //* Que se muestre estre prompt en pantalla */
//     );
//     console.log(answer); //* Mostramos en consola la respuesta */

//     typeof answer === "number" && //* Creamos esta condicion, si answer es un numero */
//       answer < this.answers.length && //* Y answer es mayor que es espacio del tamaño del arreglo */
//       this.answers[answer]++; //* Aumentamos en 1 el numero de respuesta que es */

//     this.displayResults(); //* Vamos a mostrar en consola el arreglo con el aumento en el numero seleccionado */
//     this.displayResults("string"); //* Vamos a mostrar en consola, un mensaje, pero adelante ponemos la logica */
//   },

//   displayResults(type = "array") {
//     //* Si esta variable es de este tipo */
//     if (type === "array") {
//       //* La condicion es que si es del tipo array */
//       console.log(this.answers); //* Muestra esto en consola ocmo un array */
//     } else if (type === "string") {
//       //* Y si es del tipo string */
//       console.log(`Poll results are ${this.answers.join(", ")}`); //* Muestra esto en consola, juntandolos y separandolos por coma */
//     }
//   },
// };
// // poll.registerNewAnswer();

// document
//   .querySelector(".poll") //* En el Dom localiza la clase pool */
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// //* Le agregas evento click y a esta variable le agregas esta funcion, juntas la original para el scope, y le dices de cual funcion para el scope bind */

// poll.displayResults.call({ answers: [5, 2, 3] }, "string"); //* Mando llamar la funcion y muestro este arreglo y le asigno esta clase  (consola)*/
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

// const encuesta = {
//   pregunta: "Ingresa un numero",
//   opciones: ["0: 0", "1: 1", "2: 2", "3: 3", "4: 4", "5: 5"],
//   respuestas: new Array(6).fill(0),
//   registrarNuevaRespuesta() {
//     const respuesta = Number(
//       prompt(
//         `${this.pregunta}\n${this.opciones.join(
//           "\n"
//         )}\n(Escribe la opcion de un numero)`
//       )
//     );
//     console.log(respuesta);

//     typeof respuesta === "number" &&
//       respuesta < this.respuestas.length &&
//       this.respuestas[respuesta]++;

//     this.resultadosPantalla();
//     this.resultadosPantalla("string");
//   },

//   resultadosPantalla(type = "array") {
//     if (type === "array") {
//       console.log(this.respuestas);
//     } else if (type === "string") {
//       console.log(`La encuesta de resultados es ${this.respuestas.join(", ")}`);
//     }
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", encuesta.registrarNuevaRespuesta.bind(encuesta));

// const runOnce = () => {
//   console.log("This will never run again");
// };
// runOnce();

// (function () {
//   console.log("This will never run again");
// })();

// (() => console.log("This will ALSO never run again"))();

// {
//   var isPrivate = 23;
// }
// console.log(isPrivate);

// const secureBooking = () => {
//   //* Defino una funcion */
//   let passengerCount = 0; //* Le declaro propiedades */

//   return () => {
//     //* Lo que me va a retornar */
//     passengerCount++; //* La propiedad la aumento en 1 */
//     console.log(`${passengerCount} passengers`); //* Muestro en consola la propiedad mas texto */
//   };
// };

// const booker = secureBooking(); //* Declaro una variable que invoca a la funcion */

// booker(); //* Mando llamar la variable que invoca la funcion */
// booker();
// booker();
