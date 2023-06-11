let checkbox = document.querySelectorAll(".checkbox");
let basketDeliveryShippingInputsDivs = document.querySelectorAll(
  ".basket-delivery__shipping-inputs div"
);
let basketDeliveryAdressLabel = document.querySelector('.basket-delivery__adress label');
let basketDeliveryDateTextArea = document.querySelector('.basket-delivery__date textarea');
let basketDeliveryDateLabel = document.querySelector('.basket-delivery__date label');
let basketDeliveryAdressInput = document.querySelector('#adress')
let checkboxShipping = document.querySelector(".basket-delivery__shipping");
checkboxShipping.checked = true;

function basketAdressProp() {
  basketDeliveryShippingInputsDivs.forEach(function (element) {
    if (checkboxShipping.checked == true) {
      element.classList.remove("active");
			basketDeliveryAdressLabel.innerText = 'Адрес доставки';
			basketDeliveryDateLabel.innerText = 'Дата доставки*';
			basketDeliveryDateTextArea.value = 'После оплаты с вами свяжутся и уточнят ближайную дату доставки';
			basketDeliveryAdressInput.removeAttribute('disabled', 'disabled');
			basketDeliveryAdressInput.value = ''
    } else {
			element.classList.add("active");
			basketDeliveryAdressLabel.innerText = 'Адрес самовывоза';
			basketDeliveryDateLabel.innerText = 'Дата самовывоза*';
			basketDeliveryDateTextArea.value = 'После оплаты с вами свяжутся и уточнят ближайшую дату самовывоза';
			basketDeliveryAdressInput.setAttribute('disabled', 'disabled');
			basketDeliveryAdressInput.value = 'Витебский проспект дом 47 корпус 2'
    }
  });
}
basketAdressProp();

checkbox.forEach(function (element) {
  element.addEventListener("click", function () {
    element.checked = true;
    if (element.checked) {
      checkbox.forEach(function (e) {
        e.checked = false;
        element.checked = true;
      });
    }
    basketAdressProp();
  });
});

document.querySelectorAll(".price p").forEach(function (e) {
  e.innerHTML = "<p>" + e.innerHTML + "</p>" + "<p>руб</p>";
});

function data() {
  const priceBasic = document.querySelectorAll(".price__basic");
  priceBasic.forEach(function (e) {
    e.dataset.price = parseInt(e.innerText);
  });
}

function priceCounter() {
  const cartItems = document.querySelectorAll(".basket-content__elements");
  let totalPrice = 0;
  cartItems.forEach(function (e) {
    const amount = e.querySelector("[data-counter]");
    const price = e.querySelector(".price__basic");
    const currentPrice =
      parseInt(amount.innerText) * parseInt(price.dataset.price);
    totalPrice += currentPrice;
  });
  document.querySelector(".basket-price__total div").innerHTML =
    "<h3>" + totalPrice + "</h3>" + "<p>руб</p>";
}

let toggleBtn,
  counter,
  counterWrapper,
  addRemove,
  tgglBtn,
  toCart,
  headlinesParent,
  headlineChildren,
  menuContent,
  menuList;

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart__to-cart")) {
    e.target.classList.toggle("active");
    toggleBtn = e.target.closest(".add-to-cart");
    addRemove = toggleBtn.querySelector(".add-to-cart__plus-minus");
    addRemove.classList.toggle("active");
  }

  if (
    e.target.dataset.action === "plus" ||
    e.target.dataset.action === "minus"
  ) {
    counterWrapper = e.target.closest(".plus-minus");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  let basicPrice = e.target
    .closest(".basket-content__elements")
    .querySelector(".price__basic");

  if (e.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;

    basicPrice.innerHTML =
      basicPrice.dataset.price * parseInt(counter.innerText) + "<p>руб</p>";
    priceCounter();
  }

  if (e.target.dataset.action === "minus") {
    if (+counter.innerText > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      +counter.innerText == 1 &&
      e.target
        .closest(".plus-minus")
        .classList.contains("add-to-cart__plus-minus") == true
    ) {
      counterWrapper.classList.toggle("active");
      tgglBtn = e.target.closest(".add-to-cart");
      toCart = tgglBtn.querySelector(".add-to-cart__to-cart");
      toCart.classList.toggle("active");
    }
    basicPrice.innerHTML =
      basicPrice.dataset.price * parseInt(counter.innerText) + "<p>руб</p>";
    priceCounter();
  }

  if (e.target.hasAttribute("data-headline") === true) {
    headlinesParent = e.target.closest(".menu__headlines");
    headlineChildren = headlinesParent.querySelectorAll("div");
    headlineChild = headlinesParent.querySelector(".active");
    menuContent = document.querySelector(".menu__content");
    menuList = menuContent.querySelectorAll(".menu__list");

    menuList.forEach(function (e, i) {
      e.setAttribute("data-menuList", i + 1);
    });

    headlineChildren.forEach(function (e, i) {
      e.classList.remove("active");
      e.setAttribute("data-headline", i + 1);
    });

    e.target.classList.add("active");

    dataHeadline = e.target.getAttribute("data-headline");
    menuContainer = e.target.closest(".menu__container");
    menuContent = menuContainer.querySelector(".menu__content");
    menuList = menuContent.querySelectorAll(".menu__list");

    menuList.forEach(function (e) {
      e.classList.remove("active");
      if (e.getAttribute("data-menuList") == dataHeadline) {
        e.classList.add("active");
      }
    });
  }
});

data();
priceCounter();
