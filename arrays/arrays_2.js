
// forEach: Itera sobre todos os elementos de um array
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    console.log(numero);
});

 

// map: Cria um novo array com base na transformação dos elementos
let numeros2 = [45,76,12,75,34,12]
let quadrados = numeros2.map(function(numero) {
    return numero ** 2;
});
console.log(quadrados)

// filter: Cria um novo array com elementos que atendam a uma condição
let numeros3 = [ 35,71,11,54,75]
let numerosPares = numeros3.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numerosPares)


// reduce: Reduz o array a um único valor acumulado
let numeros4 = [54,76,125,11,45,87]
let somaTotal = numeros4.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(somaTotal)