const ctaBtn = document.querySelector('#navigateToForm');

if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    ctaBtn.classList.add('button-transform');
    setTimeout(() => {
      window.location.href = '/form';
    }, 1000);
  });
}