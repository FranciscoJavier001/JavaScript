let secretNumber = Math.trunc(Math.random() * 20) + 1; //* Voy a conseguir un numero con metodos */
let score = 20; //* Variable */
let highscore = 0; //* Variable */

const displayMessage = message => {
  //* Funcion que recibe un mensaje */
  document.querySelector('.message').textContent = message; //* Coloca el texto en el DOM en una clase con la variable recibida */
};

document.querySelector('.check').addEventListener('click', function () {
  //* Seleciono una clase, le agrego un evento y realiza esta funcion */
  const guess = Number(document.querySelector('.guess').value); //* Variable que es un numero, que estaba en la clase guess y muestro su valor */
  console.log(guess, typeof guess); //* Muestro por consola la variable guess declarada arriba y su tipo */

  if (!guess) {
    //* Si la variable guess es diferente, osea siempre ejecutate */
    displayMessage('No'); //* Despliega el mensaje no, porque es el inicial */
  } else if (guess === secretNumber) {
    //* Pero cuando la variable guess sea igual al numero secreto */
    displayMessage('Correcto'); //* Despliega el mensaje que dice Correcto */
    document.querySelector('.number').textContent = secretNumber; //* En donde esta el signo de mas, muestra el numero secreto */

    document.querySelector('body').style.backgroundColor = '#60b347'; //* Cambiale el body a la pagina por ser el numero correcto */
    document.querySelector('.number').style.width = '30rem'; //* Haz mas grande, donde tenia el signo de ? */

    if (score > highscore) {
      //* Cuando el score sea mayor al highscore */
      highscore = score; //* Define el highscore como el score */
      document.querySelector('.highscore').textContent = highscore; //* Dom clase highscore, cambiar el contenido del texto */
    }
  } else if (guess !== secretNumber) {
    //* Pero cuando guess sea siferente al numeroSecreto */
    if (score > 1) {
      //* Si el score es mayor a 1 */
      displayMessage(guess > secretNumber ? 'Alto' : 'Bajo'); //* Muestra en pantalla si el numero es mayor o menor */
      score--; //* Disminuye la puntuacion del Score */
      document.querySelector('.score').textContent = score; //* Agrega el nuevo valor del score */
    } else {
      //* En el caso que tenga el usuario 0 vidas */
      displayMessage('Perdiste'); //* Muestra en el DOM perdiste */
      document.querySelector('.score').textContent = 0; //* Pon en 0 el score */
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //* Bueno a la clase again le voy a agregar una funcion */
  score = 20; //* Variable que tenga un valor */
  secretNumber = Math.trunc(Math.random() * 20) + 1; //* Vuelvo a sacar un numero secreto */

  displayMessage('Empezando'); //* Mensaje en el DOM */
  document.querySelector('.score').textContent = score; //* El score mantenlo en 20 */
  document.querySelector('.number').textContent = '?'; //* Lo que le asigno al campo que esta en blanco */
  document.querySelector('.guess').value = ''; //* Sin ningun tipo de valor en el guess */

  document.querySelector('body').style.backgroundColor = '#222'; //* Regreso al background del inicio del juego */
  document.querySelector('.number').style.width = '15rem'; //* Regreso a la anchura antes del juego */
});
