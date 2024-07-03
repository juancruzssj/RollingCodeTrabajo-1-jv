let numero = prompt("Por favor, ingresa un número:");

numero = Number(numero);

let divisores = [];

if (numero % 2 === 0) {
    divisores.push(2);
}
if (numero % 3 === 0) {
    divisores.push(3);
}
if (numero % 5 === 0) {
    divisores.push(5);
}
if (numero % 7 === 0) {
    divisores.push(7);
}

if (divisores.length > 0) {
    let mensaje = `El ${numero} es divisible por `;
    for (let i = 0; i < divisores.length; i++) {
        mensaje += divisores[i];
        if (i < divisores.length - 1) {
            mensaje += ', ';
        } else {
            mensaje += '.';
        }
    }
    document.write(mensaje);
} else {
    document.write(`El ${numero} no es divisible por 2, 3, 5 ni 7.`);
}
