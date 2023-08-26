/*
A programação funcional promove a modularidade, a reutilização de código e a legibilidade ao enfatizar a 
composição de funções em vez de manipulação direta de dados. Isso pode levar a um código mais previsível, 
testável e fácil de entender.
*/

/*
A imutabilidade enfatiza a criação de novos valores em vez de modificar os existentes. 
Isso evita efeitos colaterais indesejados e
 facilita o rastreamento de mudanças. Funções puras não dependem de estados externos e 
 têm resultados consistentes.
*/

// Exemplo de imutabilidade e pureza
function somarArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

let numeros = [1, 2, 3, 4, 5];
let resultado = somarArray(numeros); // Resultado é sempre 15, não importa o contexto
