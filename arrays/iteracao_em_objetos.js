let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro"
};

// Iteração sobre as chaves do objeto
for (let chave in pessoa) {
    console.log(chave); // nome, idade, profissao
    console.log(pessoa[chave]); // "João", 30, "Engenheiro"
}

// Iteração utilizando Object.keys
let chaves = Object.keys(pessoa); // ["nome", "idade", "profissao"]
chaves.forEach(function(chave) {
    console.log(chave + ": " + pessoa[chave]);
});
