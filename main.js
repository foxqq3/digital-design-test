import './styles/style.css';

import initAnchors from './js/initAnchor.js';
import upButton from './js/upButton.js'
import themeSwitch from './js/themeSwitch.js';
import getDayInfo from './js/getDayInfo.js';
import popup from './js/popup.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnchors();
  upButton();
  themeSwitch();
  getDayInfo();
  popup();
});

// document.querySelector('input[id="color-green"]').addEventListener('change',function(event) {
//   var item = event.target.value;
//   console.log(item);
// })
