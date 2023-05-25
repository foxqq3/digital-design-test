const links = document.querySelectorAll(
  '.header__menu-item, .footer__menu-item'
);
console.log(links);

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const anchorPos = document.querySelector(href).offsetTop;

  scroll({
    top: anchorPos,
    behavior: 'smooth',
  });
}
