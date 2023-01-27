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
    document.documentElement.style.setProperty('--mountain', '#7ac1e4');
    document.documentElement.style.setProperty('--mountain-shadow', '#4f7b91');
    document.documentElement.style.setProperty('--snow', '#ddd');
    document.documentElement.style.setProperty('--snow-shadow', '#ccc');
    day = false;
  } else {
    toggleNav();
    document.documentElement.style.setProperty('--main', '#212529');
    document.documentElement.style.setProperty('--text', '#70c4c6');
    document.documentElement.style.setProperty('--button', '#fff');
    document.documentElement.style.setProperty('--b-text', '#000');
    document.documentElement.style.setProperty('--sky', '#354a4a');
    document.documentElement.style.setProperty('--mountain', '#4f7b91');
    document.documentElement.style.setProperty('--mountain-shadow', '#304a58');
    document.documentElement.style.setProperty('--snow', '#ccc');
    document.documentElement.style.setProperty('--snow-shadow', '#bbb');
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
