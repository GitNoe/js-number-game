# Tutorial Javascript sencillo

[Referencia](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/A_first_splash)

## Resumen

Quiero que crees un sencillo juego del tipo "adivina el número". Se debe elegir un número aleatorio entre 1 y 100, luego desafiar al jugador a adivinar el número en 10 intentos. Después de cada intento, debería decirle al jugador si ha acertado o no — y si está equivocado, debería decirle si se ha quedado corto o se ha pasado. También debería decir los números que ya se probaron anteriormente. El juego terminará una vez que el jugador acierte o cuando se acaben los intentos. Cuando el juego termina, se le debe dar al jugador la opción de volver a jugar.

## Pasos que hay que dar (desglose de tareas)

1. Generar un número aleatorio entre 1 y 100.
2. Registrar el número del intento en el que el jugador se encuentre. Empezando en 1.
3. Darle al jugador una forma de adivinar cuál es el número.
4. Una vez que se ha introducido en número, registrarlo en alguna parte para que el jugador pueda ver sus intentos previos.
5. A continuación, comprobar si el número es correcto.
6. Si es correcto:
    - Mostrar un mensaje de felicitaciones.
    - Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
    - Mostrar un control que permita al jugador volver a empezar el juego.
7. Si es incorrecto y al jugador todavía le quedan intentos:
    - Decirle al jugador que ha fallado.
    - Dejar que el jugador lo intente de nuevo.
    - Incrementa el número de intentos en 1.
8. Si el jugador falla y no le quedan turnos:
    - Decirle al jugador que el juego se ha terminado.
    - Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
    - Mostrar un control que permita al jugador volver a empezar el juego.
9. Una vez que el juego se reinicia, asegúrate de que la lógica del juego y la IU (interfaz de usuario) se restablezcan por completo, luego vuelve al paso 1.
