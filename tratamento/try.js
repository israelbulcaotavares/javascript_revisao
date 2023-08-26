try {
    // Código que pode gerar um erro
    console.log(valorNaoDefinido); // Isso resultaria em um ReferenceError
} catch (erro) {
    // Bloco catch captura e trata o erro
    console.error("Ocorreu um erro:", erro.message);
} finally {
    // Bloco finally é executado independentemente de ocorrer erro ou não
    console.log("Finalizado");
}
