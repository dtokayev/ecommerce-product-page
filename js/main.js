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

let currentImg = 0;
const thumbnails = document.querySelectorAll('.product__gallery__thumbnails button');
const images = document.querySelectorAll('.product__gallery__img li');
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', e => {
    thumbnails[currentImg].classList.remove('selected-thumbnail');
    images[currentImg].classList.remove('active-img');
    currentImg = i;
    thumbnails[currentImg].classList.add('selected-thumbnail');
    images[currentImg].classList.add('active-img');
  });
}

const nextImgBtn = document.querySelector('.next-img-btn');
const prevImgBtn = document.querySelector('.prev-img-btn');
nextImgBtn.addEventListener('click', e => {
  if (currentImg < images.length - 1) {
    thumbnails[currentImg].classList.remove('selected-thumbnail');
    images[currentImg].classList.remove('active-img');
    currentImg++;
    thumbnails[currentImg].classList.add('selected-thumbnail');
    images[currentImg].classList.add('active-img');
  }
});
prevImgBtn.addEventListener('click', e => {
  if (currentImg > 0) {
    thumbnails[currentImg].classList.remove('selected-thumbnail');
    images[currentImg].classList.remove('active-img');
    currentImg--;
    thumbnails[currentImg].classList.add('selected-thumbnail');
    images[currentImg].classList.add('active-img');
  }
});
