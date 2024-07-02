// ?Desafíos:

// *Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Bienvenido a nuestra página");

// *Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombreUsuario = prompt("Escribe tu nombre: ");

console.log(`Hola ${nombreUsuario}`);

// *Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let miNombre = "Gabriela";

alert(`Hola ${miNombre}`)

// *Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajeUsuario = prompt("¿Cuál es el lenguaje de programación que más te gusta?")

console.log(`Tu lenguaje favorito es: ${lenguajeUsuario}`);

// *Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 4;
let valor2 = 19;
let resultadoSuma = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a: ${resultadoSuma}.`);

// *Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor3 = 34;
let valor4 = 19;
let resultadoResta = valor3 - valor4;

console.log(`La diferencia entre ${valor3} y ${valor4} es igual a: ${resultadoResta}.`);

// *Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = parseInt(prompt("Ingresa tu edad: "));

if (edad >=18){
  console.log("Eres mayor de edad.");
}else {
  console.log("Eres menor de edad.");
}

// *Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = parseInt(prompt("Ingresa un número: "))

if (numero > 0){
  alert("El número es positivo.")
} else if (numero = 0){
  alert("El número es cero.")
} else {
  alert("El número es negativo.")
}

// *Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numeros = 1;

while (numeros <= 10){
  console.log(`Valor contador: ${numeros}`);
  contador1++;
}

// *Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 8.8;

if (nota >= 7){
  console.log("Aprobado");
} else{
  console.log("Reprobado");
}

// *Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
console.log(`Numero aleatorio generado por Math.random entre 0 y 1: ${Math.random()}`);

// *Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
console.log(`Numero aleatorio generado por Math.random entre 1 y 10: ${Math.floor(Math.random()*10) + 1}`);

// *Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
console.log(`Numero aleatorio generado por Math.random entre 1 y 1000: ${Math.floor(Math.random()*1000) + 1}`);