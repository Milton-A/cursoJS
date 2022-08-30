// IIFE -> Immediatly invoked fucntion expression
/* (
    function() { conteudo }
    
    )();
    */

(function (idade, peso, altura) {
    const sobrenome = 'Júnior';
    function criaNome(nome) {
        return nome+' '+sobrenome;
    }
    function falaNome(){
       console.log(criaNome('Luiz')); 
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);
