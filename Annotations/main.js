//** Declaracion de variables */
const age = prompt("Ingresa tu Edad")

if(age < 18) {
    document.getElementById('mostrarPantalla').innerHTML=`Eres menor de edad`;
    console.log(`Eres menor de edad`);
} else {
    document.getElementById('mostrarPantalla').innerHTML=`Eres menor de edad`;
    console.log(`Eres mayor de edad`);
}