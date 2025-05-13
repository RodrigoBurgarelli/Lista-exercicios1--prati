const prompt = require('prompt-sync')();

let nota = Number (prompt('Insira a nota do aluno:'));

if ( nota<5){
    console.log(`O aluno tirou a nota ${nota} e está REPROVADO.`)
} else if( nota >= 7){
    console.log(`O aluno tirou a nota ${nota} e está APROVADO.`)
}else{
    console.log(`O aluno tirou a nota ${nota} e está em RECUPERAÇÃO.`)
};