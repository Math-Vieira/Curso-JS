const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Vieira',
    idade: 21,
    
    fala(){
     return `${this.nome} está falando oi`;
    }
}
    console.log(pessoa1.fala());