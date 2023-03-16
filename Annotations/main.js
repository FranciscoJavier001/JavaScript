document.querySelector("#miBoton").addEventListener("click", hacerClic);
//* Seleccionamos el elemento id, le damos una accion, que llame a esta funcion */

// function hacerClic() {
//   //* Defino una funcion que no recibe ningun parametro */
//   const momentoActual = new Date();
//   //   const actividadActual = parametroActividad;

//   return console.log(momentoActual);
// }

function hacerClic(parametroComentario) {
  //* Defino una funcion que no recibe ningun parametro */
  const momentoActual = new Date();
  const actividadActual = parametroComentario;

  return console.log(momentoActual, actividadActual);
}

// function recibirComentario(comentario) {
//   console.log("El comentario que recibimos fue: " + comentario);
// }

// // Ejemplo de uso de la función:
// recibirComentario("Este es mi comentario");

// //* Lo que quiero hacer es que al llamar a la funcion tambien llame a un comentario */
