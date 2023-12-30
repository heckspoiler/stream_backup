import { friday, saturday, sunday } from './artistArray.js';
const currentArtistFields = document.querySelectorAll('.current-artist');
const nextArtistField = document.querySelector('.next-artist');
const reddots = document.querySelectorAll('.reddot');

let artists;

const currentTime = new Date();
const currentDay = currentTime.getDay();

switch (currentDay) {
  case 5:
    artists = friday;
    break;
  case 6:
    artists = saturday;
    break;
  case 0:
    artists = sunday;
    break;
  default:
    artists = [];
}

function getCurrentTimeZurich() {
  const localTime = new Date();
  const zurichTimeStr = localTime.toLocaleString('en-US', {
    timeZone: 'Europe/Zurich',
  });
  const zurichTime = new Date(zurichTimeStr);
  return zurichTime;
}

// timeslot automation function

const timeslotAutomation = () => {
  const currentTime = getCurrentTimeZurich();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentMinuteTotal = currentHour * 60 + currentMinute;
  const currentDay = currentTime.getDay();

  let currentArtist = null;
  let nextArtist = null;

  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    const [startTimeHour, startTimeMinute] = artist.startTime
      .split(':')
      .map(Number);
    const startTimeMinuteTotal = startTimeHour * 60 + startTimeMinute;
    const [endTimeHour, endTimeMinute] = artist.endTime.split(':').map(Number);
    const endTimeMinuteTotal = endTimeHour * 60 + endTimeMinute;

    if (
      currentMinuteTotal >= startTimeMinuteTotal &&
      currentMinuteTotal < endTimeMinuteTotal
    ) {
      currentArtist = artist;
      nextArtist = artists[i + 1] || null;
      break;
    }
  }

  if (currentArtist) {
    currentArtistFields.forEach(
      (field) => (field.innerHTML = `Now Playing: ${currentArtist.name}`)
    );
    nextArtistField.innerHTML = nextArtist
      ? `Next Up: ${nextArtist.name}`
      : 'No more artists today';
    reddots.forEach((reddot) => {
      reddot.classList.add('reddot-active');
      reddot.classList.remove('reddot-inactive');
    });
  } else {
    currentArtistFields.forEach(
      (field) => (field.innerHTML = "We're not live now")
    );
    nextArtistField.innerHTML = "We're not live now";
    reddots.forEach((reddot) => {
      reddot.classList.remove('reddot-active');
      reddot.classList.add('reddot-inactive');
    });
  }
};

setTimeout(timeslotAutomation, 3000);

setInterval(timeslotAutomation, 120000);
