const prompt = require('prompt-sync')();

function expressaoValida(expressao) {
  const pilha = []
  const aberturas = ['(', '[', '{']
  const fechamentos = [')', ']', '}']

  for (let char of expressao) {
    if (aberturas.includes(char)) {
      pilha.push(char)
    } else if (fechamentos.includes(char)) {
      const topo = pilha.pop()
      if (
        (char === ')' && topo !== '(') ||
        (char === ']' && topo !== '[') ||
        (char === '}' && topo !== '{')
      ) {
        return false
      }
    }
  }

  return pilha.length === 0
}

console.log(expressaoValida("{[()]}")) 
console.log(expressaoValida("{[(])}")) 
console.log(expressaoValida("2 * (3 + [5 - {7 / 2}])")) 
console.log(expressaoValida("(){[}]")) 
