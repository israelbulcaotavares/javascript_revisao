//O método filter cria um novo array com todos os elementos que
// passam por um teste especificado por uma função.
let numeros = [1, 2, 3, 4, 5];

let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(pares); // [2, 4]
