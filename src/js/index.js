import focusLock from 'dom-focus-lock';

const ESC_CODE = 'Escape';
const MODAL_CLASS_OPEN = 'overlay--open';

const card = document.querySelector('.card');
const cardBtnDel = card.querySelector('.card-top__btn--del');

const modalOverlay = document.querySelector('.overlay');
const modalBtnCancel = modalOverlay.querySelector('.modal__btn--cancel');

const openModal = () => {
  focusLock.on(modalOverlay);
  modalOverlay.classList.add(MODAL_CLASS_OPEN);
};

const closeModal = () => {
  focusLock.off(modalOverlay);
  modalOverlay.classList.remove(MODAL_CLASS_OPEN);
};

const onEscKeydown = (evt) => {
  if (evt.key === ESC_CODE) {
    evt.preventDefault();
    closeModal();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

cardBtnDel.addEventListener('click', () => {
  openModal();
});

modalOverlay.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('overlay')) {
    closeModal();
  }
});

modalBtnCancel.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', onEscKeydown);
