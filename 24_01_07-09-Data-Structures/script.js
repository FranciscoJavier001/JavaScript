// "use strict"; //* Para que nos pida una estructura e impedir algunas acciones globales */

// // const restaurant = {
// //   //* Inicializo una variable que sea un objeto */
// //   nombre: "Classico Italiano", //* Atributo dentro del objeto */
// //   localizacion: "Via Angelo Tavanti 23, Florencia, Italia", //* Atributo dentro del objeto */
// //   categorias: ["Italiano", "Pizzeria", "Vegetariano", "Organico"], //* Atributo dentro del objeto, es un arreglo */
// //   menuInicial: ["Estofado", "Brocheta", "Pan de Ajo", "Ensalada Campecina"], //* Atributo dentro del objeto, es un arreglo */
// //   menuPrincipal: ["Pizza", "Pasta", "Rioli"], //* Atributo dentro del objeto, es un arreglo */

// //   orden: function (pedidoInicial, pedidoPrincipal) {
// //     //* Nueva variable ques una funcion que recibe 2 parametros */
// //     return [
// //       //* Lo que regresa al ejecutarla */
// //       this.menuInicial[pedidoInicial], //* El menu inicial se va a tomar como pedido inicial */
// //       this.menuPrincipal[pedidoPrincipal], //* Menu Principal se va a tomar como pedido inicial */
// //     ];
// //   },
// // };

// const arr = [2, 3, 4]; //* Es un Arreglo */
// // console.log(arr); //* Muestro el primer arr que es 2,3,4 */

// //* Son variables sin ninguna utilidad */
// // const a = [0]; //* Es una constate que es un elemento del array */
// // const b = [1]; //* Es una constate que es un elemento del array */
// // const c = [2]; //* Es una constate que es un elemento del array */

// const [x, y, z] = arr; //* Desestructuro la constante arr y le asigno nuevos valores */
// console.log(z, y, z); //* Muestro en consola los valores del primer array */
// // console.log(arr); //* Muestro en consola el primer array que se llama arr */

// // let [primero, segundo] = restaurant.categorias; //* Desestructuro el arreglo de este objeto y asigno ese orden */
// // console.log(segundo, primero); //* Muestro en consola con el orden invertido */

// // const [inicial, principal] = restaurant.orden(2, 0); //* Desestructuro 2 arreglos del objeto oeden de restaurant en su posicion 2 y 9 */
// // console.log(inicial, principal); //* Mostramos estas 2 variables en consola */

// const anidado = [2, 4, [5, 6]]; //* Nueva variable que es un array anidado */
// // const [i, , j] = anidado;
// const [i, , [j, k]] = anidado; //* Defino la posicion de cada objeto en el arreglo anidado */
// console.log(i, j, k); //* Muestro en consola estas posiciones del arreglo */

// const [p = 1, q = 1, r = 1] = [8, 9]; //* Desestructuro el array y le asigno numeros pero solo cambia la ultima posicion */
// console.log(p, q, r); //* Muestro en consola el arreglo */

// //* Programacion Personal */

// //* Lo que hace el tutor */
// /*
//   Tiene una variable que es un objeto porque tiene propiedades y tiene 2 variables dentro que son arrays
//   inicializa un arreglo con numeros unque tiene el del objeto y no el del array
//   Inicializa una constante que va a desestructurar(objeto), pero le volvio a asignar estas nuevas variables a la constante arr(objeto)
//   Desestructuro 2 variables de un objeto y se metio a los array de la constante restaurant
//   Creo una variable que tiene copia el nombre variable#1, luego paso la variable al numero 2, luego la var 2 la establecio como 1, consola
//   Cambio el orden de la variable desestructurando las 2 y las pone iguale
//   Dentro de la variable restaurante  inicializo una funcion que tiene 2 variables y luego me retorna, luego con this regresa un objeto dentro
//   de la funcion restaurant pero usa el this, luego dentro utiliza una variable dentro del objeto en este objeto, luego hace la misma operacion,
//   luego mostro en consola lo que queria de cada lugar solamente con numero, luego desestructuro antes y las tiene reasignadas y consola
//   inicializo un arreglo, dentro otro arreglo, inicializo otro arreglo, con comas para pasar espacio y lo ubica y consola
//   Inicializo una variable que esta desestructurada y luego reasigno los valores luego puso un arreglo de 2 y mostro 3 en consola por 1ero
// /**/

