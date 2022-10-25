
// ========== SERVICES MODAL =========== //
export default function servicesModal() {
const modalViews = document.querySelectorAll('.services__modal , .modal__form'),
modalBtns = document.querySelectorAll('.services__button , .buttonContact'),
modalCloses = document.querySelectorAll('.services__modal-close , .modal__form-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}


modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    });
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
       modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal');
       }); 
    });
});
}