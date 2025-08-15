const prompt = require('prompt-sync')();

let vet1 = []
let vet2 = []
let vet3 = []

console.log("Digite os valores do primeiro e do segundo vetor, respectivamente: ")

console.log("1º vetor: ")
for(let i = 0; i < 25; i++){
    vet1[i] = Number(prompt(`${i+1}º valor: `))
}

console.log("2º vetor: ")
for(let i = 0; i < 25; i++){
    vet2[i] = Number(prompt(`${i+1}º valor: `))
}

let x = 0
let y = 0
for(let i = 0; i < 50; i++){
    if(i % 2 == 0){
        vet3[i] = vet1[x]
        x++
    }
    else{
        vet3[i] = vet2[y]
        y++
    }
}

console.log(`${vet3}`)