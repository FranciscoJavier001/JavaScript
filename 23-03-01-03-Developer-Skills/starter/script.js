// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const arreglo = [-10, -5, 0, 1, 3, 6, 9, 'error'];

const firstFunction = (getData) => {
  let min = getData[0];
  let max = getData[0];

  for (let i = 0; i < getData.length; i++) {
    const tempActual = getData[i];
    if (typeof tempActual !== 'number') continue;

    if (tempActual > max) max = tempActual;
    if (tempActual < min) min = tempActual;
  }
  console.log(max, min);
  return max - min;
};

console.log(firstFunction(arreglo));

const pepe = firstFunction(arreglo);
console.log(pepe);
