//** Reto de Codigo */
/*
Vamos a volver a Mark y John comparando sus IMC.
Esta vez vamos a usar objetos para implementar el calculo
Recuerda IMC = masa / altura ** 2 = masa / (peso * peso). Usa Km y Mts

1.Para cada uno de ellos crea un objeto con propiedades como sus nombres completos, masa y altura Mark Miller y John Smith
2.Crea un metodo de calcIMC en cada uno de los objetos a calcular el IMC, el mismo metodo en ambos objetos y con propiedades y lo retornen del metodo
3.Muestra en consola quien tiene un mayor IMC junto con su nombre completo y el del otro tambien

Test Data: Marks weights 78 kg abnd is 1.69 m tall. John weights 92 kg and is 1.95 m tall
*/

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.weight / Math.pow(this.height, 2)
        return this.bmi.toFixed(1)
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.weight / Math.pow(this.height, 2)
        return this.bmi.toFixed(1)
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.calcBMI > john.calcBMI) {
    console.log(`${mark.firstName} ${mark.lastName} weights ${mark.weight} kg and height is ${mark.height} and his bmi=${mark.bmi.toFixed(1)}
${john.firstName} ${john.lastName} has a weight of ${john.weight} kg and height ${john.height} and his bmi=${john.bmi.toFixed(1)}
that's mean ${john.firstName} wins against ${mark.firstName}`);
} else {
    console.log(`${john.firstName} ${john.lastName} weights ${john.weight} kg and height is ${john.height} and his bmi=${john.bmi.toFixed(1)}
${mark.firstName} ${mark.lastName} has a weight of ${mark.weight} kg and height ${mark.height} and his bmi=${mark.bmi.toFixed(1)}
that's mean ${mark.firstName} wins against ${john.firstName}`);
}