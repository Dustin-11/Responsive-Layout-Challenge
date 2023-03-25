const nav = document.getElementById("navigation");
const hamburgerIcon = document.getElementById("menu__button");

hamburgerIcon.addEventListener('click', () => {
    nav.classList.toggle('nav__visible');
})