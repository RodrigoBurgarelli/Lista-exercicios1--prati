const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;
let media;
let numero;


do{
    numero = parseFloat(prompt('Insira o número decimal: '))

    if (numero !== 0){
        soma += numero
        quantidade++
    }
}while (numero !== 0);

media = soma / quantidade;
media = media.toFixed(2);

console.log(`A média aritmética dos números decimais inseridos é ${media}`);