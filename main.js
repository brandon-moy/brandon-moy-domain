const $nav = document.querySelector('nav');
const $sunMoon = document.querySelector('.sun-moon');

$sunMoon.addEventListener('click', modeChange);

let day = true;

function modeChange() {
  if (day) {
    toggleNav();
    document.documentElement.style.setProperty('--main', '#70c4c6');
    document.documentElement.style.setProperty('--text', '#1f303a');
    document.documentElement.style.setProperty('--button', '#304a58');
    document.documentElement.style.setProperty('--b-text', '#fff');
    document.documentElement.style.setProperty('--sky', '#70c4c6');
    document.documentElement.style.setProperty('--mountain', '#7ac1e4');
    document.documentElement.style.setProperty('--mountain-shadow', '#4f7b91');
    document.documentElement.style.setProperty('--snow', '#ddd');
    document.documentElement.style.setProperty('--snow-shadow', '#ccc');
    document.documentElement.style.setProperty('--light', '#ffa');
    day = false;
  } else {
    toggleNav();
    document.documentElement.style.setProperty('--main', '#1f303a');
    document.documentElement.style.setProperty('--text', '#fff');
    document.documentElement.style.setProperty('--button', '#70c4c6');
    document.documentElement.style.setProperty('--b-text', '#000');
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
  $nav.classList.toggle('navbar-dark');
  $nav.classList.toggle('navbar-white');
  $nav.classList.toggle('bg-dark');
  $nav.classList.toggle('bg-light');
}
