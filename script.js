'use strict';

// Modal buttons
const btnsShowModal = document.querySelectorAll('.show-modal');
// Modal box
const modal = document.querySelector('.modal');
// Close modal button
const btnCloseModal = document.querySelector('.close-modal');
// Overlay to blur out background for moda to show
const overlay = document.querySelector('.overlay');

// Function to show modal
const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Show modal when button is clicked
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModal);
}

// CLOSE MODAL
// When close icon is clicked
btnCloseModal.addEventListener('click', closeModal);
// When you click anywhere around the modal
overlay.addEventListener('click', closeModal);
// When escape key is pressed and modal is not hidden
document.querySelector('body').addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
