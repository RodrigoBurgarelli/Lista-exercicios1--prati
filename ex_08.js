const prompt= require('prompt-sync')();
console.log('Informe dois valor que não são idênticos:');
let num1 = Number(prompt('Escreva o primeiro valor: '));
let num2 = Number(prompt('Escreva o segundo valor: '));

if (num1 == num2){
    console.log('Valor informados não são válidos porque são idênticos.')
} else if(num1>num2){
    console.log(`Os valores informados em ordem crescente é: ${num2} , ${num1}`);
}else{
    console.log(`Os valores informados em ordem crescente é: ${num1} , ${num2}`);
};