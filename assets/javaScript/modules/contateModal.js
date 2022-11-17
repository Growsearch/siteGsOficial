
export default function contatenos() {
    const form = document.querySelector('.formContato');
    const botao = document.querySelector('.buttonContact');

    botao.addEventListener('click' ,() => {
        form.classList.toggle('animate');
    });

    botao.addEventListener('click', clicou);

    function clicou() {
        botao.style.display = 'none';
    }

}