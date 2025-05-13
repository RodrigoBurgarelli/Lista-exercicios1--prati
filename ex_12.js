const prompt = require('prompt-sync')();

let resultado = 0;
let mult = 0;

let num = Number(prompt('Insira o número para qual tabuada deve ser mostrada: '));

for(let i=0; i<10; i++){
    mult++
    resultado = num * mult
    console.log(`${num} x ${mult} = ${resultado}`)

};