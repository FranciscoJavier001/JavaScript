const check1 = 275
const check2 = 40
const check3 = 430

const tip1 = check1
const tip2 = check2
const tip3 = check3

// tip <= 300 ? console.log(tip*.15) : console.log(tip*.20);
tip1 <= 300 ? console.log(`Cuenta es de ${check1}, la propina es de ${tip1*.15} y el total es de ${check1+tip1*.15}`)
:
console.log(`Cuenta es de ${check1}, la propina es de ${tip1*.20} y el total es de ${check1+tip1*.20}`);

tip2 <= 300 ? console.log(`Cuenta es de ${check2}, la propina es de ${tip2*.15} y el total es de ${check2+tip2*.15}`)
:
console.log(`Cuenta es de ${check2}, la propina es de ${tip2*.20} y el total es de ${check2+tip2*.20}`);

tip3 <= 300 ? console.log(`Cuenta es de ${check3}, la propina es de ${tip3*.15} y el total es de ${check3+tip3*.15}`)
:
console.log(`Cuenta es de ${check3}, la propina es de ${tip3*.20} y el total es de ${check3+tip3*.20}`);
