const calcAverage = (p1,p2,p3) => (p1+p2+p3)/3 //** Creo una funcion que sigue instruccuines */

const checkWinner = (avgd, avgk) => { //** Realizo la funcion para confirmar al ganador */
    if (avgd >= (avgk * 2)) {
        console.log(`del wins ${avgd} vs ${avgk} lose koa`);
    } else if ((avgd * 2) <= avgk) {
        console.log(`koa win ${avgk} vs ${avgd} lose del`);
    } else if (avgd == avgk) {
        console.log(`No win anyone = ${avgk} vs ${avgd}`);
    } else {
        console.log(`No minumum points`);
    }
}

//** Creo nuevas variables donde se reciban los argumentos, pero pudiendolas mutar */
let dg = calcAverage(44,23,71) //** 56 */ 
let kg = calcAverage(65,54,49) //** 46 */

console.log("#1");
checkWinner(dg, kg) //** Invoco la funcion con parametros establecidos */

//** Como esta en let, puedo reasignarlas e invoco la funcion */
dg = calcAverage(85,54,41) //** 60 */
kg = calcAverage(23,34,27) //** 28 */
console.log("#2");
checkWinner(dg, kg)

//** Otra llamada a la funcion */
dg = calcAverage(85,54,91) //** 76 */
kg = calcAverage(85,54,91) //** 76 */
console.log("#3");
checkWinner(dg, kg)

//** Otra llamada a la funcion */
dg = calcAverage(1,54,41) //** 20 */
kg = calcAverage(1,34,27) //** 32 */
console.log("#4");
checkWinner(dg, kg)