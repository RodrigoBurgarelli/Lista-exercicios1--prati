let n1 = 0;
let n2 = 1;
let n3 = 0;
let sequencia ="";

sequencia = n1 + " " + n2

for(let i=0; i<8; i++){
    n3 = n1+n2
    sequencia += " "+n3
    n1=n2
    n2=n3
};
console.log(`Os 10 primeiros valores da sequencia de Fibonacci são:` + sequencia);