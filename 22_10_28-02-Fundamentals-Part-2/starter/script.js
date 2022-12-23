/** 
 * Vamos a crear una calculadora de propina, pero esta vez usando loops
 * 
 * Crear un array llamado cuenta que contenga 10 cuentas
 * Crear un array vacio para las propinas y otro de total
 * Use calcularPropina que es una funcion que escribe antes (no es necesario repetir) el calculo de las propinas
 *  y el total de los valores (cuenta + propina) para cada cuenta el el array de cuentas
 * Usar un for loop para el los calculos
 * 
 * Pruebas: 22, 295, 176, 440, 37, 105, 10, 1100, 86 y 62
 * 
 * Punto extra, llama calcularPropina en el loop y usa el metodo push para agregar los valores a las propinas y al arreglo de total
 * 
 * Bonus: Escribe la funcion calculoAproximado que tome de cada array 'arr' como argumento.
 * Esta funcion calcula el aproximado de todos los numeros en el array
 * ESte es un reto dificil, algo asi es la solucion
 * 
 * Primero necesitas agregar todos los valores al array, haciendo una adicion, empezando a crearlo en la variable suma que empieza en 0
 * Entonces el loop dentro del otroarray usando un for loop. En cada iteracion agregar el valor actual de la suma en una variable
 * Esta manera en el final del loop tu tienes que tener todos los valores agregados juntos
 * Para calcular el promedio divide la suma y calcula antes con un length de el array por el numero de elementos
 * Llama la funcion con el array totales 
 */

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}

const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
]

const tips = []

const totals = []

for (let i = 0; i <= bills.length -1; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}

console.log(`Bills= ${bills}`)
console.log(`Tips= ${tips}`);
console.log(`Totals= ${totals}`);

const calcAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i <= arr.length -1; i++) {
        sum = sum + arr[i]
    }

    console.log(`Cuenta Total = ${sum}`);
    return sum / arr.length
} 

console.log('Promedio a pagar ' + calcAverage(totals))
