let toggleBtn, counter, counterWrapper, addRemove, tgglBtn, toCart, headlinesParent, headlineChildren, menuContent, menuList;

window.addEventListener('click', function (e) {


    if (e.target.classList.contains('add-to-cart__to-cart')) {
        e.target.classList.toggle('active');
        toggleBtn = e.target.closest('.add-to-cart');
        addRemove = toggleBtn.querySelector('.add-to-cart__plus-minus');
        addRemove.classList.toggle('active');
    }


    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        counterWrapper = e.target.closest('.plus-minus');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (e.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (e.target.dataset.action === 'minus') {
        if (+counter.innerText > 1) {
            counter.innerText = --counter.innerText;
        }

        else if (+counter.innerText == 1 && e.target.closest('.plus-minus').classList.contains('add-to-cart__plus-minus') == true) {
            counterWrapper.classList.toggle('active');
            tgglBtn = e.target.closest('.add-to-cart');
            toCart = tgglBtn.querySelector('.add-to-cart__to-cart');
            toCart.classList.toggle('active')
        }
    }

    if (e.target.hasAttribute('data-headline') === true) {
        headlinesParent = e.target.closest('.menu__headlines');
        headlineChildren = headlinesParent.querySelectorAll('div');
        headlineChild = headlinesParent.querySelector('.active');
        menuContent = document.querySelector('.menu__content');
        menuList = menuContent.querySelectorAll('.menu__list');

        menuList.forEach(function (e, i) {
            e.setAttribute('data-menuList', i + 1);
        });

        headlineChildren.forEach(function (e, i) {
            e.classList.remove('active');
            e.setAttribute('data-headline', i + 1)
        });

        e.target.classList.add('active');

        dataHeadline = e.target.getAttribute('data-headline');
        menuContainer = e.target.closest('.menu__container');
        menuContent = menuContainer.querySelector('.menu__content');
        menuList = menuContent.querySelectorAll('.menu__list');

        menuList.forEach(function (e) {
            e.classList.remove('active')
            if (e.getAttribute('data-menuList') == dataHeadline) {
                e.classList.add('active');
            }
        });

    }
});