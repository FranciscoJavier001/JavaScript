// const delfines1 = prompt("Ingresa las anotaciones del 1er tiempo")
// const delfines2 = prompt("Ingresa las anotaciones del 2er tiempo")
// const delfines3 = prompt("Ingresa las anotaciones del 3er tiempo")

// const koalas1 = prompt("Ingresa las anotaciones del 1er tiempo")
// const koalas2 = prompt("Ingresa las anotaciones del 2er tiempo")
// const koalas3 = prompt("Ingresa las anotaciones del 3er tiempo")

// const delfinesTotal = (parseInt(delfines1)+parseInt(delfines2)+parseInt(delfines3))
// const koalasTotal = (parseInt(koalas1)+parseInt(koalas2)+parseInt(koalas3))

// console.log(delfinesTotal);
// console.log(koalasTotal);

// const Resultado1FinalDelfines = parseInt(293)
// const Resultado1FinalKoalas = parseInt(279)

// const Resultado2FinalDelfines = parseInt(316)
// const Resultado2FinalKoalas = parseInt(327)

// const Resultado3FinalDelfines = parseInt(310)
// const Resultado3FinalKoalas = parseInt(311)

// const nuevoResultado1Delfines = parseInt(Resultado1FinalDelfines / 3)
// const nuevoResultado2Delfines = parseInt(Resultado2FinalDelfines / 3)
// const nuevoResultado3Delfines = parseInt(Resultado3FinalDelfines / 3)

// const nuevoResultado1Koalas = parseInt(Resultado1FinalKoalas / 3)
// const nuevoResultado2Koalas = parseInt(Resultado2FinalKoalas / 3)
// const nuevoResultado3Koalas = parseInt(Resultado3FinalKoalas / 3)

// console.log(`#=${nuevoResultado1Delfines}, #=${nuevoResultado2Delfines}, #=${nuevoResultado3Delfines}`);
// console.log(`#=${nuevoResultado1Koalas}, #=${nuevoResultado2Koalas}, #=${nuevoResultado3Koalas}`);

// if (nuevoResultado1Delfines > nuevoResultado1Koalas) {
//     console.log(`El ganador del partido son los Delfines ${nuevoResultado1Delfines}`);
// } else {
//     console.log(`El Equipo ganador son los Koalas ${nuevoResultado1Koalas}`);
// }

// if (nuevoResultado2Delfines > nuevoResultado2Koalas) {
//     console.log(`El ganador del partido son los Delfines ${nuevoResultado2Delfines}`);
// } else {
//     console.log(`El Equipo ganador son los Koalas ${nuevoResultado2Koalas}`);
// }

// if (nuevoResultado3Delfines > nuevoResultado3Koalas) {
//     console.log(`El ganador del partido son los Delfines ${nuevoResultado3Delfines}`);
// } else {
//     console.log(`El Equipo ganador son los Koalas ${nuevoResultado3Koalas}`);
// }

// const puntosDelfines = prompt(`Ingresa el resultado Delfines`)
// const puntosKoalas = prompt(`Ingresa el resultado Koalas`)

// const puntosTotalesDelfines = parseInt(puntosDelfines / 1)
// const puntosTotalesKoalas = parseInt(puntosKoalas / 1)

// if (puntosTotalesDelfines <= 99 && puntosTotalesKoalas <= 99) {
//     console.log(`Ningun equipo Gano`); //** 299-299 */
// } else if (puntosTotalesDelfines >= 100 && puntosTotalesKoalas <= 99) {
//     console.log(`Ganaron los delfines, los Koalas no llegaron a la puntacion minima`); //** 300-299 */
// } else if (puntosTotalesKoalas >= 100 && puntosTotalesDelfines <= 99) {
//     console.log(`Ganaron los Delfines, los Koalas no llegaron a la puntacion minima`); //** 300-299 */
// } else if (puntosTotalesDelfines >= 100 > puntosTotalesKoalas >= 100) {
//     console.log(`Ganaron los Delfines`); //** 310-300 */
// } else if (puntosTotalesKoalas >= 100 > puntosTotalesDelfines >= 100) {
//     console.log(`Ganaron los Koalas`);
// } else if (puntosTotalesDelfines == puntosTotalesKoalas) {
//     console.log(`Fue un empate`);
// }

// const scoreDolphins = (96 + 108 + 89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(`Dolphins=${scoreDolphins}, Koalas=${scoreKoalas}`);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win the trophy 🏆`);
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas win the trophy 🏆`);
// } else if(scoreDolphins === scoreKoalas) {
//     console.log(`Both win the trophy 🏆`);
// }

// BONUS
const scoreDolphins = (97 + 112 + 80) / 3
const scoreKoalas = (109 + 95 + 50) / 3
console.log(`Dolphins=${scoreDolphins}, Koalas=${scoreKoalas}`);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win the trophy 🏆`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`Koalas win the trophy 🏆`);
} else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`Both win the trophy 🏆`);
} else {
    console.log(`No one wins the trophy 😭`);
}