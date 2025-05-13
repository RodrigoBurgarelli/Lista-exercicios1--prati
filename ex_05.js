const prompt = require('prompt-sync')();

let peso = parseFloat(prompt('Insira o peso: '));
let altura = parseFloat(prompt('Insira a altura: '));

let imc = peso / (altura * altura);

imc = imc.toFixed(1);

if (imc<18.5){
    console.log('O seu IMC está na categoria BAIXO PESO.')
} else if(imc>=30){
    console.log('O seu IMC está na categoria OBESIDADE.')
}else if (imc>=18.5 && imc<24.9){
    console.log('O seu IMC está na categoria PESO NORMAL.')
}else {
    console.log('O seu IMC está na categoria SOBREPESO.')
};