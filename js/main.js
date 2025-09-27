const navToggle = document.querySelector('[aria-controls="primary-nav"]');

navToggle.addEventListener('click', e => {
  const navOpened = navToggle.getAttribute('aria-expanded');
  if (navOpened === 'false') {
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
