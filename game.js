// VARIABLES

let randomNumber = Math.floor(Math.random() * 100) + 1;
// estoy asignando/generando un número al azar respecto a la variable

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
// estas constantes almacenan una referencia a sus homónimos del html

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
// estas almacenan referencias a la entrada de texto y al botón

let guessCount = 1; // conteo de intentos
let resetButton; // botón de reinicio (aún no existe)

// FUNCIONES

/* function checkGuess() {
    alert('Soy un marcador de posición');
  }
hemos creado una alerta que dice '...' cada vez que la llamamor por consola */

// función de comprobar el número
function checkGuess() {
    let userGuess = Number(guessField.value); //declaro la variable y estalezco su valor actual
    if (guessCount === 1) { //comprueba si es el primer intento del user
      guesses.textContent = 'Intentos anteriores: ';
    }
    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) { //comprueba si el numero dado es el correcto
      lastResult.textContent = '¡Felicidades! ¡Lo adivinaste!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) { //si los intentos son 10, perdemos, no se puede continuar
      lastResult.textContent = '!!!Fin del juego!!!';
      setGameOver();
    } else { //el resto de opciones, no acertar pero tener intentos aun
      lastResult.textContent = '¡Incorrecto!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = '¡El número es muy bajo!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = '¡El número es muy grande!';
      }
    }
  
    guessCount++; //estas líneas suman los intentos
    guessField.value = '';
    guessField.focus();
  }

// ejecutamos (llamamos) a la función para que se active, al corresponserse con un botón estamos tratando con un evento
guessSubmit.addEventListener('click', checkGuess);

// función de fin del juego
function setGameOver() {
    guessField.disabled = true; //deshabilita campo de texto
    guessSubmit.disabled = true; //deshabilita botón
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar nuevo juego';
    document.body.append(resetButton); //estas tres líneas generan un botón nuevo al final
    resetButton.addEventListener('click', resetGame); //evento con nueva función (abajo)
  }

// función volver a empezar
function resetGame() {
    guessCount = 1; //de nuevo

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    } //vacía el texto

    resetButton.parentNode.removeChild(resetButton); //elimina botón de reinicio

    //habilita elementos anteriores
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white'; //elimina color de fondo

    randomNumber = Math.floor(Math.random() * 100) + 1; //genera nuevo número al azar
}