// const arrr = [7, 8, 9];
// const badNewArr = [1, 2, [arrr[0]], arrr[1], arrr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arrr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuu);

// const str = "Jonas";
// const letters = [...str, "", "S."];
// console.log(letters);
// console.log(...str);

// // const ingredients = [prompt(`Let's make pasta! Ingredients 1`)];
// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0]);
// // restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const [a, b, ...otras] = [1, 2, 3, 4, 5];
// console.log(a, b, otras);

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

// // Prueba..
// const game = {
//   //* Es un arreglo de elementos */
//   team1: "Bayer Munich", //* Son elementos dentro del arreglo */
//   team2: "Borrussia Dortmund",
//   players: [
//     //* Un arreglo dentro de otro arreglo */
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],

//   score: "4:0", //* Mas elementos dentro del arreglo */
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"], //* Otro elemento del arreglo */
//   date: "Nov 9th, 2037", //* Elemento arreglo */
//   odds: {
//     //* Un arreglo dentro de otro arreglo */
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players; //* Desestructuro el arrglo y los nombro como se me anotoje, solo son 2 variables */
// console.log(players1, players2); //* Muestro los elemento del arreglo en consola los 2 equipo */

// const [gk, ...fieldPlayers] = players1; //* Desestructuro el jugadores1 y muestro posicion 1 del arreglo y lo demas */
// console.log(gk, fieldPlayers); //* Muestro un arreglo en consola y los otros elementos que faltan  */

// const allPlayers = [...players1, ...players2]; //*  Muestro los elementos de estos dos arreglo */
// console.log(allPlayers); //* Muestro en consola */

// const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"]; //* Le voy a agregar elementos a este arreglo */
// console.log(players1Final); //* Muestro los elementos con los nuevos elementos en consola */

// const {
//   //* Inizializo un arreglo */
//   odds: { team1, x: draw, team2 }, //* Solamente son variables definidas arriba y una que se reasigna */
// } = game; //* De que variable viene */
// console.log(team1, draw, team2); //* Muestro en consola solo numeros */

// const printGoals = function (...players) {
//   //* Defino una variable que ejecute una funcion que llame a todos los jugadores */
//   console.log(players); //* Muestro en consola solo los jugaroes que anotaron goles */
//   console.log(`${players.length} goals were scored`); //* Mostramos el tamaño del arreglo y pasamos este mensaje en consola */
// };

// printGoals(...game.scored); //* Aqui reasigno el valor de la variable que muestro en consola arriba */

// team1 < team2 && console.log("Team 1 is more likely to win"); //* Ambas afirmaciones son correctas y muestro en consola */
// team1 > team2 && console.log("Team 2 is more likely to win");

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegeratarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //* Es un array que llama lo que tiene este array y dentro otro array, solo identificamos */

// for (const item of menu) console.log(item); //* Mientras exista un item en el menu, muestra el item en consola */

// for (const item of menu.entries()) {
//   //* Recorro un arreglo, asigno el nombre variable y de donde viene y que son y cuales */
//   console.log(item); //* Muestro en consola */
// }

// for (const [i, el] of menu.entries()) {
//   //* Recorro el arreglo, asigno las variables definidas[] y de donde viene y que y cuales son */
//   console.log(`${i + 1}:${el}`); //* Muestro en consola numero inicio contador y el valor del elemento */
// }

