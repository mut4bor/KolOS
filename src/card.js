const backdrop = document.querySelector(".backdrop-black");
const card = document.querySelector(".card");
const detailedInfo = document.querySelector(".detailed-info");
const infoCard = document.querySelector(".info-card");
const infoCardContent = document.querySelector(".info-card__content");
const infoCardShowMore = document.querySelector(".info-card__show-more");
const body = document.querySelector("body");
const xmark = document.querySelector('.xmark');

document.querySelectorAll(".services-block__item").forEach(function (e) {
  e.addEventListener("click", function () {
    card.classList.add("active");
    body.classList.add("active");
		xmark.classList.add("active");
		if (document.documentElement.clientWidth > 1024) {
			backdrop.classList.add("active");
			xmarkMoving(card, 50);
		}
  });
});

function xmarkMoving(object, rightSideIndent) {
	xmark.style.top = 'calc((100% - ' + parseInt(object.offsetHeight) + 'px) / 2)';
	xmark.style.right = 'calc((100% - ' + parseInt(object.offsetWidth) + 'px) / 2 - ' + rightSideIndent + 'px)';
}

backdrop.addEventListener("click", function () {
  if (card.classList.contains("active")) {
    card.classList.remove("active");
    backdrop.classList.remove("active");
    body.classList.remove("active");
		xmark.classList.remove("active");
  }
  if (detailedInfo.classList.contains("active")) {
    detailedInfo.classList.remove("active");
    card.classList.add("active");
    backdrop.classList.add("active");
    infoCardContent.classList.remove("active");
    infoCardShowMore.classList.remove("active");
		xmarkMoving(card, 50);
  }
});

backdrop.addEventListener('mouseover', function() {
	xmark.classList.add('hover')
});

backdrop.addEventListener('mouseout', function() {
	xmark.classList.remove('hover')
});

document.querySelector(".back-arrow").addEventListener("click", function () {
  card.classList.remove("active");
  backdrop.classList.remove("active");
  body.classList.remove("active");
  detailedInfo.classList.remove("active");
  infoCardContent.classList.remove("active");
  infoCardShowMore.classList.remove("active");
});

document.querySelector(".xmark").addEventListener("click", function () {
  card.classList.remove("active");
  backdrop.classList.remove("active");
  body.classList.remove("active");
  detailedInfo.classList.remove("active");
  infoCardContent.classList.remove("active");
  infoCardShowMore.classList.remove("active");
});

infoCardShowMore.addEventListener("click", function () {
  infoCardContent.classList.add("active");
  infoCardShowMore.classList.add("active");

  if (document.documentElement.clientWidth > 1024) {
    card.classList.remove("active");
    detailedInfo.classList.add("active");
    detailedInfo.innerHTML = infoCard.innerHTML;
		xmarkMoving(detailedInfo, 50);
  }
});
