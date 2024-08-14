// ?Desafíos:

// *Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana;
diaSemana = prompt("Escribe un día de la semana: ");
if(diaSemana == "Sábado" || diaSemana == "Domingo"){
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}

// *Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroUsuario = prompt("Escribe un número: ");

if (numeroUsuario > 0){
  alert("El número que has escrito es positivo.")
} else if (numeroUsuario = 0){
  alert("El número que has escrito es cero.")
} else {
  alert("El número que has escrito es negativo.")
}

// *Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuación = prompt("Escribe tu puntuación: ");

if(puntuación >=100){
  alert("¡Felicidades, has ganado!")
} else{
  alert("Intentalo nuevamente para ganar.")
}

// *Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 500;
alert(`Su saldo es: ${saldoCuenta}.`)

// *Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("Ingresa un nombre: ")
alert(`Bienvenido a nuestra página ${nombre}`)