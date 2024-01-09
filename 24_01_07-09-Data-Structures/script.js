"use strict"; //* Para que nos pida una estructura e impedir algunas acciones globales */

const restaurant = {
  //* Inicializo una variable que sea un objeto */
  nombre: "Classico Italiano", //* Atributo dentro del objeto */
  localizacion: "Via Angelo Tavanti 23, Florencia, Italia", //* Atributo dentro del objeto */
  categorias: ["Italiano", "Pizzeria", "Vegetariano", "Organico"], //* Atributo dentro del objeto, es un arreglo */
  menuInicial: ["Estofado", "Brocheta", "Pan de Ajo", "Ensalada Campecina"], //* Atributo dentro del objeto, es un arreglo */
  menuPrincipal: ["Pizza", "Pasta", "Rioli"], //* Atributo dentro del objeto, es un arreglo */

  orden: function (pedidoInicial, pedidoPrincipal) {
    return [
      this.menuInicial[pedidoInicial],
      this.menuPrincipal[pedidoPrincipal],
    ];
  },
};

const arr = [2, 3, 4]; //* Es un Arreglo */
const a = [0]; //* Es una constate que es un elemento del array */
const b = [1]; //* Es una constate que es un elemento del array */
const c = [2]; //* Es una constate que es un elemento del array */

const [x, y, z] = arr; //* Desestructuro la constante arr y le asigno nuevos valores */
console.log(z, y, z); //* Muestro en consola los valores del primer array */
console.log(arr); //* Muestro en consola el primer array que se llama arr */

let [primero, segundo] = restaurant.categorias; //* Desestructuro el arreglo de este objeto y asigno ese orden */
console.log(segundo, primero); //* Muestro en consola con el orden invertido */

const [inicial, principal] = restaurant.orden(2, 0);
console.log(inicial, principal);

const anidado = [2, 4, [5, 6]];
// const [i, , j] = anidado;
const [i, , [j, k]] = anidado;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
