class Pessoa {

     

    constructor(nome, idade){
        this.nome = nome 
        this.idade = idade 
    
    }

    saudacao(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

let pessoa1 = new Pessoa("Maria", 25)
let pessoa2 = new Pessoa("Carlos", 40)
let pessoa3 = new Pessoa("Mateus", 37)
let pessoa4 = new Pessoa("João", 22)

pessoa1.saudacao()
pessoa2.saudacao()
pessoa3.saudacao()
pessoa4.saudacao()