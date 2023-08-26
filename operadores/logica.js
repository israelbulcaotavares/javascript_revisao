let temCarteira = true;
let temDinheiro = false;

let podeDirigir = temCarteira && temDinheiro; // AND lógico
let podeComprar = temCarteira || temDinheiro; // OR lógico
let naoPodeComprar = !podeComprar; // NOT lógico

console.log(podeDirigir)
console.log(podeComprar)
console.log(naoPodeComprar)