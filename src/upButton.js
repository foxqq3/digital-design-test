const btnUp = {
  el: document.querySelector('.up-button'),
  show() {
    this.el.classList.remove('up-button_hide');
  },
  hide() {
    this.el.classList.add('up-button_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.up-button').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
