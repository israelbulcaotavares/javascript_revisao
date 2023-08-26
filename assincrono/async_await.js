// Simulação de uma operação assíncrona que retorna uma Promise
function simularOperacaoAssincrona() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Operação concluída com sucesso!");
              reject("Erro ocorreu!"); // Descomente esta linha para simular um erro
        }, 2000);
    });
}

// Função assíncrona usando async/await
async function minhaFuncao() {
    try {
        let resultado = await simularOperacaoAssincrona();
        console.log(resultado);
    } catch (erro) {
        console.error("Erro:", erro);
    }
} 
minhaFuncao();