//* Functions
// import Swiper from '../node_modules/swiper/swiper';
// const swiper = new Swiper();


// new Swiper('.start-block__slider', {

// 	navigation: {
// 		nextEl: '.start-block__right-arrow',
// 		prevEl: '.start-block__left-arrow'
// 	},
	
// });



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

$(function () {
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

window.addEventListener("scroll", () => {
  debounce(linkChanger(), 300);
});

let btn = document.querySelector(".show-more-button");
let services = document.querySelector(".services-block");
btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  showMore();
});

function showMore() {
		if (btn.classList.contains("active")) {
			btn.textContent = "Скрыть";
			if (document.documentElement.clientWidth > 1024) {
				document
				.querySelectorAll(".services-block__item:nth-child(n+6)")
				.forEach(function (e) {
					e.style.display = "block";
				});
			}
			else {
				document
				.querySelectorAll(".services-block__item:nth-child(n+5)")
				.forEach(function (e) {
					e.style.display = "block";
				});
			}
			
		} else {
			if (document.documentElement.clientWidth > 1024) {
				btn.textContent = "Показать больше";
			document
				.querySelectorAll(".services-block__item:nth-child(n+6)")
				.forEach(function (e) {
					e.style.display = "none";
				});
			}
			else {
				btn.textContent = "Показать больше";
			document
				.querySelectorAll(".services-block__item:nth-child(n+5)")
				.forEach(function (e) {
					e.style.display = "none";
				});
			}
		}
}


window.addEventListener("resize", function() {showMore()});





//! клик по отзывам
// let revContDiv = document.querySelectorAll('.review-block__slider div')
// revContDiv.forEach(function(e) {
// 	e.addEventListener('click', function() {
// 		document.querySelector('.review-block__container').classList.add('active')
// 	})
// });


Ellipsis({
	ellipsis: '…',
	debounce: 30,
	responsive: true,
	className: '.services-block__name',
	lines: 1,
	portrait: null,
	break_word: false
	});

debounce(headerChanger(), 300);
debounce(linkChanger(), 300);
showMore();
