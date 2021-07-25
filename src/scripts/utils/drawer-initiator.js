const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

/* SHOW */
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

/* HIDDEN */
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

/*= ==== ACTIVE AND REMOVE MENU ===== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  /* Active link */
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  /* Remove menu mobile */
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
