const prompt = require('prompt-sync')();

function josephusVetor(n, m) {
    let vet = []

    for (let i = 1; i <= n; i++) {
        vet.push(i)
    }

    let indice = 0

    while (vet.length > 1) {
        indice = (indice + m - 1) % vet.length
        vet.splice(indice, 1)
    }

    return vet[0]
}

//Exemplo:
let n = 7
let m = 3

let sobrevivente = josephusVetor(n, m)
console.log(`Pessoa sobrevivente: ${sobrevivente}`)
