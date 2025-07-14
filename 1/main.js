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
var lists = document.querySelectorAll(".swiper-wrapper");
var list1 = lists[0];
var list2 = lists[1]
console.log(list1);
var items1 = list1.children;
var items2 = list2.children

var swiperTemplate = document.querySelector("#slide-template").content
var newSlideTemplates = swiperTemplate.querySelectorAll(".swiper-slide");
var newSlideTemplates1 = newSlideTemplates[0];
var newSlideTemplates2 = newSlideTemplates[1];

var addSlide = function (template,list,logotype,index) {
  var slide = template.cloneNode(true);
  if (logotype) {
      var logo = slide.querySelector(".logoplace");
      logo.style.backgroundImage = `url(${logotype})`;
  } else {
    var text = slide.querySelector(".swiper__text")
    text.textContent = `Ремонт ${index}`
    console.log('slava Iisusu!');
  }
  list.appendChild(slide);
};


const render = function () {
  for (var i = 1; i <= 8; i++) {
    addSlide(newSlideTemplates1,list1,`img/logo-${i}.png`);
  }

  for (i = 1; i <= 3; i++) {
    addSlide(newSlideTemplates1,list1,`img/logo-${i}.png`);
  }

    for ( i = 1; i <= 8; i++) {
    addSlide(newSlideTemplates2,list2, '', i);
  }
} ();

const array = [];
for (var i = 1; i <= 8; i++) {
  array.push(`Ремонт ${i}`)
}
console.log(array);

// render();

// ставим прослушиватель на кнопку Показать всё.



var btnHandlers = document.querySelectorAll(".swiper__handler");
var btnHandler1 = btnHandlers[0];
var btnHandler2 = btnHandlers[1];

const inputFunction = function (btnHandler,items,list) {
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
  } );
}

inputFunction(btnHandler1,items1,list1)
inputFunction(btnHandler2,items2,list2)



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
