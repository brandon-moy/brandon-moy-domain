const $nav = document.querySelector('nav');

// eslint-disable-next-line
function modeChange() {
  $nav.classList.toggle('navbar-dark');
  $nav.classList.toggle('navbar-white');
  $nav.classList.toggle('bg-dark');
  $nav.classList.toggle('bg-light');
}
