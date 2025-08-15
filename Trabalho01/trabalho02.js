const prompt = require('prompt-sync')();

//Funções para gerar os vetores:

// 100 elementos:

function vet_ordenado100 (vetor){
    for(let i = 0; i < 100; i++){
        vetor[i] = i
    }
}

function vet_invertido100 (vetor){
    for(let i = 0; i < 100; i++){
        vetor[i] = 100 - i
    }
}

function vet_aleatorio100 (vetor){
    for(let i = 0; i < 100; i++){
        vetor.push(Math.floor(Math.random() * 10001))
    }
}

// 1000 elementos:

function vet_ordenado1000 (vetor){
    for(let i = 0; i < 1000; i++){
        vetor[i] = i
    }
}

function vet_invertido1000 (vetor){
    for(let i = 0; i < 1000; i++){
        vetor[i] = 1000 - i
    }
}

function vet_aleatorio1000 (vetor){
    for(let i = 0; i < 1000; i++){
        vetor.push(Math.floor(Math.random() * 10001))
    }
}

// 10000 elementos:

function vet_ordenado10000 (vetor){
    for(let i = 0; i < 10000; i++){
        vetor[i] = i
    }
}

function vet_invertido10000 (vetor){
    for(let i = 0; i < 10000; i++){
        vetor[i] = 10000 - i
    }
}

function vet_aleatorio10000 (vetor){
    for(let i = 0; i < 10000; i++){
        vetor.push(Math.floor(Math.random() * 100001))
    }
}

// 100000 elementos:

function vet_ordenado100000 (vetor){
    for(let i = 0; i < 100000; i++){
        vetor[i] = i
    }
}

function vet_invertido100000 (vetor){
    for(let i = 0; i < 100000; i++){
        vetor[i] = 100000 - i
    }
}

function vet_aleatorio100000 (vetor){
    for(let i = 0; i < 100000; i++){
        vetor.push(Math.floor(Math.random() * 1000001))
    }
}

//Funções para chamar cada um dos algorítimos de ordenação:

function bubble_sort (vet){
    let cont = 0
do{
    cont = 0
    for(let i = 0; i < vet.length -1; i++){
        let v1 = vet[i]
        let v2 = vet[i+1]

        if(vet[i] > vet[i+1]){
            vet[i] = v2
            vet[i+1] = v1
            cont++
        }
    }
}
while(cont != 0)
}

function selecao_direta(vet){
    for(let i = 0; i < vet.length - 1; i++){
        let menor = vet[i]
        let pos = i  
        for(let j = i; j < vet.length; j++){
            if(vet[j] <= menor){
                menor = vet[j]
                pos = j
            }
        }
        vet[pos] = vet[i]
        vet[i] = menor
        
    }
}

function insercao_direta(vet){
    let aux
for(let i = 1; i < vet.length ; i++){
    let j = i - 1
    aux = vet[i]
    while(j >= 0 && aux < vet[j]){
        vet[j+1] = vet[j]
        j--
    }
    vet[j+1] = aux
}
}

function quicksort (vet, left, right){
    let i = left
    let j = right
    let meiodx = Math.floor((left+right)/2)
    let meio = parseInt(vet[meiodx])

    while(i <= j){
        while(parseInt(vet[i]) < meio){
            i++
        }
        while(parseInt(vet[j]) > meio){
            j--
        }
        if(i <= j){
            let aux = vet[i]
            vet[i] = vet[j]
            vet[j] = aux
            i++
            j--
        }
    }

    if(left < j){
        quicksort(vet, left, j)
    }
    if(i < right){
        quicksort(vet, i, right)
    }

    return vet
}

//Gerando os vetores:

// 100 elementos:
let vet1_100 = []
vet_ordenado100(vet1_100)

let vet2_100 = []
vet_invertido100(vet2_100)

let vet3_100 = []
vet_aleatorio100(vet3_100)

// 1000 elementos:
let vet1_1000 = []
vet_ordenado1000(vet1_1000)

let vet2_1000 = []
vet_invertido1000(vet2_1000)

let vet3_1000 = []
vet_aleatorio1000(vet3_1000)

// 10000 elementos:
let vet1_10000 = []
vet_ordenado10000(vet1_10000)

let vet2_10000 = []
vet_invertido10000(vet2_10000)

let vet3_10000 = []
vet_aleatorio10000(vet3_10000)

// 100000 elementos:
let vet1_100000 = []
vet_ordenado100000(vet1_100000)

let vet2_100000 = []
vet_invertido100000(vet2_100000)

let vet3_100000 = []
vet_aleatorio100000(vet3_100000)

//Medindo o tempo de execução de cada algoritmo

function medir_tempo(nome_algoritmo, funcao, vetor_original, tipo_vetor, tamanho) {
    const vetor_copia = [...vetor_original];
    const inicio = performance.now();
    
    if (nome_algoritmo === "Quicksort") {
        funcao(vetor_copia, 0, vetor_copia.length - 1);
    } else {
        funcao(vetor_copia);
    }

    const fim = performance.now();
    console.log(`Tempo ${nome_algoritmo} (${tipo_vetor}, ${tamanho} elementos): ${(fim - inicio).toFixed(4)} ms`);
}

function testar_todos(vet_ordenado, vet_invertido, vet_aleatorio, tamanho) {
    const algoritmos = [
        { nome: "Bubble Sort", funcao: bubble_sort },
        { nome: "Seleção Direta", funcao: selecao_direta },
        { nome: "Inserção Direta", funcao: insercao_direta },
        { nome: "Quicksort", funcao: quicksort }
    ];

    const tipos = [
        { nome: "ordenado", vetor: vet_ordenado },
        { nome: "invertido", vetor: vet_invertido },
        { nome: "aleatório", vetor: vet_aleatorio }
    ];

    for (let algoritmo of algoritmos) {
        for (let tipo of tipos) {
            medir_tempo(algoritmo.nome, algoritmo.funcao, tipo.vetor, tipo.nome, tamanho);
        }
    }

    console.log("----------------------------------------------------");
}

// Testando com 100 elementos
testar_todos(vet1_100, vet2_100, vet3_100, 100);

// Testando com 1000 elementos
testar_todos(vet1_1000, vet2_1000, vet3_1000, 1000);

// Testando com 10000 elementos
testar_todos(vet1_10000, vet2_10000, vet3_10000, 10000);

// Testando com 100000 elementos
testar_todos(vet1_100000, vet2_100000, vet3_100000, 100000);