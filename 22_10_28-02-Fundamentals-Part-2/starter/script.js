//** Excercise */
//** Quiero crear un array, que a traves de una funcion me diga la edad de cada uno de los elementos */
const calcAge = (birthYear) => {
    return 2022 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018]

console.log(calcAge(years[0])); //** Muestro en consola el primer elemento del arreglo */

const age1 = calcAge(years[1]); //** Creo en nuevas variables cada edad */
const age2 = calcAge(years[2]);
const age3 = calcAge(years[3]);
const age4 = calcAge(years[4]);

console.log(age1, age2, age3, age4); //** Muestro en consola las edades */

const ageLast = calcAge(years[years.length -1]) //** Asi podemos ver el ultimo elemento utilizando hack en array */
console.log(ageLast); //** Ultima edad en consola */

const ages = [calcAge(years[0]), calcAge(years[years.length -1])] //** SAco primera edad y ultima */
console.log(ages); //** Muestro en consola las edades */