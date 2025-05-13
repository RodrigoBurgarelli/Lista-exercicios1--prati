const prompt = require('prompt-sync')();
let idade = Number(prompt('Insira a idade da pessoa:'));

if (idade < 13){
    console.log(`A pessoa é uma Criança.`)
} else if (idade >=13 && idade <18){
    console.log(`A pessoa é um Adolescente.`)
}else if(idade >=18 && idade <65){
    console.log(`A pessoa é um Adulto.`)
}else {
    console.log(`A pessoa é um Idoso.`)
};