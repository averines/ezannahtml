let body = document.querySelector("body");
let catalogFilter = document.querySelector(".catalog-filter");
let headerMobile = document.querySelector(".header-mobile");


window.addEventListener('click', (e) => {
    if (e.target.classList.contains("product-section__title") && e.target.closest(".product-section--collapsible")) {
        e.target.classList.toggle("is-active");
    }

    if (e.target.classList.contains("filter__title")) {
        e.target.classList.toggle("is-collapsed");
    }

    if (e.target.classList.contains("filter-checkbox__btn")) {
        e.target.classList.toggle("is-active");
    }

    if (e.target.classList.contains("product-card__favorite")) {
        e.target.classList.toggle("is-active");
    }

    if (e.target.classList.contains("catalog-header__btn")) {
        body.classList.toggle("body-overflow");
        catalogFilter.classList.toggle("is-active");
    }

    if (e.target.dataset.action == "closeCatalogFilter" || e.target.classList.contains('catalog')) {
        body.classList.remove("body-overflow");
        catalogFilter.classList.remove("is-active");
    }

    if (e.target.classList.contains("control-select__option")) {
        let controlSelect = e.target.closest(".control-select");
        let controlSelectOptions = controlSelect.querySelectorAll(".control-select__option");
        controlSelectOptions.forEach(o => { o.classList.remove("is-active") })
        e.target.classList.add("is-active");
    }

    if (e.target.classList.contains("header-btn")) {
        body.classList.toggle("body-overflow");
        headerMobile.classList.toggle("is-active");
    }

    if (e.target.dataset.action == "closeHeaderMobile" || e.target.classList.contains("header-mobile")) {
        body.classList.remove("body-overflow");
        headerMobile.classList.remove("is-active");
    }

    if (e.target.classList.contains("category-menu-mobile__title")) {
        e.target.classList.toggle("is-active");
    }

    if (e.target.dataset.action == "searchToggle") {
        let search = document.getElementById("search");
        search.classList.toggle("is-active");
    }

    // плавный переход к нужному фото товара при клике на превьюшку (на странице товара)
    if (e.target.classList.contains("product-slider__thumb")) {
        e.stopPropagation();
        e.preventDefault();
        let productThumbs = document.querySelectorAll('.product-slider__thumb');
        productThumbs.forEach(p => p.classList.remove("is-active"));
        e.target.classList.add("is-active");

        let productPictureID = e.target.getAttribute('href').slice(1);
        document.getElementById(productPictureID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
})


window.addEventListener('resize', function () {
    // скрываем  ранее показанные элементы при достижении ширины окна
    if (window.innerWidth > 992) {
        body.classList.remove("body-overflow");
        if (catalogFilter) { catalogFilter.classList.remove("is-active") }
        if (headerMobile) { headerMobile.classList.remove("is-active"); }
    };
});


// всплывающие окна через фансибокс
Fancybox.bind("[data-fancybox]", {});


// слайдер через фансибокс
const sliderMain = document.getElementById("sliderMain");
if (sliderMain) { new Carousel(sliderMain, { infinite: false }) }


// выбор самовывоза
let deliveryInputs = document.querySelectorAll('input[name="delivery"]');
if (deliveryInputs) {
    let pickupShowElements = document.querySelectorAll('[data-action="isPickupShow"]');
    let pickupHiddenElements = document.querySelectorAll('[data-action="isPickupHidden"]');


    deliveryInputs.forEach(deliveryInput => {
        deliveryInput.addEventListener("change", (e) => {
            if (e.target.value == "delivery-0") {
                pickupShowElements.forEach(i => i.classList.remove("is-hidden"));
                pickupHiddenElements.forEach(i => i.classList.add("is-hidden"));
            } else {
                pickupShowElements.forEach(i => i.classList.add("is-hidden"));
                pickupHiddenElements.forEach(i => i.classList.remove("is-hidden"));
            }
        })
    })
}
