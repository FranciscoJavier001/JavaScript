/* 
    Declaramos dos objetos con estas caracteristicas

    mark
    Mark Miller
    Peso 78 Kg
    Altra 1.69 m
    BMI=27.3

    john
    John Smith
    Peso 92 Kg
    Altura 1.95 m
    BMI=24.2

    Ambos objetos les asignamos el nombre a una funcion luego la inicializamos sin llamar a nada luego le damos instrucciones
    con un nuevo this utilizamos esta instruccion (pintarron y retornmos la inicializacion de la funcion)

    creamos un if simple y listo ahi mismo invocamos la funcion
*/

const mark = {
    fullName: 'Mark Miller',
    peso: 78,
    altura: 1.69,
    calcBMI: function() {
        this.imc = this.peso / (this.altura * this.altura)
        return this.imc
    }
}

const john = {
    fullName: 'John Smith',
    peso: 92,
    altura: 1.95,
    calcBMI: function() {
        this.imc = this.peso / (this.altura * this.altura)
        return this.imc
    }
}

if(mark.calcBMI() > john.calcBMI()) {
    console.log(`Pesa mas Mark`);
} else {
    console.log(`Pesa mas John`);
}