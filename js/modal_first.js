(() => {
  const refsOne = {
    openModalBtn: document.querySelector("[data-modal-open-1]"),
    closeModalBtn: document.querySelector("[data-modal-close-1]"),
    modal: document.querySelector("[data-modal-1]"),
  };

  refsOne.openModalBtn.addEventListener("click", toggleModal);
  refsOne.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refsOne.modal.classList.toggle("is-hidden");
  }
})();