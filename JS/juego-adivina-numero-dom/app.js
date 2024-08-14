let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  // innnerHTML añadirá código HTML a mis objetos. 
  elementoHTML.innerHTML = texto
  return;
}

function userVerify() {
  let numeroUsuario = parseInt(document.getElementById("userNumber").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste! Lo hiciste con ${intentos} ${intentos == 1 ? 'intento': 'intentos'}.`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertó.
    if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p',`El número secreto es menor a ${numeroUsuario}`);
    } else {
        asignarTextoElemento('p',`El número secreto es mayor a ${numeroUsuario}`);
    }
    intentos++;
    cleanBox();
  }
  return;
}

function cleanBox() {
  document.querySelector('#userNumber').value = '';
}

function generateRandomNumber(){
  return Math.floor(Math.random()*10)+1;
}

function initialConditions() {
  asignarTextoElemento('h1','Juego del número secreto!');
  asignarTextoElemento('p',`Indica un número del 1 al 10`);
  RandomNumber = generateRandomNumber();
  intentos = 1;
  console.log(RandomNumber);

  //Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function restartGame() {
  //limpiar caja
  cleanBox();
  //Indicar mensaje de intervalo de números 
  //Generar el número aleatorio
  //Inicializar el número intentos
  initialConditions(); 
}

initialConditions();