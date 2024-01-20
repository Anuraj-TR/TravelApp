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
const heroBg = document.querySelector(".ta-layout-herobg");

if (container) {
  container.addEventListener('scroll', (e) => {
    // fixing the header if user has scrolled over 250
    if (container.scrollTop > 250) {
      header.classList.add("ta-header--fixed");
    }
    else {
      header.classList.remove("ta-header--fixed");
    }
    if (heroBg) {
      heroBg.style.top = (-(container.scrollTop)+'px');
    }
  })
}
// header starts

// Trip Package carousel starts
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
// Trip Package carousel ends


// hotel cards start
// selecting all available cards and adding carousel to each card images
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

// hotel search form start
const filterbtn = document.querySelector(
  ".tv-searchform .tv-searchform__btns .ta-btn--grey"
);
const searchFormFilters = document.querySelector(
  ".tv-searchform .tv-searchform__filters"
);
const searchFromFilterCloseBtn = document.querySelector(
  ".tv-searchform__filters__closebtn"
);

if (filterbtn) {
  filterbtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchFormFilters.classList.toggle("tv-searchform__filters--active");
  })
}

if (searchFromFilterCloseBtn) {
  searchFromFilterCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchFormFilters.classList.remove("tv-searchform__filters--active");
  })
}
// hotel search form end

// hotel card list start
const cardsFilterBtn = document.querySelector(".ta-hotel__head-filterbtn");
const cardsFilterBlock = document.querySelector(".ta-hotel__right");
const cardsFilterCloseBtn = document.querySelector(".ta-filter__close");

if (cardsFilterBtn && cardsFilterBlock) {
  cardsFilterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cardsFilterBlock.classList.toggle("ta-hotel__right--active");
  })
  cardsFilterCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cardsFilterBlock.classList.remove("ta-hotel__right--active");
  })
}
// hotel card list end

