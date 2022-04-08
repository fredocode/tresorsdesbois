const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const mobileMenu = () => {
  burger.classList.toggle('is-active');
  nav.classList.toggle('active');
}

burger.addEventListener('click', mobileMenu);

