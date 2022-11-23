
export default function menuMobile() {

    const btnMobile = document.querySelector('button.btn-mobile');

    function toggleMenu(event) {
        if(event.type == 'touchstart') event.preventDefault()
            const nav = document.querySelector('.nav');
            nav.classList.toggle('active');
            const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded' , 'true');

        if(active) {
            event.currentTarget.setAttribute('aria-label' , 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('touchstart', 'Abrir Menu');
        }
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart' , toggleMenu);
}