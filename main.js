const $nav = document.querySelector('nav');
const $sunMoon = document.querySelector('.sun-moon');
const hiddenElements = document.querySelectorAll('.hidden');

let day = true;

const modeChange = () => {
  if (day) {
    toggleNav();
    document.documentElement.style.setProperty('--main', '#B6C5DC');
    document.documentElement.style.setProperty('--text', '#5A6169');
    document.documentElement.style.setProperty('--sky', '#CFDFF1');
    document.documentElement.style.setProperty('--mountain', '#AFAFDC');
    document.documentElement.style.setProperty('--mountain-shadow', '#8484a8');
    document.documentElement.style.setProperty('--snow', '#ddd');
    document.documentElement.style.setProperty('--snow-shadow', '#ccc');
    document.documentElement.style.setProperty('--button', '#ddd');
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
    document.documentElement.style.setProperty('--button', '#4f7b91');
    document.documentElement.style.setProperty('--light', '#fff');
    day = true;
  }
};

const toggleNav = () => {
  $nav.classList.toggle('bg-dark');
  $nav.classList.toggle('bg-secondary');
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

hiddenElements.forEach(el => observer.observe(el));
$sunMoon.addEventListener('click', modeChange);
