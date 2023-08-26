// Exemplo básico de Promise
let minhaPromise = new Promise(function(resolve, reject) {
    // Simulando uma operação assíncrona
    setTimeout(function() {
        resolve("Operação concluída!");
        // reject("Erro ocorreu!"); // Descomente esta linha para simular um erro
    }, 2000);
});

minhaPromise.then(function(resultado) {
    console.log(resultado);
}).catch(function(erro) {
    console.error("Erro:", erro);
});
