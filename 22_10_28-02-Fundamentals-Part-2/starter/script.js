//** Lopp Array */

const persona = [ //** Arreglo */
    'Pepe',
    'Lopez',
    2022-1990,
    'Mesero',
    ['Carlos', 'Luis', 'Edgar'],
    true
]
const tipos = [] //** Arreglo vacio, que puede contener lo que quiera */

for(let i=0; i<persona.length; i++){ //** Para ver cada posicion del arreglo */
    //** Valores de cada posicion, muestra el tipo de elemento en cada posicion del arreglo */
    console.log(persona[i], typeof persona[i]);

    // tipos[i] = typeof persona[i] //** Del arreglo persona muestrame de cada posicion su tipo */
    tipos.push(typeof persona[i]) //** Voy a ingresar un nuevo elemento al arreglo (no agrege nada) */
}

console.log(tipos); //** Muestro en consola que tipo de elemento es cada posicion */
//**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

const anios = [1980, 1985, 1987, 1990, 1995, 2000, 2010, 2020] //** Creo un nuevo arreglo */
const edades = [] //** Inicializo un arreglo vacio */

for(let i=0; i<anios.length; i++){ //** Loop que lee el arreglo anios */
    edades.push(2022 - anios[i]) //** Dentro del arreglo edades agrego los anios (de la operacion) */
}

console.log(edades); //** Muestro en consola las edades actuales */
//**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  *///**  */

for(let i=0; i < persona.length; i++){ //** Un loop */
    //** Condicional, del arreglo persona, muestrame todos lo que no sean diferentes al tipo string recoriendo el arreglo total */
    if(typeof persona[i] !== 'string') continue

    console.log(persona[i], typeof persona[i]); //** Muestro en consola las variables del arreglo  */
}

for(let i=0; i<persona.length; i++){ //** Loop */
    //** Condicional que deja de continuar cuando detecta un tipo numero en el arreglo */
    if(typeof persona[i] === 'number') break

    console.log(persona[i], typeof persona[i]); //** Muestro en consola las variables del arreglo hasta que se rompen con un numero */
}