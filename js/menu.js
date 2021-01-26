(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-meny-open]'),
    closeModalBtn: document.querySelector('[data-meny-close]'),
    modal: document.querySelector('[data-meny]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
