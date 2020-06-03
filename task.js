'use strict';

const modalWindow = document.getElementById('subscribe-modal');
const modalClose = modalWindow.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
  modalWindow.classList.remove('modal_active');
  document.cookie = 'modal=close; Max-Age=31536000';
  console.log(document.cookie);
});

if (document.cookie !== 'modal=close')
  modalWindow.classList.add('modal_active');
