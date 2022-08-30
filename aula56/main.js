/* Uma função dentro de um objecto é chamado de método!
*/

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return`${nome} está ${assunto}.`;
        }
    };
}

const p1 = criarPessoa('Luiz','Octavio');
console.log(p1.fala('falando sobre JS'))