export const cartMobile = () => {
    const cart = document.querySelector('a[href="#carrinho"]');
    const menuMobile = document.querySelector(".navbar-toggler");

    if (window.innerWidth < 1024) {
        menuMobile.parentNode.insertBefore(cart, menuMobile);
    }
}