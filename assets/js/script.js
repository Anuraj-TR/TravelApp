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

if (container) {
  container.addEventListener('scroll', (e) => {
    if (container.scrollTop > 250) {
      header.classList.add("ta-header--fixed");
    }
    else {
      header.classList.remove("ta-header--fixed");
    }
  })
}
// header starts

// Trip Package starts
$(".ta-travel__tile-wrap").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// Trip Package ends


// hotel cards start

const cards = document.querySelectorAll('.ta-cards');

if (cards) {
  cards.forEach(item => {
    $(item.querySelector(".ta-cards__img-wrap")).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      prevArrow: item.querySelector(".ta-cards__btn--prev"),
      nextArrow: item.querySelector(".ta-cards__btn--next"),
      //  asNavFor: ".slider-nav",
    });
    $(item.querySelector(".ta-cards__nav")).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: item.querySelector(".ta-cards__img-wrap"),
      infinite: false,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
    });
  })
}
		
// hotel cards end

