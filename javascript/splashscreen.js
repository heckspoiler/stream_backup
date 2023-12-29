// Immediate background change animation
let splashFront = document.querySelectorAll('.front');

splashFront.forEach((front, index) => {
  let delay = index * 300 + 1500;
  setTimeout(() => {}, delay);
});

// Animations after page has fully loaded
window.onload = function () {
  const splashscreen = document.querySelector('.splashscreen');

  let longestDelay = splashFront.length * 300 + 1300;
  setTimeout(() => {
    splashscreen.style.transform = 'translateY(-100vh)';
    setTimeout(() => {
      splashscreen.style.display = 'none';
    }, 1000);
  }, longestDelay + 400);
};
