const prompt = require('prompt-sync')();

let vet = []

function adicionar_elementos () {
    let qtd = prompt("Digite a quantidade de elementos que o vetor deve ter (máximo 50): ")
    if(qtd <= 50 && qtd >= 1){
        for(let i = 0; i < qtd; i++){
            vet.push(Number(prompt(`Insira o ${i+1}º valor: `)))
        }
        console.log("Vetor atualizado: ")
        for(let i = 0; i < vet.length; i++){
            console.log(`${vet[i]}`)
        }
    }
    else{
        console.log("Inválido, digite um número de 1 a 50.")
    }
}

function remover_elemento (){
    let element = prompt("Insira o valor do elemento que deseja remover: ")

    for(let i = 0; i < vet.length; i++){
        if(element == vet[i]){
            vet[i] = NaN
        }
    }
    console.log("Vetor atualizado: ")
    for(let i = 0; i < vet.length; i++){
        console.log(`${vet[i]}`)
    }
}

function remover_posicao (){
    let position = prompt("Insira a posição do vetor em que deseja remover um elemento: ")

    for(let i = 0; i < vet.length; i++){
    if(position == i){
        vet[i] = NaN
    }
    }
    console.log("Vetor atualizado: ")
    for(let i = 0; i < vet.length; i++){
        console.log(`${vet[i]}`)
    }
}

function soma_par (){
    let soma_par = 0
    for(let i = 0; i < vet.length; i++){ 
         if(vet[i] % 2 == 0){
              soma_par += vet[i]
          }    
    }
    console.log(`Soma dos números pares: ${soma_par}`)
}

function soma_impar (){
    let soma_impar = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i] % 2 != 0){
            soma_impar += vet[i]
         }    
    }
    console.log(`Soma dos números impares: ${soma_impar}`)
}

function soma_indices (){
    console.log("Digite os indices que deseja realizar a soma: ")
    let i1 = prompt("")
    let i2 = prompt("")
    let somatoria = 0
    for(let i = 0; i < vet.length; i++){
        if(i >= i1 && i <= i2){
            somatoria += vet[i]
        }
    }
    console.log(`Somatória dos índices: ${somatoria}`)

}

do{
    console.log("Escolha uma das opções: \n 0 - Encerrar programa\n 1- inserir elementos \n 2- remover um elemento dado seu valor \n 3- remover um elemento dada sua posição \n 4- Somar os elementos pares \n 5- Somar os elementos impares \n 6- Somar 2 índices")
    var caso = Number(prompt(" "))

    switch(caso){
        case 0:
        break;
        case 1: 
            adicionar_elementos()
        break;
        case 2:
            remover_elemento ()
        break;
        case 3:
            remover_posicao ()
        break;
        case 4:
            soma_par ()
        break;
        case 5:
            soma_impar()
        break;
        case 6:
            soma_indices()
        break;
        default:
            console.log("Número inválido");
    }
}
while(caso != 0);