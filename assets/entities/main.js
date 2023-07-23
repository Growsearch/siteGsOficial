
const showSidebar = (toggleId, sidebarId) => {
    const toggle = document.getElementById(toggleId),
          sidebar = document.getElementById(sidebarId);

    if(toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('show-sidebar');
        })
    }
}
showSidebar('header--toggle', 'sidebar');


const sidebarLink = document.querySelectorAll('.sidebar__link');

function linkColor() {
    sidebarLink.forEach(i => i.classList.remove("active-link"));
    this.classList.add("active-link");
}

sidebarLink.forEach(i => i.addEventListener("click", linkColor));

// sidebar (MUDANÇA DE CONTEUDO)

function mostrarConteudo(idConteudo) {
    // Esconder todos os conteúdos
    const conteudos = document.getElementsByClassName('conteudo');
    for (let i = 0; i < conteudos.length; i++) {
      conteudos[i].style.display = 'none';
    }
  
    // Mostrar o conteúdo selecionado
    const conteudoSelecionado = document.getElementById(idConteudo);
    conteudoSelecionado.style.display = 'block';
  }