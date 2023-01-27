const $nav = document.querySelector('nav');
const $sun = document.querySelector('.sun');

let day = true;
// eslint-disable-next-line
function modeChange() {
  if (day) {
    toggleNav();
    document.documentElement.style.setProperty('--main', '#fff');
    document.documentElement.style.setProperty('--text', '#000');
    document.documentElement.style.setProperty('--button', '#000');
    document.documentElement.style.setProperty('--b-text', '#fff');
    document.documentElement.style.setProperty('--sky', '#70c4c6');
    day = false;
  } else {
    toggleNav();
    document.documentElement.style.setProperty('--main', '#212529');
    document.documentElement.style.setProperty('--text', '#70c4c6');
    document.documentElement.style.setProperty('--button', '#fff');
    document.documentElement.style.setProperty('--b-text', '#000');
    document.documentElement.style.setProperty('--sky', '#354a4a');
    day = true;
  }
}

function toggleNav() {
  $nav.classList.toggle('navbar-dark');
  $nav.classList.toggle('navbar-white');
  $nav.classList.toggle('bg-dark');
  $nav.classList.toggle('bg-light');
}

$sun.addEventListener('click', modeChange);
