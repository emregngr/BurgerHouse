const hamburgerToggle = () => (x) => {
  x.classList.toggle("change");
  document.querySelector('.header__mobile-menu').classList.toggle('header__mobile-menu--open');
};

export { hamburgerToggle };
