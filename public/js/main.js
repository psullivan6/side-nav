console.log('MAIN JS');

const Nav = document.getElementById('Nav');
const NavDrawer = document.getElementById('Nav-drawer');
const Burger = document.getElementById('Nav-burger');

const handleBurgerClick = () => {
  if (Burger.classList.contains('is-active')) {
    Burger.classList.remove('is-active');
    NavDrawer.classList.remove('is-active');
  } else {
    Burger.classList.add('is-active');
    NavDrawer.classList.add('is-active');
  }
}

Burger.addEventListener('click', handleBurgerClick);