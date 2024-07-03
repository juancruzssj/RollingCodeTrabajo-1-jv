let frase = prompt("Por favor, ingresa una frase:");
let vocalesEncontradas = '';

for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i).toLowerCase(); 
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        vocalesEncontradas += caracter;
    }
}

document.write(`Las vocales que aparecen en la frase "${frase}" son: ${vocalesEncontradas}`);
