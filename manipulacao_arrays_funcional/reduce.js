//O método reduce é usado para reduzir um array a um único valor,
// aplicando uma função a todos os elementos do array.
let numeros = [1, 2, 3, 4, 5];

let soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(soma); // 15
