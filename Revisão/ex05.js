const prompt = require('prompt-sync')();

S = []

let N = Number(prompt("Digite o valor de N: "))

let somatoria = 0
for(let i = 0; i < N; i++){
    S[i] = (i+1)/((i+1)*(i+1))
    somatoria += S[i]
}


console.log(`Somatória: ${somatoria.toFixed(5)}`)