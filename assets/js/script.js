


window.addEventListener('click', (e) => {
    // console.log(e.target.classList);

    if (e.target.closest(".product-section") && e.target.closest(".product-section").classList.contains("product-section--collapsible")) {
        let section = e.target.closest(".product-section");
        let title = section.querySelector(".product-section__title");

        if (e.target.classList.contains("product-section__title") || e.target.closest(".product-section__title")) {
            title.classList.toggle("is-active");
        }
    }
})

const productThumbs = document.querySelectorAll('.product-slider__thumb')
if (productThumbs) {
    productThumbs.forEach(productThumb => {
        productThumb.addEventListener('click', function (e) {
            e.preventDefault();

            productThumbs.forEach(p => p.classList.remove("is-active"));
            productThumb.classList.add("is-active")

            let blockID = productThumb.getAttribute('href').slice(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
}
