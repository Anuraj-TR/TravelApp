// sidebar starts
const sidebar = document.querySelector(".ta-layout__left");
const sidebarHandler = document.querySelector(".ta-sidebar__header-handler");

if (sidebar && sidebarHandler) {
  sidebarHandler.addEventListener('click', () => {
    sidebar.classList.toggle("ta-sidebar--closed");
  })
}
// sidebar ends

