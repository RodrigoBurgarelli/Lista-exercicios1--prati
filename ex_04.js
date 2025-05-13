const prompt = require('prompt-sync')();

let opcao = Number( prompt('Escolha dentre as opções (1 - Opção 1, 2 - Opção 2 ou 3 - Opção 3):'));

switch(opcao){
    case 1:
        console.log('Você escolheu a primeira opção.');
        break
    case 2:
        console.log('Você escolheu a segunda opção.');
        break
    case 3:
        console.log('Você escolheu a terceira opção.');
        break
    default:
        console.log('A opção escolhida não é válida.');
        break
};