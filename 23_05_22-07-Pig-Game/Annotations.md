if ((activePlayer = 0)) {
if ((activePlayer = 1)) {
} else {
activePlayer = 0;
}
}

vs

activePlayer = activePlayer === 0 ? 1 : 0; //_ Si el jugados activo, es este mismo en su atributo 0, cambialo 1, sino dejalo en 0 _/
