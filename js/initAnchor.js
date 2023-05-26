export default function initAnchors() {
  const anchors = document.querySelectorAll('.js-anchor')
  for (const anchor of anchors) {
    anchor.addEventListener('click', handleAnchorClick);
  }

  function handleAnchorClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const anchorPos = document.querySelector(href).offsetTop;

    scroll({
      top: anchorPos,
      behavior: 'smooth',
    });
  }
}
