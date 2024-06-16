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

const greet = function (greeting) {
  //* Defino variable que recibe el parametro de una funcion */
  return function (name) {
    //* Retorno un parametro */
    console.log(`${greeting} ${name}`); //* Muestro en consola el parametro que recibe greet y el parametro que retorno  */
  };
};

// //* Misma funcion pero como funcion de flecha */
// const greet = (greeting) => {
//   //* Defino una variable que reciba un parametro */
//   return (name) => {
//     //* Lo que va a regresar */
//     console.log(`${greeting} ${name}`); //* Lo que muestro en consola */
//   };
// };

const greeterHey = greet("Hey"); //* Le doy un valor al parametro greet en la variable greeterHey */
greeterHey("Jonas"); //* Parametro que retorna la funcion de la linea 91 */
greeterHey("Steven"); //* Parametro que retorna la funcion de la linea 91 */

greet("Hello")("Jonas"); //* Invoco funcion greet y le paso los parametros que necesita */
