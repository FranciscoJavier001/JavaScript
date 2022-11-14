//** ... */
const friends = ["a", "b", "c"] //** Arreglo con esos elementos */
friends.push("d") //** Con el metodo push metemos un elemento */

console.log(`Mostramos el arreglo`);
console.log(friends); //** Mostramos el arreglo*/

//** ... */
const newLength = friends.push("e") //** Con el metodo push metemos un elemento al final */

console.log(`Mostramos tamaño del arreglo con nuevo elemento`);
console.log(newLength); //** Tamaño del arreglo */

//** ... */
friends.unshift('f') //** Metemos variable al inicio del Arreglo */

console.log(`Metemos elemento en el primer arreglo`);
console.log(friends);

//** ... */
friends.pop(friends) //** Elimino el ultimo elemento del array "e" */
friends.pop(friends) //** Elimino el ultimo elemento del array "d" */

console.log(`Muestro el arreglo menos los ultimos 2 elementos`);
console.log(friends);

//** ... */

const popMethod = friends.pop() //** Creo una funcion para utilizar elemento arreglo mediante pop */

console.log(`Elemento a eliminar`);
console.log(popMethod); //** Muestro cual sera el elemento del arreglo que se eliminara */
console.log(`Muestro el nuevo arreglo`);
console.log(friends); //** Consola el arreglo friends */

//** ... */

friends.shift() //** Elimina el primer elemento del array */

console.log(`Elimino el primer elemento del array "f"`);
console.log(friends);

//** ... */
console.log(`Busco un arreglo en el array`);
console.log(friends.indexOf('b')) //** Me dice en que posicion esta ese arreglo */

console.log(`Si no esta muestro -1`);
console.log(friends.indexOf('x')) //** Me dice en que posicion esta ese arreglo */

//** ... */
console.log(friends.includes("a")) //** Para saber si esta incluido retorno booleano */
console.log(friends.includes("xD")) 

//** ... */
friends.push(00)

console.log(`Metimos elemento al arreglo; Comparacion restrictiva`);
console.log(friends.includes('00')); //** Comparacion Retrictiva */

console.log(`Muestro el nuevo arreglo`);
console.log(friends);

//** ... */
console.log(`Utilizacion del metodo includes`);
if (friends.includes('p')) { //** Utilizacion del metodo includes */
    console.log(`Tenemos elemento p`);
} else {
    console.log(`No tenemos el elemento`);
}