//? Desafíos

//* Crear una función que muestre "¡Hola, mundo!" en la consola.
function helloWorld(){
  console.log("¡Hola, mundo!");
}

//* Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function helloUser(){
  nombre = prompt("Escribe tu nombre");
  console.log(`¡Hola, ${nombre}!`)
}

//* Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicateNumber(){
  num1 = Number(prompt("Escribe un número"));
  result = num1 * 2;
  console.log(`El doble de ${num1} es ${result}.`);
  return result;
}

//* Crear una función que reciba tres números como parámetros y devuelva su promedio.
function average(){
  num1 = Number(prompt("Escribe un número"));
  num2 = Number(prompt("Escribe un segundo número"));
  num3 = Number(prompt("Escribe un tercer número"));
  result = (num1 + num2 + num3) / 3;
  result = result.toFixed(2)
  console.log(`El promedio de ${num1}, ${num2} y ${num3} es ${result}.`);
  return result;
}

//* Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function biggest(){
  num1 = Number(prompt("Escribe un número"));
  num2 = Number(prompt("Escribe un segundo número"));
  if (num1 > num2) {
    result = num1
  } else{
    result = num2
  }

  console.log(`El número mayor entre ${num1} y ${num2} es ${result}.`);
  return result;
}

//* Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function power(){
  num1 = Number(prompt("Escribe un número"));
  result = Math.pow(num1, 2);
  console.log(`El resultado de multiplicar ${num1} por si mismo es ${result}.`)
  return result;
}
