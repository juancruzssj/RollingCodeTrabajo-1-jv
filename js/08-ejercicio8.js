let numero = prompt("Por favor, ingresa un número:");

numero = Number(numero);

if (numero % 2 === 0) {
    document.write(`El ${numero} es divisible por 2.`);
} else {
    document.write(`El ${numero} no es divisible por 2.`);
}