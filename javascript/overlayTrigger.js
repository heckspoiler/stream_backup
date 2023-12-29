const informationButton = document.querySelector('.more-information-button');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.cross');
const donateImages = document.querySelectorAll('.image-div-for-before');
const imageLeft = document.querySelector('.image-left');
const imageRight = document.querySelector('.image-right');

informationButton.addEventListener('click', () => {
  overlay.classList.add('overlay-visible');
  setTimeout(() => {
    donateImages.forEach((image) => {
      image.classList.add('image-visible');
    });
  }, 100);
});

closeButton.addEventListener('click', () => {
  overlay.classList.remove('overlay-visible');
  setTimeout(() => {
    donateImages.forEach((image) => {
      image.classList.remove('image-visible');
    });
  }, 600);
});
