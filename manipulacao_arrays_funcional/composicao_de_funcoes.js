/*
A composição de funções é uma técnica onde você combina várias 
funções menores para criar funcionalidades mais complexas.
*/

function triplo(x) {
    return x * 3;
}

function incrementar(x) {
    return x + 1;
}

let numeros = [1, 2, 3, 4, 5];
let resultado = numeros.map(triplo).map(incrementar);
console.log(resultado); // [4, 7, 10, 13, 16]
