
// =======  FORM MODAL =======//
export default function formularioModal() {
const formModal = document.querySelectorAll('.modal__form'),
formModalBtn = document.querySelectorAll('.buttonContact'),
formModalClose = document.querySelectorAll('.modal__form-close');

let abrirForm = function(cliqueModal) {
    formModal[cliqueModal].classList.add('active');
}


formModalBtn.forEach((botaoModal, i) => {
    botaoModal.addEventListener('click', () => {
        abrirForm(i)
    });
})

formModalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        formModal.forEach((formulario) => {
            formulario.classList.remove('active');
        });
    });
});

}