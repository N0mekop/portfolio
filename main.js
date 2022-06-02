function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.navbarlinks');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
    })
    links.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
    })
}
toggleMenu();