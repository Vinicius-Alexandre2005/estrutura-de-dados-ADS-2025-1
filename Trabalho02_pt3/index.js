const prompt = require('prompt-sync')();

// Adicionar elementos:

function add_element(caracter, vet){
    element = caracter.charCodeAt(0)
    let x = element % 11
    let cont = 1
    function add(x, cont){
        let n = vet.length
        if(cont <= n){
            if(vet[x] == null){
                vet[x] = caracter
            }
            else if(x <= vet.length){
                x = x+1
                cont++
                return add (x, cont)
            }
            else{
                x = 0
                cont++
                return add (x, cont)
            }
        }
        else{
            console.log("O vetor está cheio!")
        }
    }
    add(x, cont)
}

// Buscar elementos:

function buscar(element, vet){
    let x = element % 11
    let cont = 1
    function busca(x, cont){
        let n = vet.length
        if(cont <= n){
            if(vet[x] == element){
                return x
            }
            else if(x <= vet.length){
                x = x+1
                cont++
                return busca (x, cont)
            }
            else{
                x = 0
                cont++
                return busca (x, cont)
            }
        }
        else{
            return -1
        }
    }
    let z = busca(x, cont)
    return z
}

// Teste:

let vet = new Array (11)

add_element("A", vet)
add_element("B", vet)
add_element("C", vet)
add_element("D", vet)
add_element("E", vet)
add_element("F", vet)
add_element("G", vet)
add_element("H", vet)
add_element("I", vet)

console.log(vet)

let s = buscar("H", vet)
console.log(`${s}`)
