

// aqui irei criar uma maquina de escrever no meio da pagina, 

export default function escrevendoTela() {

    /* function maquinaEscrev(elemento) {
        const textoProd = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoProd.forEach ((letra , i ) => {
            setTimeout(() => elemento.innerHTML += letra , 75 * i);
        });
    }
    
    const prodSpeak = document.querySelector('.tituloPrincipal');
    maquinaEscrev(prodSpeak);
    */

var div = document.querySelector('.tituloPrincipal');
var textos = ['Ajudamos você a posicionar o seu negócio na Internet', 'Construimos o melhor site para você', 'Torne-se uma autoridade no seu ramo de trabalho', 'Converse conosco via chat'];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 600); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 100);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);

}

    

    