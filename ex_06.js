const prompt = require('prompt-sync')();

let lado1 = Number(prompt('Insira a medida do primeiro lado do triangulo.'));
let lado2 = Number(prompt('Insira a medida do segundo lado do triangulo.'));
let lado3 = Number(prompt('Insira a medida do terceiro lado do triangulo.'))

if (lado1<lado2 + lado3 && lado2< lado1+lado3 && lado3<lado1+lado2){
    if( (lado1==lado2 && lado2 != lado3) || (lado1==lado3 && lado3 != lado2) || (lado2==lado3 && lado3 != lado1)){
        console.log('As medidas informadas formam um triangulo isósceles.')
    }else if(lado1!=lado2 && lado2!=lado3 && lado3!=lado1){
        console.log('As medidas informadas formam um triangulo escaleno.')
    }else if(lado1 == lado2 && lado2==lado3){
        console.log('As medidas informadas formam um triangulo equilátero.')
    }
}else{
    console.log('As medidas fornecidas não formam um triângulo.')
};