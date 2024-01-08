"use strict"; //* Para que nos pida una estructura e impedir algunas acciones globales */

const restaurant = {
  //* Inicializo una variable que sea un objeto */
  nombre: "Classico Italiano", //* Atributo dentro del objeto */
  localizacion: "Via Angelo Tavanti 23, Florencia, Italia", //* Atributo dentro del objeto */
  categorias: ["Italiano", "Pizzeria", "Vegetariano", "Organico"], //* Atributo dentro del objeto, es un arreglo */
  menuInicial: ["Estofado", "Brocheta", "Pan de Ajo", "Ensalada Campecina"], //* Atributo dentro del objeto, es un arreglo */
  menuPrincipal: ["Pizza", "Pasta", "Rioli"], //* Atributo dentro del objeto, es un arreglo */
};
console.log(restaurant);
