const prompt = require('prompt-sync')();

let soma = 0
let num = 0

for (let i=0; i<5; i++){
    num = Number(prompt('Insira um número: '))
    soma += num
};

console.log(`A soma de todos os número informados é ${soma}`);