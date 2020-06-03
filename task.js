'use strict';

const modalWindow = document.getElementById('subscribe-modal');
const modalClose = modalWindow.querySelector('.modal__close');

const getCookie = name => {
  let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

modalClose.addEventListener('click', () => {
  modalWindow.classList.remove('modal_active');
  document.cookie = 'modal=close; Max-Age=31536000';
  console.log(document.cookie);
});

console.log(getCookie('modal'));

if (getCookie('modal') === 'close')
  modalWindow.classList.add('modal_active');
