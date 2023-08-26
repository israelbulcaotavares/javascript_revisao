// Conversão de string para número
let strNumero = "42";
console.log(strNumero)
let numeroConvertido = parseInt(strNumero); // converte para inteiro
console.log(numeroConvertido)
let numeroDecimal = parseFloat("3.14"); // converte para ponto flutuante
console.log(numeroDecimal)

// Conversão de número para string
let idade = 30;
console.log(idade)
let idadeString = idade.toString(); // converte número para string
console.log(idadeString)

// Conversão para booleano
let numeroNaoZero = 5;
let numeroZero = 0;
let booleano1 = Boolean(numeroNaoZero); // true, pois números diferentes de zero são avaliados como verdadeiros
let booleano2 = Boolean(numeroZero); // false, zero é avaliado como falso
