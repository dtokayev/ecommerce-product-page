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

const lightbox = document.createElement('div');
const galleryImg = document.querySelector('.product__gallery__img');
const lightboxGallery = document.querySelector('.product__gallery').cloneNode(true);
const lightboxThumbnails = lightboxGallery.querySelectorAll('.product__gallery__thumbnails button');
const lightboxImages = lightboxGallery.querySelectorAll('.product__gallery__img li');
let currentLightboxImg = 0;

const lightboxCloseContainer = document.createElement('div');
const lightboxCloseBtn = document.createElement('button');
lightboxCloseContainer.classList.add('flex-group');
lightboxCloseContainer.appendChild(lightboxCloseBtn);

lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
lightbox.appendChild(lightboxCloseContainer);
lightbox.appendChild(lightboxGallery);

galleryImg.addEventListener('click', e => {
  lightboxThumbnails[currentLightboxImg].classList.remove('selected-thumbnail');
  lightboxImages[currentLightboxImg].classList.remove('active-img');
  currentLightboxImg = currentImg;
  lightboxThumbnails[currentLightboxImg].classList.add('selected-thumbnail');
  lightboxImages[currentLightboxImg].classList.add('active-img');
  lightbox.classList.add('active');
});

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});

for (let i = 0; i < lightboxThumbnails.length; i++) {
  lightboxThumbnails[i].addEventListener('click', e => {
    lightboxThumbnails[currentLightboxImg].classList.remove('selected-thumbnail');
    lightboxImages[currentLightboxImg].classList.remove('active-img');
    currentLightboxImg = i;
    lightboxThumbnails[currentLightboxImg].classList.add('selected-thumbnail');
    lightboxImages[currentLightboxImg].classList.add('active-img');
  });
}

const lightboxNextImgBtn = lightbox.querySelector('.next-img-btn');
const lightboxPrevImgBtn = lightbox.querySelector('.prev-img-btn');
lightboxNextImgBtn.addEventListener('click', e => {
  if (currentLightboxImg < lightboxImages.length - 1) {
    lightboxThumbnails[currentLightboxImg].classList.remove('selected-thumbnail');
    lightboxImages[currentLightboxImg].classList.remove('active-img');
    currentLightboxImg++;
    lightboxThumbnails[currentLightboxImg].classList.add('selected-thumbnail');
    lightboxImages[currentLightboxImg].classList.add('active-img');
  }
});

lightboxPrevImgBtn.addEventListener('click', e => {
  if (currentLightboxImg > 0) {
    lightboxThumbnails[currentLightboxImg].classList.remove('selected-thumbnail');
    lightboxImages[currentLightboxImg].classList.remove('active-img');
    currentLightboxImg--;
    lightboxThumbnails[currentLightboxImg].classList.add('selected-thumbnail');
    lightboxImages[currentLightboxImg].classList.add('active-img');
  }
});

lightboxCloseBtn.addEventListener('click', e => {
  lightbox.classList.remove('active');
});

const cart = document.querySelector('.cart');
const cartButton = document.querySelector('.cart__button');
cartButton.addEventListener('click', e => {
  cart.classList.toggle('active');
});

const buyButton = document.querySelector('.buy-button');
const checkoutButton = document.querySelector('.checkout-button');
const cartListUl = document.querySelector('.cart__list ul');
const cartEmptyMessage = document.querySelector('.cart__list p');
const totalAmount = document.querySelector('.item-total-amount');
const multiplier = document.querySelector('.item-multiplier');
const cartButtonAmount = document.querySelector('.cart__button__amount');
let cartListObject = {'Sneakers': 0};
buyButton.addEventListener('click', e => {
  if (currentAmountText.textContent === '0') return;

  cartListObject['Sneakers'] += Number(currentAmountText.textContent);
  multiplier.textContent = cartListObject['Sneakers'];
  totalAmount.textContent = '$' + (cartListObject['Sneakers'] * 125).toFixed(2);
  checkoutButton.classList.add('active');
  cartEmptyMessage.classList.remove('active');
  cartListUl.classList.add('active');
  cartButtonAmount.classList.add('active');
  cartButtonAmount.textContent = cartListObject['Sneakers'];
});

const cartDeleteButton = document.querySelector('.delete-button');
cartDeleteButton.addEventListener('click', e => {
  cartListObject['Sneakers'] = 0;
  checkoutButton.classList.remove('active');
  cartEmptyMessage.classList.add('active');
  cartListUl.classList.remove('active');
  cartButtonAmount.classList.remove('active');
});
