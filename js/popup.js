export default function popup() {
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');
  const cards = document.querySelectorAll('.card');
  const closeButton = popup.querySelector('button[name="popup-close');
  const form = popup.querySelector('form');

  for (const card of cards) {
    const openButton = card.querySelector('.card__button');
    const cardTitle = card.querySelector('.card__title').textContent;

    openButton.addEventListener('click', () => {
      body.classList.add('body-lock');
      popup.classList.add('popup_show');
      popup.querySelector('.popup__name').textContent = cardTitle.replace(
        /[\s{2,}]+/g,
        ' '
      );
      popup.querySelector('textarea').value = cardTitle.replace(
        /[\s{2,}]+/g,
        ' '
      );
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
    body.classList.remove('body-lock');
    popup.classList.remove('popup_show');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Покупка прошла успешно! \n Ваш заказ: \n `)
    console.log(e.target);
    hidePopup();
  });
  
}
