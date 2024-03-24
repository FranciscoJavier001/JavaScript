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

// const eventos = [...new Set(eventosJuego.values())];
// console.log(eventos);

// eventosJuego.delete(64);

// console.log(
//   `Un evento paso en aproximadamente, cada ${90 / eventosJuego.size} minutos`
// );
// const tiempo = [...eventosJuego.keys()].pop();
// console.log(tiempo);
// console.log(
//   `Un evento ocurrio aproximadamente cada ${tiempo / eventosJuego.size} minutos`
// );

// for (const [min, evento] of eventosJuego) {
//   const mitad = min <= 45 ? "Primero" : "Segundo";
//   console.log(`[${mitad} Mitad] ${min}: ${evento}`);
// }
