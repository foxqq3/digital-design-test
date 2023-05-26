import './styles/style.css';

import initAnchors from './src/initAnchor.js';
import upButton from './src/upButton.js'
import themeSwitch from './src/themeSwitch.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnchors();
  upButton();
  themeSwitch();
});
