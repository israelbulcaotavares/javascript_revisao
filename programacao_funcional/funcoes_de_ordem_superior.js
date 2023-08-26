/*
Funções de ordem superior são funções que podem receber outras funções como argumentos ou retorná-las 
como resultado. Isso permite a abstração de comportamentos e a composição de funcionalidades.
*/
// Exemplo de função de ordem superior
function aplicarOperacao(num, operacao) {
    return operacao(num);
}

function dobro(x) {
    return x * 2;
}

function triplo(x) {
    return x * 3;
}

console.log(aplicarOperacao(5, dobro)); // 10
console.log(aplicarOperacao(5, triplo)); // 15
