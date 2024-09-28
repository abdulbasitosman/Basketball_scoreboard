// Get elements

const homeScoreEl = document.getElementById("home_score-el"),
  guestScoreEl = document.getElementById("guest_score-el"),
  periodEl = document.getElementById("period-el"),
  foulHomeEl = document.getElementById("foul_home"),
  foulGuestEl = document.getElementById("foul_away");

let homeScoreCount = 0;
let homeFoulCount = 0;
let guestScoreCount = 0;
let guestFoulCount = 0;
let periodCount = 0;

periodEl.addEventListener("click", () => {
  periodCount++;
  periodEl.textContent = periodCount;
});

homeScoreEl.addEventListener("click", () => {
  homeScoreCount++;
  homeScoreEl.textContent = homeScoreCount;
});

guestScoreEl.addEventListener("click", () => {
  guestScoreCount++;
  guestScoreEl.textContent = guestScoreCount;
});

foulHomeEl.addEventListener("click", () => {
  homeFoulCount++;
  foulHomeEl.textContent = homeFoulCount;
});

foulGuestEl.addEventListener("click", () => {
  guestScoreCount++;
  foulGuestEl.textContent = guestScoreCount;
});
