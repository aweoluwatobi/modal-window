'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
  });
}

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
});

document.querySelector('body').addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.classList.add('hidden');
  }
});
