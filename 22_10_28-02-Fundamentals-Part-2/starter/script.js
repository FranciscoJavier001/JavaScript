//** LOOP */
for (let i = 1; i <= 10; i++) { //** Creamos un loop */
    console.log(`LOOP: Numero de iteracion ${i}`);
}

//** WHILE */
let i = 1 //** Inicializamos la variable con un numero */
while( i <= 10) { //** Creamos la condicion */
    console.log(`WHILE: Numero de iteracion ${i}`); //** Mostramos en consola */
    i++ //** Lo que se hace despues de mostrar en consola */
}

//** WHILE */
//** Inicializamos la creacion de un numero aleatorio, que sea un integer y que pueda llegar al 6 */
let numAleatorio = Math.trunc(Math.random() * 6) + 1

while (numAleatorio !== 6) { //** Creamos un ciclo, mientras numAleatorio sea diferente a 6 */
    console.log(`Numero aleatorio numero ${numAleatorio}`); //** Mostramos en consola el numAleatorio que salio */
    numAleatorio = Math.trunc(Math.random() * 6) + 1 //** Instruccion a seguir mientras sea diferente a 6, lo debemos de incializar antes */
    if(numAleatorio === 6) console.log(`Se consiguio el numero 6`); //** Condicional cuando llega al 6 */
}