let pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Engenheira"
};

let temIdade = "idade" in pessoa; // Verifica se a propriedade "idade" existe em pessoa (retorna true)
let temGenero = "genero" in pessoa; // Verifica se a propriedade "genero" existe em pessoa (retorna false)
