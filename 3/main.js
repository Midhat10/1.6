// init Swiper:
const getSwiper = () =>
  new window.Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    // loop: true,
    slidesPerView: 1.28,
    spaceBetween: 16,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 0,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 0,
        spaceBetween: 0,
        centeredSlides: false,
      },
    },
  });

// Переменные
var list = document.querySelector(".swiper-wrapper");
var items = list.children;

var swiperTemplate = document.querySelector("#slide-template").content;
var newSlideTemplate = swiperTemplate.querySelector(".swiper-slide");

var addSlide = function (logotype) {
  var slide = newSlideTemplate.cloneNode(true);
  var logo = slide.querySelector(".logoplace");
  logo.style.backgroundImage = `url(${logotype})`;

  list.appendChild(slide);
};

var render = function () {
  for (var i = 1; i <= 8; i++) {
    addSlide(`img/logo-${i}.png`);
  }

  for (i = 1; i <= 3; i++) {
    addSlide(`img/logo-${i}.png`);
  }
};

render();

// ставим прослушиватель на кнопку Показать всё.

var btnHandler = document.querySelector(".swiper__handler");

btnHandler.addEventListener("click", function () {
  var text = btnHandler.textContent;
  if (text === "Показать все") {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add("swiper__show");
    }
    btnHandler.textContent = "Скрыть";
    list.style.marginBottom = "45px";
    console.log(text);
  } else {
    for (i = 0; i < items.length; i++) {
      items[i].classList.remove("swiper__show");
    }
    btnHandler.textContent = "Показать все";
    list.style.marginBottom = "24px";
  }
});

// Что делать, чтобы слайды при резайзе прорисовывались?
let swiper = null;
if (window.innerWidth < 768) {
  swiper = getSwiper();
}
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    if (swiper) return;
    swiper = getSwiper();
  } else {
    if (!swiper) return;
    swiper.destroy();
    swiper = null;
  }
});
