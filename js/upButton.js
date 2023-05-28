export default function upButton() {
  const upButton = document.querySelector('.up-button');
  const header = document.querySelector('.header__wrapper');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 150) {
      header.classList.add('header__wrapper_border');
    } else {
      header.classList.remove('header__wrapper_border');
    }

    if (scrollY > 300) {
      upButton.classList.add('up-button_show');
    } else {
      upButton.classList.remove('up-button_show');
    }
  });

  upButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}
