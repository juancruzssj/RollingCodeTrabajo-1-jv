let numero1 = prompt("Por favor, ingresa el primer número:");
let numero2 = prompt("Por favor, ingresa el segundo número:");
let numero3 = prompt("Por favor, ingresa el tercer número:");

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);

if (numero1 >= numero2 && numero1 >= numero3) {
    document.write(`El ${numero1} es el número más grande.`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    document.write(`El ${numero2} es el número más grande.`);
} else {
    document.write(`El ${numero3} es el número más grande.`);
}