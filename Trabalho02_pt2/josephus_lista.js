const prompt = require('prompt-sync')();

function Node(value) {
    this.value = value
    this.next = null
}

function Circular() {
    let head = null
    let length = 0

    this.insert = function(value) {
        let node = new Node(value)

        if (!head) {
            head = node
            node.next = head
        } else {
            let current = head
            while (current.next !== head) {
                current = current.next
            }
            current.next = node
            node.next = head
        }

        length++
    }

    this.josephus = function(m) {
        let current = head
        let previous = null

        while (length > 1) {
            for (let i = 1; i < m; i++) {
                previous = current
                current = current.next
            }

            previous.next = current.next

            if (current === head) {
                head = current.next
            }

            current = current.next
            length--
        }

        return head.value
    }
}

//Exemplo:
let n = 7
let m = 3

let list = new Circular()

for (let i = 1; i <= n; i++) {
    list.insert(i)
}

let sobrevivente = list.josephus(m)
console.log(`Pessoa sobrevivente: ${sobrevivente}`)
