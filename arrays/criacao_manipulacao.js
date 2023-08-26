// criando um array
let numeros = [13,21,37,42,51];

// acessando elementos do array
let primeiroNumero = numeros[0];
// imprimindo o elemento do array que foi acessado
console.log(primeiroNumero);

//modificando elementos do array
let segundoNumero=  numeros[2] = 10;
console.log(segundoNumero);

// Adiciona o número 6 no final do array
numeros.push(6)  
console.log(numeros);

//Remover o último elemento do array
numeros.pop();
console.log(numeros);

//Tamanho do array
let tamanho = numeros.length
console.log(tamanho)