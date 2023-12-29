const toggleButton = document.querySelector('.remove-background-button');
const descriptionParagraph = document.querySelector('.footer-right p');
const threeContainer = document.querySelector('.threecontainer');

let buttonState = 0;

const toggleBackground = () => {
  if (buttonState === 0) {
    descriptionParagraph.innerHTML = 'Let me see that again!';
    toggleButton.innerHTML = 'Activate Movement';
    window.isThreeJsRenderingEnabled = false;
    buttonState = 1;
  } else {
    descriptionParagraph.innerHTML = 'Is your device acting up?';
    toggleButton.innerHTML = 'Disable Background';
    window.restartRendering();
    buttonState = 0;
  }
};

toggleButton.addEventListener('click', toggleBackground);
