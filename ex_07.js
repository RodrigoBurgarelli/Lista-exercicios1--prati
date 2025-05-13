const prompt = require('prompt-sync')();

let quant = Number(prompt('Insira a quantidade de maçãs que deseja comprar: '));

let conta = 0;

if (quant<12){
    conta = quant *0.3
}else{
    conta = quant*0.25
};
conta = conta.toFixed(2);

console.log(`A compra de ${quant} maçãs resulta no valor total de R$${conta}`);