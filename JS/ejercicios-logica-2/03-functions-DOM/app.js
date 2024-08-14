//? Desafíos

//* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calculateIMC(altura, peso){
  imc = peso * Math.pow(altura, 2);
  console.log(`El IMC calculado es: ${imc}`);
  return;
}

//* Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calculateFactorial(num1){
  // función recursiva
  if (num1 > 1){
      return num1 * factorial(num1 - 1);
  }
  else {
      return 1;
  }
}

function mostrarFactorial(num1){
  console.log(`El factorial de ${num1} es ${calculateFactorial(num1)}.`);
}

//* Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertReales(dolares){
  real = 4,8
  valor = dolares * real;
  console.log(`${dolares} ${dolares == 1 ? 'dolar': 'dolares'} equivalen a ${valor} ${valor == 1 ? 'real': 'reales'}.`);
  return; 
}
//* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calculateAreaRectangle(altura, ancho){
  area = altura * ancho;
  console.log(`El área es: ${area}`);
  return;
}

function calculatePerimeterRectangle(altura, ancho){
  perimetro = 2*altura + 2*ancho;
  console.log(`El perímetro es: ${perimetro}`);
  return;
}

//* Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calculateAreaCircle(radio){
  area = Math.PI * Math.pow(radio, 2);
  console.log(`El área es: ${area}`);
  return;
}

function calculatePerimeterCircle(radio){
  perimetro = 2*Math.PI * radio;
  console.log(`El perímetro es: ${perimetro}`);
  return;
}

//* Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function multiplierTable(num){
  console.log(`Tabla de multiplicar de ${num}`)
  for (i=0; i<=10; i++){
    result = num * i
    console.log(`${num} x ${i} => ${result}`)
  }
}
