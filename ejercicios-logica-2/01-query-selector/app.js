//? Desafíos

//* Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let tittleH1 = document.querySelector('h1')
tittleH1.innerHTML = "Hora del Desafío"

//* Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function clickConsole(){
  console.log("El botón fue clicado");
}

//* Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function clickPrompt(){
  ciudad = prompt("Escribe el nombre de una ciudad de Brasil");
  alert(`Estuve en ${ciudad} y me acordé de ti`)
}

//* Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function clickAlert(){
  alert('Yo amo JS')
}

//* Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function clickSuma(){
  num1 = Number(prompt("Escribe un número"));
  num2 = Number(prompt("Escribe otro número"));
  result = num1 + num2;
  alert(`La suma de ${num1} y ${num2} es ${result}.`)
}
