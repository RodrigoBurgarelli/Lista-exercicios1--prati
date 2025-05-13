const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Informe o número inteiro: '));

if (numero % 1 === 0){
    for(let i=0; i<10; i++){
        console.log(numero)
    }
}else{
    console.log('O número informado não é inteiro.')
};