// // Prueba Tecnica
// // Cuando lo que tenga tenga variables independientes poner [], variables con mas info {}
// const juego = {
//   //* Creo un array, que tenga variables */
//   equipo1: "Necaxa",
//   equipo2: "Chivas",
//   jugadores: [
//     //* Otro Array con mas informacion dentro de otro array */
//     ["A", "B", "C", "D", "E", "F", "G", "Y"],
//     ["H", "I", "J", "K", "L", "M", "N", "Z"],
//   ],
//   marcador: "4:0",
//   anotadores: ["A", "Y", "H", "Z"], //* Array dentro de otro array */
//   fecha: "Noviembre 9, 2020",
//   posibilidades: {
//     //* Array con mas informacion */
//     equipo1: 1.33,
//     x: 0.5,
//     equipo2: 6.5,
//   },
// };

// for (const [i, jugadores] of juego.anotadores.entries()) //* Iteracion for, pero definimos un contador y otro contador y de donde vamos a tomar las entradas */
//   console.log(`Goles ${i + 1}: ${jugadores}`); //* Gol 1 de Jugador */

// const posibilidades = Object.values(juego.posibilidades); //* Variable, que toma los valores de una variable en su variable */
// let promedio = 0; //* Inicializo una variable en 0 */
// for (const posibilidad of posibilidades) promedio += posibilidad; //* Iteracion, definimos variable de localizacion de almacenamiento, luego promedio multiplicado en posibilidad */

// promedio /= posibilidades.length; //* Luego el promedio sera dividido en las posibilidades en su espacio */
// console.log(promedio); //* Mostramos en consola el promedio */

// console.log(Object.entries(juego.posibilidades)); //* Muestro en consola este arreglo, solo viene lo que esta en posibilidades */

// for (const [nombreEquipo, posibilidad] of Object.entries(juego.posibilidades)) {
//   //* Iteracion, desectructuramos y definimos de donde vienen las entradas */
//   // console.log(equipo, posibilidad); //* Mensaje en consola */
//   const equipoValor =
//     nombreEquipo === "x" ? "empate" : `victoria ${juego[nombreEquipo]}`; //* Definimos variable, que sea igual a equipo y que si es identica a x muestra empate o victoria y muestra el nombre del equipo */
//   // console.log(equipoValor); //* Equipo valor toma valor del nombre del equipo */
//   console.log(`Posibilidad de ${equipoValor} ${posibilidad}`);
// }

// Los metodos en javascript es la manera en la cual interactuas con la pagina, para todo se utiliza un metodo y una metodologia
console.log(new Set("franciscojaviermartinezduran").size); //* Importante, estudiar los metodos */

const restaurante = new Map(); //* Creo una variable que mapeo, es decir la creo en un nuevo arreglo */
restaurante.set("nombre", "Clasico Italiano"); //* Le asigno variables */
restaurante.set(1, "Florenza, Italia"); //* Le asigno variables */
console.log(restaurante); //* Muestro en consola sus propiedades */
console.log(restaurante.set(2, "Lisboa, Portugal")); //* Le asigno esta variable */

restaurante
  .set("categorias", ["Italiano", "Pizzeria", "Vegetariano", "Organica"])
  .set("abierto", 11)
  .set("cerrado", 23)
  .set(true, "Estamos Abiertos")
  .set(false, "Estamos Cerrados"); //* Le asigne estas propiedades a la variable */

console.log(restaurante.get("nombre")); //* Muestro en consola esta informacion */
console.log(restaurante.get(true));
console.log(restaurante.get(1));

const tiempo = 21; //* Defino esta variable */
restaurante.get(
  //* Le pido informacion */
  console.log(
    tiempo > restaurante.get("abierto") && tiempo < restaurante.get("cerrado") //* Muestro en consola esta condicional */
  )
);

console.log(restaurante.has("categorias")); //* Muestro las categorias */
restaurante.delete(2); //* Elimino una variable */
console.log(restaurante); //* Muestro en consola la variable restaurante */

console.log(restaurante.size); //* Reviso el tamaño de la variable restaurante */
console.log(restaurante.clear); //* Limpio la informacion de esa variable */