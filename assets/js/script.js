// sidebar starts
const sidebar = document.querySelector(".ta-layout__left");
const sidebarHandler = document.querySelector(".ta-sidebar__header-handler");
const headerHamburg = document.querySelector(".ta-header__hamburger");

if (sidebar && sidebarHandler) {
  sidebarHandler.addEventListener('click', () => {
    sidebar.classList.toggle("ta-sidebar--closed");
  })
}

if (headerHamburg && sidebar) {
  headerHamburg.addEventListener('click', () => {
    sidebar.classList.toggle("ta-layout__left--active");
  })
}

// sidebar ends

// header starts
const header = document.querySelector(".ta-header-wrap");
const container = document.querySelector(".ta-layout__right");

container.addEventListener('scroll', (e) => {
  if (container.scrollTop > 250) {
    header.classList.add("ta-header--fixed");
  }
  else {
    header.classList.remove("ta-header--fixed");
  }
})
// header starts

