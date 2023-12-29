const twintCopied = document.querySelector('.twint-copied');
const ibanCopied = document.querySelector('.iban-copied');
const twintCopiedContainer = document.querySelector('.twint-copied-container');
const ibanCopiedContainer = document.querySelector('.iban-copied-container');
const ibanLandingContainer = document.querySelector('.container-iban-landing');
const twintLandingContainer = document.querySelector(
  '.container-twint-landing'
);

const twintLandingCopied = document.querySelector('.twint-landing-copied');

function copyTwint(event) {
  event.stopPropagation();
  const text = `Subject: SOLISTREAM 
  Number: + 41 78 627 67 57`;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      twintCopiedContainer.classList.add('copied-container-visible');
      twintCopied.classList.add('copied-successfully-visible');
      setTimeout(() => {
        twintCopied.classList.remove('copied-successfully-visible');
        twintCopiedContainer.classList.remove('copied-container-visible');
      }, 2000);
    })
    .catch((err) => {
      console.error('Error in copying text: ', err);
    });
}

function copyTwintLanding(event) {
  event.stopPropagation();
  const text = `Subject: SOLISTREAM 
        Number: + 41 78 627 67 57`;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Use the class names specific to the landing page version
      const twintLandingCopiedContainer = document.querySelector(
        '.twint-landing-copied-container'
      );
      const twintLandingCopied = document.querySelector(
        '.twint-landing-copied'
      );

      twintLandingCopiedContainer.classList.add('copied-container-visible');
      twintLandingCopied.classList.add('copied-successfully-visible');
      setTimeout(() => {
        twintLandingCopied.classList.remove('copied-successfully-visible');
        twintLandingCopiedContainer.classList.remove(
          'copied-container-visible'
        );
      }, 2000);
    })
    .catch((err) => {
      console.error('Error in copying text: ', err);
    });
}

function copyIBAN(event) {
  event.stopPropagation();
  const text = `Ozelot Studios 
    Kalkbreitenstrasse 121
    8003 Zürich
    CH42 0070 0114 8042 5446 1
    SWIFT: ZKBKCHZZ80A`;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      ibanCopiedContainer.classList.add('copied-container-visible');
      ibanCopied.classList.add('copied-successfully-visible');
      console.log('Copied text to clipboard: ', text);
      setTimeout(() => {
        ibanCopied.classList.remove('copied-successfully-visible');
        ibanCopiedContainer.classList.remove('copied-container-visible');
        console.log('Copied text to clipboard Timeout: ', text);
      }, 2000);
    })
    .catch((err) => {
      console.error('Error in copying text: ', err);
    });
}

function copyIBANLanding(event) {
  event.stopPropagation();
  const text = `Ozelot Studios 
  Kalkbreitenstrasse 121
  8003 Zürich
  CH42 0070 0114 8042 5446 1
  SWIFT: ZKBKCHZZ80A`;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Query the elements specific to the IBAN landing version
      const ibanLandingCopiedContainer = document.querySelector(
        '.iban-landing-copied-container'
      );
      const ibanLandingCopied = document.querySelector('.iban-landing-copied');

      ibanLandingCopiedContainer.classList.add('copied-container-visible');
      ibanLandingCopied.classList.add('copied-successfully-visible');
      setTimeout(() => {
        ibanLandingCopied.classList.remove('copied-successfully-visible');
        ibanLandingCopiedContainer.classList.remove('copied-container-visible');
      }, 2000);
    })
    .catch((err) => {
      console.error('Error in copying text: ', err);
    });
}

const twintImage = document.querySelector('.image-left');
const ibanImage = document.querySelector('.image-right');

twintImage.addEventListener('click', copyTwint);
ibanImage.addEventListener('click', copyIBAN);
twintLandingContainer.addEventListener('click', copyTwintLanding);
ibanLandingContainer.addEventListener('click', copyIBANLanding);
twintImage.addEventListener('touchstart', copyTwint);
ibanImage.addEventListener('touchstart', copyIBAN);
twintLandingContainer.addEventListener('touchstart', copyTwintLanding);
ibanLandingContainer.addEventListener('touchstart', copyIBANLanding);
