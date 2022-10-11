const altura1 = prompt("Ingresa la Altura")
const peso1 = prompt("Ingresa el peso")
const altura2 = prompt("Ingresa la Altura")
const peso2 = prompt("Ingresa el peso")

const bmi1 = peso1 / (Math.pow(altura1, 2))
const bmi2 = peso2 / (Math.pow(altura2, 2))

console.log(bmi1);
console.log(bmi2);

if (bmi1 > bmi2) {
    console.log(`El BMI de Mark es ${bmi1} y es mayor que el de John que es de ${bmi2}`);
} else if (bmi1 < bmi2) {
    console.log(`El BMI de John es ${bmi2} y es mayor que el de Mark que es de ${bmi1}`);
} else {
    console.log(`Ambos son iguales BMI son iguales`);
}

// Mark 1.80 - 55 = 17
// John 1.80 - 54 = 16.7