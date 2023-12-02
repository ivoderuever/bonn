const ctaBtn = document.querySelector('#navigateToForm');

if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    ctaBtn.classList.add('button-transform');
    setTimeout(() => {
      window.location.href = '/form';
    }, 1000);
  });
}

// menu code
const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menuButton');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
  });
}