let RandomNumber = generateRandomNumber();

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  // innnerHTML añadirá código HTML a mis objetos. 
  elementoHTML.innerHTML = texto
  return;
}

function userVerify () {
  let userNumber = parseInt(document.getElementById("userNumber").value);

  console.log(RandomNumber);
  console.log(userNumber);

  console.log(RandomNumber === userNumber);

  return;
}

function generateRandomNumber(){
  return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Juego del número secreto')
asignarTextoElemento('p', 'Indica un número del 1 al 10')