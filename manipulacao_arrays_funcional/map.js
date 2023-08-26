/*
O método map é usado para transformar cada elemento de um array, 
gerando um novo array do mesmo tamanho com os resultados das transformações.
*/
let numeros = [1, 2, 3, 4, 5];

let dobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(dobrados); // [2, 4, 6, 8, 10]
