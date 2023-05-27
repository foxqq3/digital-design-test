import './styles/style.css';

import initAnchors from './js/initAnchor.js';
import upButton from './js/upButton.js';
import themeSwitch from './js/themeSwitch.js';
import getDayInfo from './js/getDayInfo.js';
import popup from './js/popup.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnchors();
  upButton();
  themeSwitch();
  getDayInfo();
  popup();

  let dateFields = document.querySelectorAll('.card__date');
  dateFields.forEach((dateField) => {
    const currentDate = new Date(dateField.getAttribute('datetime'));
    dateField.append(getDayInfo(currentDate));
  });
});