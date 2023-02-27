/* Problema
    Un restaurant tiene una politica de si su consumo es de hasta 300 se agrega un 15%, en caso de ser mas se agrega del .20
    Ingresar un arreglo de Cuentas
    Crear un ciclo que recorra las cuentas, agrege la propina y el total
    Mostrar por consola las cuentas, propinas y totales
    Crear una funcion que divida el total de las cuentas entre el numero de cuentas
    Mostrar por consola el promedio de cuentas totales entre las personas
*/

const calcularPropina = (cuenta) => {
    if(cuenta <= 300) {
        cuenta = cuenta * .15
    } else {
        cuenta = cuenta * .20
    }
    return cuenta
}

const cuentas = [100, 200, 300, 400]
const propinas = []
const totales = []

for(i = 0; i <= cuentas.length -1; i++) {
    const propina = calcularPropina(cuentas[i])
    propinas.push(propina)
    totales.push(cuentas[i] + propina)

    console.log(cuentas[i]);
    console.log(propinas[i]);
    console.log(totales[i]);
}

const calcularPromedio = (arr) => {
    let suma = 0
    for(i = 0; i <= arr.length -1; i++) {
        suma = suma + arr[i]
    }
    return suma / arr.length
}

console.log(calcularPromedio(totales));

