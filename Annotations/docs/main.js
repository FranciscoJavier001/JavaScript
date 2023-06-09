const paginaWhats = `https://wa.me/+52`; //* Direccion de Whats */
const numeroTelefonicoDOM = document.getElementById("#numero-telefonico"); //* Donde agregan el numero telefonico */

document.querySelector(".btnEnviar").addEventListener("click", () => {
  //* Le doy una accion al boton que realize una funcion */
  const pagina = Number(document.querySelector(".numero-telefonico").value); //* Creo una constante que almacena el numero */

  // console.log(paginaWhats + pagina); //* Muestro en consola la direccion y el telefono */

  nuevoWhats = window.open(paginaWhats + pagina); //* Invoco a la Accion de abrir un nuevo Chat de Whats */
});
