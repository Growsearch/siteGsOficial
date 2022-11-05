
 export default function animaCard() {

    const card = document.querySelector('.card');
    const windowMetade = window.innerHeight * 0.5;

    function cardAnimando() {
        const cardTop = card.getBoundingClientRect().top;
        const isCardVisible = (cardTop - windowMetade) < 0;

        if(isCardVisible) {
            card.classList.add('cardAtivo');
        } else if(card.classList.contains('cardAtivo')) {
            card.classList.remove('cardAtivo');
        }
    }

    window.addEventListener('scroll', cardAnimando);
}