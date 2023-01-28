const $nav = document.querySelector('nav');
const $sunMoon = document.querySelector('.sun-moon');

$sunMoon.addEventListener('click', modeChange);

let day = true;

function modeChange() {
  if (day) {
    toggleNav();
    document.documentElement.style.setProperty('--main', '#B8C7DF');
    document.documentElement.style.setProperty('--text', '#7f8a96');
    document.documentElement.style.setProperty('--sky', '#B7D3F2');
    document.documentElement.style.setProperty('--mountain', '#AFAFDC');
    document.documentElement.style.setProperty('--mountain-shadow', '#8484a8');
    document.documentElement.style.setProperty('--snow', '#ddd');
    document.documentElement.style.setProperty('--snow-shadow', '#ccc');
    document.documentElement.style.setProperty('--light', '#ffa');
    day = false;
  } else {
    toggleNav();
    document.documentElement.style.setProperty('--main', '#1f303a');
    document.documentElement.style.setProperty('--text', '#fff');
    document.documentElement.style.setProperty('--sky', '#354a4a');
    document.documentElement.style.setProperty('--mountain', '#4f7b91');
    document.documentElement.style.setProperty('--mountain-shadow', '#304a58');
    document.documentElement.style.setProperty('--snow', '#ccc');
    document.documentElement.style.setProperty('--snow-shadow', '#bbb');
    document.documentElement.style.setProperty('--light', '#fff');
    day = true;
  }
}

function toggleNav() {
  $nav.classList.toggle('bg-dark');
  $nav.classList.toggle('bg-secondary');
}
