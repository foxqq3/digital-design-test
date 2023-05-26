export default function upButton() {
  const upButton = document.querySelector('.up-button');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollY);

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
