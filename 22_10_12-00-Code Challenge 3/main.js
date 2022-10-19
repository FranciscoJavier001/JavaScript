// ** Peticion de Variables */
const delfines1 = prompt("Ingresa las anotaciones del 1er tiempo Delfines")
const delfines2 = prompt("Ingresa las anotaciones del 2er tiempo Delfines")
const delfines3 = prompt("Ingresa las anotaciones del 3er tiempo Delfines")

const koalas1 = prompt("Ingresa las anotaciones del 1er tiempo Koalas")
const koalas2 = prompt("Ingresa las anotaciones del 2er tiempo  Koalas")
const koalas3 = prompt("Ingresa las anotaciones del 3er tiempo  Koalas")

// ** Pasamos las variables a Numeros */
const delfinesTotal = (parseInt(delfines1) / 3+parseInt(delfines2) /3 +parseInt(delfines3) / 3)
const koalasTotal = (parseInt(koalas1) /3 +parseInt(koalas2) / 3+parseInt(koalas3) / 3)

// ** Mostramos en consola el resultado */
console.log(`Delfines=${delfinesTotal}`);
console.log(`Koalas=${koalasTotal}`);


if (delfinesTotal > koalasTotal && delfinesTotal >= 100 && koalasTotal >= 100) {
    console.log(`Ganaron los Delfines`);
} else if (delfinesTotal < koalasTotal && delfinesTotal >= 100 && koalasTotal >= 100) {
    console.log(`Ganaron los Koalas`);
} else if (delfinesTotal == koalasTotal && delfinesTotal >= 100 && koalasTotal >= 100) {
    console.log(`Hay un empate`);
} else if (delfinesTotal > koalasTotal && delfinesTotal <= 99 || koalasTotal <= 99) {
    console.log(`Delfines=${delfinesTotal} -- Koalas=${koalasTotal}
    Ganaron los Delfines pero No se Cumplieron los puntos Minimos`);
} else if (delfinesTotal < koalasTotal && delfinesTotal <= 99 || koalasTotal <= 99) {
    console.log(`Delfines=${delfinesTotal} -- Koalas=${koalasTotal}
    Ganaron los Koalas pero No se Cumplieron los puntos Minimos`);
}

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
// const scoreDolphins = (97 + 112 + 80) / 3
// const scoreKoalas = (109 + 95 + 50) / 3
// console.log(`Dolphins=${scoreDolphins}, Koalas=${scoreKoalas}`);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win the trophy 🏆`);
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`Koalas win the trophy 🏆`);
// } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`Both win the trophy 🏆`);
// } else {
//     console.log(`No one wins the trophy 😭`);
// }