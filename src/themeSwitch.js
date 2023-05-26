export default function themeSwitch() {
  const btn = document.querySelector('.header__switch-theme');
  const body = document.querySelector('body');
  let currentTheme = localStorage.getItem('theme') || 'light';

  function setTheme(theme) {
    body.setAttribute('theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
  }

  setTheme(currentTheme);

  body.setAttribute('theme', currentTheme);

  btn.addEventListener('click', () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  });
}
