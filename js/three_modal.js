(() => {
  const refsThree = {
    openModalBtn: document.querySelector("[data-modal-open-3]"),
    closeModalBtn: document.querySelector("[data-modal-close-3]"),
    modal: document.querySelector("[data-modal-3]"),
  };

  refsThree.openModalBtn.addEventListener("click", toggleModal);
  refsThree.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refsThree.modal.classList.toggle("is-hidden");
  }
})();