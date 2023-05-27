const StartBlockSwiper = new Swiper(".start-block__swiper", {
  navigation: {
    nextEl: ".start-block__swiper-button-next",
    prevEl: ".start-block__swiper-button-prev",
  },
  pagination: {
    el: ".start-block__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  simulateTouch: false,
  direction: "horizontal",
  loop: true,
  loopedSlides: 1,
  slidesPerView: 1,
  watchOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 0,
});

const ReviewBlockSwiper = new Swiper(".review-block__swiper", {
  navigation: {
    nextEl: ".review-block__swiper-button-next",
    prevEl: ".review-block__swiper-button-prev",
  },
  // pagination: {
  // 	el: '.review-block__swiper-pagination',
  // 	clickable: true,
  // 	type: 'bullets',
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  // autoplay: {
  // 	delay: 5000,
  // 	disableOnInteraction: false,
  // },
  speed: 500,
  simulateTouch: true,
  direction: "horizontal",
  // autoHeight: 'true',
  // loop: true,
  // loopedSlides: 3,
  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween: 20,
  // slidesPerGroup: 1,
  centeredSlides: false,
});

const OtherCardSwiper = new Swiper(".other-card", {
  navigation: {
    nextEl: ".other-card__swiper-button-next",
    prevEl: ".other-card__swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: "auto",
  speed: 200,
  spaceBetween: 10,
  simulateTouch: true,
  direction: "horizontal",
  watchOverflow: true,
});

const OtherCardImageSwiper = new Swiper(".card__image", {
  navigation: {
    nextEl: ".card__image-swiper-button-next",
    prevEl: ".card__image-swiper-button-prev",
  },
  pagination: {
    el: ".card__image-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 1,
  speed: 200,
  spaceBetween: -1,
  simulateTouch: true,
  direction: "horizontal",
  watchOverflow: true,
});

const InfoCardShowMore = document.querySelector(".info-card__show-more");
InfoCardShowMore.addEventListener("click", function () {
  document.querySelector(".info-card__content").classList.add("active");
  InfoCardShowMore.classList.add("active");
  document.querySelector(".detailed-info").classList.add("active");
});

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function headerChanger() {
  if (window.pageYOffset == 0) {
    document.querySelectorAll(".header__item").forEach(function (e) {
      e.classList.add("active");
    });
    document.querySelector("#header").classList.add("active");
  }
  window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
      document.querySelectorAll(".header__item").forEach(function (e) {
        e.classList.remove("active");
      });
      document.querySelector("#header").classList.remove("active");
    } else {
      document.querySelectorAll(".header__item").forEach(function (e) {
        e.classList.add("active");
      });
      document.querySelector("#header").classList.add("active");
    }
  });
}

let link = document.querySelectorAll(".header__link");
let section = document.querySelectorAll(".section");

link.forEach(function (elem, i) {
  elem.addEventListener("click", function () {
    section[i].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

function linkChanger() {
  section.forEach(function (elem, i) {
    let headerHeight = document.querySelector("header").offsetHeight;
    let topIndent = window.pageYOffset + headerHeight + 1;

    if (topIndent >= elem.offsetTop) {
      link[i].classList.add("active");
    }

    if (
      topIndent >= elem.offsetTop + elem.offsetHeight ||
      topIndent <= elem.offsetTop
    ) {
      link[i].classList.remove("active");
    }
  });
}
debounce(
  window.addEventListener("scroll", () => {
    linkChanger();
  }),
  300
);

let btn = document.querySelector(".show-more-button");
let services = document.querySelector(".services-block");
btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  showMore();
});

function showMore() {
  if (btn.classList.contains("active")) {
    btn.textContent = "Скрыть";

    document.querySelectorAll(".services-block__item").forEach(function (e) {
      e.classList.add("active");
    });
  } else {
    btn.textContent = "Показать больше";
    document.querySelectorAll(".services-block__item").forEach(function (e) {
      e.classList.remove("active");
    });
  }
}

//! клик по отзывам
// let revContDiv = document.querySelectorAll('.review-block__slider div')
// revContDiv.forEach(function(e) {
// 	e.addEventListener('click', function() {
// 		document.querySelector('.review-block__container').classList.add('active')
// 	})
// });

debounce(headerChanger(), 300);
debounce(linkChanger(), 300);
showMore();
