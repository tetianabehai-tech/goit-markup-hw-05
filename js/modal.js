const modalBackdrop = document.querySelector('#modal');
const openModalButton = document.querySelector('.hero-button');
const closeModalButton = document.querySelector('.modal-close');

function openModal() {
  modalBackdrop.classList.add('is-open');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('#user-name').focus();
}

function closeModal() {
  modalBackdrop.classList.remove('is-open');
  modalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  openModalButton.focus();
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
    closeModal();
  }
});
