"use strict"; //* Para que nos pida una estructura e impedir algunas acciones globales */

// const restaurant = {
//   //* Inicializo una variable que sea un objeto */
//   nombre: "Classico Italiano", //* Atributo dentro del objeto */
//   localizacion: "Via Angelo Tavanti 23, Florencia, Italia", //* Atributo dentro del objeto */
//   categorias: ["Italiano", "Pizzeria", "Vegetariano", "Organico"], //* Atributo dentro del objeto, es un arreglo */
//   menuInicial: ["Estofado", "Brocheta", "Pan de Ajo", "Ensalada Campecina"], //* Atributo dentro del objeto, es un arreglo */
//   menuPrincipal: ["Pizza", "Pasta", "Rioli"], //* Atributo dentro del objeto, es un arreglo */

//   orden: function (pedidoInicial, pedidoPrincipal) {
//     //* Nueva variable ques una funcion que recibe 2 parametros */
//     return [
//       //* Lo que regresa al ejecutarla */
//       this.menuInicial[pedidoInicial], //* El menu inicial se va a tomar como pedido inicial */
//       this.menuPrincipal[pedidoPrincipal], //* Menu Principal se va a tomar como pedido inicial */
//     ];
//   },
// };

const arr = [2, 3, 4]; //* Es un Arreglo */
// console.log(arr); //* Muestro el primer arr que es 2,3,4 */

//* Son variables sin ninguna utilidad */
// const a = [0]; //* Es una constate que es un elemento del array */
// const b = [1]; //* Es una constate que es un elemento del array */
// const c = [2]; //* Es una constate que es un elemento del array */

const [x, y, z] = arr; //* Desestructuro la constante arr y le asigno nuevos valores */
console.log(z, y, z); //* Muestro en consola los valores del primer array */
// console.log(arr); //* Muestro en consola el primer array que se llama arr */

// let [primero, segundo] = restaurant.categorias; //* Desestructuro el arreglo de este objeto y asigno ese orden */
// console.log(segundo, primero); //* Muestro en consola con el orden invertido */

// const [inicial, principal] = restaurant.orden(2, 0); //* Desestructuro 2 arreglos del objeto oeden de restaurant en su posicion 2 y 9 */
// console.log(inicial, principal); //* Mostramos estas 2 variables en consola */

const anidado = [2, 4, [5, 6]]; //* Nueva variable que es un array anidado */
// const [i, , j] = anidado;
const [i, , [j, k]] = anidado; //* Defino la posicion de cada objeto en el arreglo anidado */
console.log(i, j, k); //* Muestro en consola estas posiciones del arreglo */

const [p = 1, q = 1, r = 1] = [8, 9]; //* Desestructuro el array y le asigno numeros pero solo cambia la ultima posicion */
console.log(p, q, r); //* Muestro en consola el arreglo */

//* Programacion Personal */

//* Lo que hace el tutor */
/*
  Tiene una variable que es un objeto porque tiene propiedades y tiene 2 variables dentro que son arrays
  inicializa un arreglo con numeros unque tiene el del objeto y no el del array
  Inicializa una constante que va a desestructurar(objeto), pero le volvio a asignar estas nuevas variables a la constante arr(objeto)
  Desestructuro 2 variables de un objeto y se metio a los array de la constante restaurant
  Creo una variable que tiene copia el nombre variable#1, luego paso la variable al numero 2, luego la var 2 la establecio como 1, consola
  Cambio el orden de la variable desestructurando las 2 y las pone iguale 
  Dentro de la variable restaurante  inicializo una funcion que tiene 2 variables y luego me retorna, luego con this regresa un objeto dentro
  de la funcion restaurant pero usa el this, luego dentro utiliza una variable dentro del objeto en este objeto, luego hace la misma operacion,
  luego mostro en consola lo que queria de cada lugar solamente con numero, luego desestructuro antes y las tiene reasignadas y consola
  inicializo un arreglo, dentro otro arreglo, inicializo otro arreglo, con comas para pasar espacio y lo ubica y consola
  Inicializo una variable que esta desestructurada y luego reasigno los valores luego puso un arreglo de 2 y mostro 3 en consola por 1ero
/**/

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegeratarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arrr = [7, 8, 9];
const badNewArr = [1, 2, [arrr[0]], arrr[1], arrr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arrr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuu);

const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);

// const ingredients = [prompt(`Let's make pasta! Ingredients 1`)];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0]);
// restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

const [a, b, ...otras] = [1, 2, 3, 4, 5];
console.log(a, b, otras);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   addresaddress: "Via del Sole, 21",

//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// || OR, && AND, ?? NULLISH
