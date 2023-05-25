const btn = document.querySelector('.header__switch-theme');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  if (body.getAttribute('theme') === 'light') {
    body.setAttribute('theme', 'dark');
  } else {
    body.setAttribute('theme', 'light');
  }
});

// btn.addEventListener('click', () => {
//   if (theme.getAttribute('theme') === 'light') {
//     setTheme('dark');
//   } else {
//     setTheme('light');
//   }
// });
