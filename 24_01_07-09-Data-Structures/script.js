"use strict"; //* Para que nos pida una estructura e impedir algunas acciones globales */

const restaurant = {
  //* Inicializo una variable que sea un objeto */
  nombre: "Classico Italiano", //* Atributo dentro del objeto */
  localizacion: "Via Angelo Tavanti 23, Florencia, Italia", //* Atributo dentro del objeto */
  categorias: ["Italiano", "Pizzeria", "Vegetariano", "Organico"], //* Atributo dentro del objeto, es un arreglo */
  menuInicial: ["Estofado", "Brocheta", "Pan de Ajo", "Ensalada Campecina"], //* Atributo dentro del objeto, es un arreglo */
  menuPrincipal: ["Pizza", "Pasta", "Rioli"], //* Atributo dentro del objeto, es un arreglo */

  orden: function (pedidoInicial, pedidoPrincipal) {
    //* Nueva variable ques una funcion que recibe 2 parametros */
    return [
      //* Lo que regresa al ejecutarla */
      this.menuInicial[pedidoInicial], //* El menu inicial se va a tomar como pedido inicial */
      this.menuPrincipal[pedidoPrincipal], //* Menu Principal se va a tomar como pedido inicial */
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

const [inicial, principal] = restaurant.orden(2, 0); //* Desestructuro 2 arreglos del objeto oeden de restaurant en su posicion 2 y 9 */
console.log(inicial, principal); //* Mostramos estas 2 variables en consola */

const anidado = [2, 4, [5, 6]]; //* Nueva variable que es un array anidado */
// const [i, , j] = anidado;
const [i, , [j, k]] = anidado; //* Defino la posicion de cada objeto en el arreglo anidado */
console.log(i, j, k); //* Muestro en consola estas posiciones del arreglo */

const [p = 1, q = 1, r = 1] = [8, 9]; //* Desestructuro el array y le asigno numeros pero solo cambia la ultima posicion */
console.log(p, q, r); //* Muestro en consola el arreglo */
