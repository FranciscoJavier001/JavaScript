// //** Declaracion de variables */
// const age = prompt("Ingresa tu Edad")

// if(age < 18) {
//     document.getElementById('mostrarPantalla').innerHTML=`Eres menor de edad`;
//     console.log(`Eres menor de edad`);
// } else {
//     document.getElementById('mostrarPantalla').innerHTML=`Eres menor de edad`;
//     console.log(`Eres mayor de edad`);
// }

// const amigos = `Francisco, Sergio`
// const objetivos = `Exito profesional`
// const amistad = (amigos, objetivos) => {

// }

// const amistadSergio = (pasatiempos) => ({
//     team: pasatiempos
// })

// const resultadoAmistad = amistadSergio('Stay together')
// console.log(resultadoAmistad);


const getUsuarioActivo = (nombre) => ({ //** Funcion, recibe un nombre y nos devuelve esto */
    uid: 'ABC678',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Francisco');
console.log(usuarioActivo);


//** Wey, no mames, wey lo que pongo que recibe es lo que necesita la funcion!!! xDDD */
//** Funcion que  */

const amistad = (personas, objetivos) => ({
    tiempoJuntos: personas,
    logros: objetivos
})

const instruccion = amistad('Francisco y Sergio', 'Integral Suseful')
console.log(instruccion);