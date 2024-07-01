//? Definiendo mis variables
let numeroUsuario = 0;
let intentos = 1;
let palabraIntento = 'intento';
let numeroSecreto = 2;

console.log("Entrando a ciclo repetitivo hasta que el usuario adivine");

while(numeroUsuario != numeroSecreto){
    //* Pedimos al usuario que adivine el número por medio de un prompt que le provee al usuario una caja input donde escribirlo y enviarlo 
    numeroUsuario = prompt("Escribe un número entre 1 y 10 por favor:");

    //* Imprimimos número por consola para asegurarnos que capturamos correctamente el número del usuario
    console.log(`El número que ingresó el usuario es: ${numeroUsuario}`);

    /* 
    ? Usamos un if - else para comparar el número que ingresó el usuario con el número definido por nosotros. 
    */
    console.log("Evaluando igualdad...");

    if (numeroUsuario == numeroSecreto) {
        // El usuario acertó, la condición se cumple, es decir tiene valor verdadero.
        // Le avisamos al usuario que ha acertado el número y le decimos cuál era
        console.log(`La condición es: ${numeroUsuario == numeroSecreto}`);
        alert(`Acertaste, el número secreto es: ${numeroSecreto} y tu escribiste: ${numeroUsuario}.\n
            Lo hiciste con ${intentos} ${palabraIntento}.`);
    } else {
        // El usuario no acertó, la condición no se cumple, es decir tiene valor falso. 
        if (numeroUsuario > numeroSecreto) {
            alert(`El número secreto es menor a ${numeroUsuario}`);
        } else {
            alert(`El número secreto es mayor a ${numeroUsuario}`);
        }
        //Incrementamos el contador cuando el usuario no acierta
        intentos ++;
        palabraVeces = 'intentos';

        // Le informamos al usuario que no ha acertado.
        console.log(`La condición es: ${numeroUsuario == numeroSecreto}`);
    }
}