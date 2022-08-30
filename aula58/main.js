//função construtora -> objecto
// função fabrica -> objectos 
// construtora -> Pessoa(new)

function Pessoa(nome, sobrenome) {
    //podem ser considerados métodos ou atributos privados
    const ID = 123456;
    const metodoInterno = function () {

    };
    //podem ser considerados métodos ou atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome +': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Octavio');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();