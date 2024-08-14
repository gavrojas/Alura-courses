//? Definiendo mis variables
let numeroUsuario = 0;
let numeroSecreto;
let intentos = 1;
let intentosMaximos = 5;
let numeroLimite;

console.log("Entrando a ciclo repetitivo hasta que el usuario adivine");
alert("Bienvenido a esta página donde adivinarás un número aleatorio.\nTienes 5 intentos.")

numeroLimite = Number(prompt("Ingresa el límite máximo para generar el número aleatorio: "))
numeroSecreto = Math.floor(Math.random() * numeroLimite) + 1

while(numeroUsuario != numeroSecreto){
    //* Pedimos al usuario que adivine el número por medio de un prompt que le provee al usuario una caja input donde escribirlo y enviarlo 
    numeroUsuario = Number(prompt(`Escribe un número entre 1 y ${numeroLimite} por favor:`));

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
            Lo hiciste con ${intentos} ${intentos == 1 ? 'intento': 'intentos'}.`);
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

        //Colocar un límite de intentos
        if(intentos > intentosMaximos ){
            alert(`Llegaste al número máximo de ${intentosMaximos} intentos.`);
            break;
        }
    }
}