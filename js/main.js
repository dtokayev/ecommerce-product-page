const navToggle = document.querySelector('[aria-controls="primary-nav"]');

navToggle.addEventListener('click', e => {
  const navOpened = navToggle.getAttribute('aria-expanded');
  if (navOpened === 'false') {
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const currentAmountText = document.querySelector('.product__selected-amount');
const decreaseAmountButton = document.querySelector('.decrease-amount-btn');
const increaseAmountButton = document.querySelector('.increase-amount-btn');

decreaseAmountButton.addEventListener('click', e => {
  const currentAmount = Number(currentAmountText.textContent);
  if (currentAmount > 0) {
    currentAmountText.textContent = currentAmount - 1;
  }
});

increaseAmountButton.addEventListener('click', e => {
  const currentAmount = Number(currentAmountText.textContent);
  currentAmountText.textContent = currentAmount + 1;
});
