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





const getMensaje = (aviso, advertencia) => ({
    mensajeAviso: aviso,
    mensajeAdvertencia: advertencia
})

const mensaje = getMensaje(`Deja de perder el tiempo`, `haz lo que te toca`)
console.log(mensaje);
document.getElementById("xD").innerHTML = mensaje