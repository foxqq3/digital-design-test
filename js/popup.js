export default function popup() {
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');
  const cards = document.querySelectorAll('.card');
  const closeButton = popup.querySelector('button[name="popup-close');
  const form = popup.querySelector('form');

  for (const card of cards) {
    const openButton = card.querySelector('.card__button');
    const cardTitle = card.querySelector('.card__title').getAttribute('title');

    openButton.addEventListener('click', () => {
      body.style.paddingRight = `${
        window.innerWidth - document.documentElement.clientWidth
      }px`;
      body.style.overflow = 'hidden';

      popup.classList.add('popup_show');

      popup.querySelector('.popup__name').textContent = cardTitle;
      popup.querySelector('input[name="product-name"]').value = cardTitle;
    });
  }

  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    hidePopup();
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      hidePopup();
    }
  });

  function hidePopup() {
    body.style.paddingRight = '0px';
    body.style.overflow = 'auto';
    popup.classList.remove('popup_show');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const productName = form.querySelector('input[name="product-name"]').value;
    const productQuantity = form.querySelector(
      'input[name="product-quantity"]'
    ).value;
    const productComment = form.querySelector(
      'textarea[name="product-comment"]'
    ).value;
    const productColor = [
      ...form.querySelectorAll('input[name="product-color"]'),
    ].reduce((acc, i) => {
      acc = i.value;
      return acc;
    }, '');
    alert(`Покупка прошла успешно!\nВаш заказ: ${productName}\nКоличество: ${productQuantity}\nЦвет: ${productColor}\nКомментарий к заказу: ${productComment}`);
    e.target.reset();
    hidePopup();
  });
}
