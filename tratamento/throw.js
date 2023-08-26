function dividir(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
}

try {
    let resultado = dividir(10, 0);
    console.log(resultado);
} catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
}
