/*
No problema de Josephus, as vantagens e desvantagens de cada caso de implemetenção (lista/vetor) são:

O vetor é mais fácil de implementar e entender. Ele permite acessar qualquer elemento diretamente pelo índice e funciona muito bem com listas pequenas ou médias. No entanto, cada vez que um elemento é removido, os outros precisam ser reorganizados, o que pode deixar o processo mais lento em listas grandes.

Já a lista encadeada circular é ideal para simular o comportamento circular do problema. Ela permite remover elementos de forma mais eficiente, pois não precisa reorganizar os outros. Isso a torna mais vantajosa quando se trabalha com grandes quantidades de dados. Por outro lado, ela é mais difícil de implementar, usa mais memória (por conta dos ponteiros) e não permite acesso direto aos elementos, é preciso percorrer a lista até encontrar o que se quer.
*/