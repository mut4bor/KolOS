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
	breakpoints: {
		320: {
			simulateTouch: true,
		},
		1024: {
			simulateTouch: false,
		}
	},
  speed: 500,
  
  direction: "horizontal",
  loop: true,
  loopedSlides: 1,
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 0,
});

const ServicesHeadingSwiper = new Swiper(".services-block__heading", {
  navigation: {
    nextEl: ".services-block__heading-swiper-button-next",
    prevEl: ".services-block__heading-swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
	breakpoints: {
		320: {
			simulateTouch: true,
		},
		1024: {
			simulateTouch: false,
		}
	},
	loop: 'true',
  slidesPerView: 1,
  speed: 300,
  simulateTouch: true,
  direction: "horizontal",
  watchOverflow: true,
});

const ServicesSwiper = new Swiper(".services-block__content-wrapper", {
	simulateTouch: false,
	loop: 'true',
  slidesPerView: 1,
  simulateTouch: true,
  direction: "horizontal",
  watchOverflow: true,
});

ServicesHeadingSwiper.controller.control = ServicesSwiper;

const masterclassBlockSwiper = new Swiper(".masterclass-block__swiper", {
  navigation: {
    nextEl: ".masterclass-block__swiper-button-next",
    prevEl: ".masterclass-block__swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
			simulateTouch: true,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
			simulateTouch: false,
    },
  },
  speed: 500,
  simulateTouch: true,
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: false,
});

const reviewBlockSwiper = new Swiper(".review-block__swiper", {
  navigation: {
    nextEl: ".review-block__swiper-button-next",
    prevEl: ".review-block__swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
			simulateTouch: true
    },
    768: {
      slidesPerView: 2,
			simulateTouch: false
    }
  },
  speed: 500,
  simulateTouch: true,
  direction: "horizontal",
  watchOverflow: true,
  spaceBetween: 20,
  centeredSlides: false,
});

const servicesContentWrapperItem = document.querySelectorAll(
  ".services-block__content-wrapper >div"
);

const servicesHeading = document.querySelectorAll(
  ".services-block__heading h1"
);

servicesHeading.forEach(function (element, i) {
  element.setAttribute("data-headingList", i + 1);
  document.querySelector('[data-headingList="1"]').classList.add("active");
});

servicesContentWrapperItem.forEach(function (element, i) {
  element.setAttribute("data-contentList", i + 1);
  document.querySelector('[data-contentList="1"]').classList.add("active");
});

servicesHeading.forEach(function (element) {
  element.addEventListener("click", function () {
    servicesHeading.forEach(function (e) {
      e.classList.remove("active");
    });
    element.classList.add("active");

    let dataHeadingListNumber = element.getAttribute("data-headingList");

    servicesContentWrapperItem.forEach(function (e) {
      e.classList.remove("active");
    });

    let dataContentList = document.querySelector(
      '[data-contentList="' + dataHeadingListNumber + '"]'
    );

    dataContentList.classList.add("active");
  });
});


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

debounce(headerChanger(), 300);
debounce(linkChanger(), 300);
showMore();
