const prompt = require('prompt-sync')();

let vet = []

let n = Number(prompt("Digite a quantidade de valores da sequência: "))

vet[0] = 1
vet[1] = 1

if(n == 1){
    console.log("1")
}
else if(n < 1){
    console.log("Valor inválido.\nDigite um número maior ou igual a 1.")
}
else{
for(let i = 2; i < n-1; i++){
    vet[i] = vet[i-2] + vet[i-1]
}

console.log(`${vet}`)
}