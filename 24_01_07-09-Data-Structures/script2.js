const eventosJuego = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// const eventosJuego = new Map([
//   [17, "⚽️ Gol"],
//   [(36, "🔁 Sustitucion")],
//   [(47, "⚽️ Gol")],
//   [(61, "🔁 Sustitucion")],
//   [(64, "🔸 Tarjeta")],
//   [(69, "🔴 Expulsado")],
//   [(70, "🔁 Sustitucion")],
//   [(72, "🔁 Sustitucion")],
//   [(76, "⚽️ Gol")],
//   [(80, "⚽️ Gol")],
//   [(92, "🔸 Tarjeta")],
// ]);

// 1.
const eventos = [...new Set(eventosJuego.values())];
console.log(eventos);

// 2.
eventosJuego.delete(64);

// 3.
console.log(
  `Un evento paso en aproximadamente, cada ${90 / eventosJuego.size} minutos`
);
const tiempo = [...eventosJuego.keys()].pop();
console.log(tiempo);
console.log(
  `Un evento ocurrio aproximadamente cada ${tiempo / eventosJuego.size} minutos`
);

// 4.
for (const [min, evento] of eventosJuego) {
  const mitad = min <= 45 ? "Primero" : "Segundo";
  console.log(`[${mitad} Mitad] ${min}: ${evento}`);
}
