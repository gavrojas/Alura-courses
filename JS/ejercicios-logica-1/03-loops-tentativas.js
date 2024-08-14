// ?Desafíos:

// *Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador1 = 1;
while (contador1 <= 10){
  console.log(`Valor contador: ${contador1}`);
  contador1++;
}
// *Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador2 = 10;
while (contador2 >= 0){
  console.log(`Valor contador: ${contador2}`);
  contador2--;
}
// *Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroCuentaProgresiva = Number(prompt("Escribe un número: "));
let contador3 = 0;
while (contador3 <= numeroCuentaProgresiva){
  console.log(`Cuenta progresiva: ${contador3}`);
  contador3++;
}