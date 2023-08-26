//criando um objeto literal

let pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
};

//Acessando propriedades e chamando método
console.log(pessoa.nome)  
pessoa.saudacao()  