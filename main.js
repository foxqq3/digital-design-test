import './styles/style.css';

import initAnchors from './js/initAnchor.js';
import upButton from './js/upButton.js'
import themeSwitch from './js/themeSwitch.js';
import getDayInfo from './js/getDayInfo.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnchors();
  upButton();
  themeSwitch();
  getDayInfo();
});


