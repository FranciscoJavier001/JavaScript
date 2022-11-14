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

//** Creo nuevas variables para confirmar */
const dg1 = calcAverage(44,23,71) //** 56 */ 
const kg1 = calcAverage(65,54,49) //** 46 */
const dg2 = calcAverage(85,54,41) //** 60 */
const kg2 = calcAverage(23,34,27) //** 28 */
const dg3 = calcAverage(85,54,91) //** 76 */
const kg3 = calcAverage(85,54,91) //** 76 */
const dg4 = calcAverage(1,54,41) //** 20 */
const kg4 = calcAverage(1,34,27) //** 32 */

//** Invoco la funcion con parametros establecidos */
checkWinner(dg1, kg1)
checkWinner(dg2, kg2)
checkWinner(dg3, kg3)
checkWinner(dg4, kg4)