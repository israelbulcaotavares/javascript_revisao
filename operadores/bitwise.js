let a = 5; // Representado em binário como 0101
let b = 3; // Representado em binário como 0011

let bitwiseAND = a & b; // 0001 (1 em decimal)
let bitwiseOR = a | b;  // 0111 (7 em decimal)
let bitwiseXOR = a ^ b; // 0110 (6 em decimal)
let bitwiseNOTa = ~a;   // 1111...1010 (Complemento de 2 do valor binário de 'a')
let leftShift = a << 1; // 1010 (10 em decimal) - Deslocamento à esquerda
let rightShift = a >> 1;// 0010 (2 em decimal) - Deslocamento à direita

console.log(bitwiseAND)
console.log(bitwiseOR)
console.log(bitwiseXOR)
console.log(bitwiseAND)
console.log(leftShift)
console.log(rightShift)