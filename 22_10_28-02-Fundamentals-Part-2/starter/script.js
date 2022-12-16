//** Crea un array con varios parametros y dentro mas mas arreglos */
//** Creamos un for, que se inicialize con el length-1 y pare hasta el 0, y menos */
//** Mostramos en consola el nombre del arreglo dentro la variabe del loop */
//** Crea un loop dentro de otro loop */

const persona = [ //** Defino un objeto con propiedades */
    nombre = 'Pepe',
    apellido = 'Jimenez',
    puesto = 'Gerente',
    Empleados = ['Carlos', 'Ernesto', 'Manuel'],
    Salario = 10000,
    activo = true
]

for(let i = persona.length -1; i >= 0; i--) { //** Loop que itera desde el final hasta el inicio */
    console.log(i, persona[i]);
    console.log(typeof persona[i]); //** Muestro el tipo de prpiedad del arreglo */
}

for(let j = 0; j <= 5; j++) { //** Creo un array */
    console.log(`Numero de vuelta ${j}`);

    for(let k = 0; k <= 5; k++) { //** Pongo otro array dentro del aray */
        console.log(`Vuelta ${j} - Repeticion ${k}`);
    }
}