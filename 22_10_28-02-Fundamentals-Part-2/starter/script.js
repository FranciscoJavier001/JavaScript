const calcularPropina = (cuenta) => {
    if (cuenta > 0 && cuenta <= 300) {
        cuenta = cuenta * .15
    } else {
        cuenta = cuenta * .20
    }
    return cuenta
}

//** Este es un simple array */
const cuentas = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
]

//** Array vacios, que amos a agregarle objetos con el metodo */
const propinas = []

const totales = []

for (let i = 0; i <= cuentas.length -1; i++) {
    const propina = calcularPropina(cuentas[i])
    propinas.push(propina)
    totales.push(propina + cuentas[i])

    console.log(`Numero de cuenta ${i + 1} = $${cuentas[i].toFixed(2)}`);
    console.log(`Propina en cuenta ${i + 1} = $${propinas[i].toFixed(2)}`);
    console.log(`En la cuenta ${i + 1} el total es de $${totales[i].toFixed(2)}`);
    console.log(`***`);
}

const calcularPromedio = (arreglo) => {
    let suma = 0
    for (let i = 0; i <= arreglo.length -1; i++) {
        suma = suma + arreglo[i]
    }

    console.log(`Cuenta Total = $${suma.toFixed(2)}`);
    return suma / arreglo.length
}

console.log(`Promedio a pagar por cuenta individual $${calcularPromedio(totales).toFixed(2)}`);