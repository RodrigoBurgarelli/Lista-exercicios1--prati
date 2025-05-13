const prompt = require('prompt-sync')();

let i;

let n = Number(prompt('Informe o número que deve ser calculado o fatorial: '));
let resultado = n;
let multiplicador = 0

for(i=n; i>0; i--){
    multiplicador=i-1
    if(multiplicador>0){
        resultado = resultado * multiplicador
    }
}
console.log(`O fatorial do número ${n} é ${resultado}`)