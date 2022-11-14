const friend1 = "Michael" //** Declaramos variables */
const friend2 = "Steven"
const friend3 = "Peter"

const friends = ["Michael", "Steven", "Peter"] //** Voy a crear un nuevo array */
console.log(friends); //** Mostramos en consola */

const years = new Array(1991, 1984, 2008, 2020) //** Simplemente implementamos otro nuevo Array, diferente manera */

console.log(friends[2]); //** Invocamos una posicion del array friends */

console.log(friends.length); //** Asi vemos el tamaño del arreglo */

console.log(friends[friends.length -1]); //** Asi vemos el ultimo elemento del arreglo */

friends[2] = 'Jay' //** Reasignamos el elemento de friends en el arreglo 3 */

friends[3] = 'xD' //** Creamos un nuevo elemento */

console.log(friends); 

const firstName = 'Frank' //** Creo solo una nueva variable */
const jonas = [firstName, 'Duran', 2022 - 1990, 'dev', friends] //** Creo un arreglo con infomacion */

console.log(jonas);
console.log(jonas.length); //** Para ver el tamaño del arreglo */