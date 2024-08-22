let numeroSecreto = 0;
let intentos = 0;
// Para garantizar que los números aleatorios no se repitan
let listaNumerosSorteados = [];
let numeroMaximo = 10;

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
  let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  //Si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
} else {
    //Si el numero generado está incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
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