const calcularPropina = (cuenta) => {  //* Definimos el nombre de la funcion y el parametro que recibe */
    if (cuenta > 0 && cuenta <= 300) { //* Creo una condicional con condiciones a cumplir */
        cuenta = cuenta * .15 //* Ejecuto las instrucciones de la primera condicion */
    } else { //* En caso contrario */
        cuenta = cuenta * .20 //* Instrucciones a seguir */
    }
    return cuenta //* Regreso la cuenta, que son las instruccuibes a seguir */
}

const cuentas = [ //* Un arreglo con parametros dentro */
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
]

//** Array vacios, que amos a agregarle objetos con el metodo */
const propinas = [] //*  */

const totales = []

for (let i = 0; i <= cuentas.length -1; i++) { //* Iteracion del arreglo que se repite hasta terminar todos */
    const propina = calcularPropina(cuentas[i])  //* Declaro funcion, llama a calcularPropina y reciba las cuentas iteradas */
    propinas.push(propina) //* Array definido antes, esta agregando el valor de la propina por instruccion calcularPropina */
    totales.push(propina + cuentas[i]) //* Array definido antes, metodo agregar valor propina por funcion e iteracion de cuentas */

    //* Mostramos en consola */
    console.log(`Numero de cuenta ${i + 1} = $${cuentas[i].toFixed(2)}`);
    console.log(`Propina en cuenta ${i + 1} = $${propinas[i].toFixed(2)}`);
    console.log(`En la cuenta ${i + 1} el total es de $${totales[i].toFixed(2)}`);
    console.log(`***`);
}

const calcularPromedio = (arreglo) => { //* Definimos nueva funcion que recibe un parametro */ 
    let suma = 0 //* Inicializamos una variable */
    for (let i = 0; i <= arreglo.length -1; i++) { //* Creamos una iteracion donde voy a recorrer todo el arreglo */
        suma = suma + arreglo[i] //* Sumamos el arreglo en cada iteracion */
    }

    console.log(`Cuenta Total = $${suma.toFixed(2)}`); //* Mensaje en consola */
    return suma / arreglo.length //* Retornamos esta respuesta por la cuenta individual */
}

console.log(`Promedio a pagar por cuenta individual $${calcularPromedio(totales).toFixed(2)}`); //* Mensaje Consola */