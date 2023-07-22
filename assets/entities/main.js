
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