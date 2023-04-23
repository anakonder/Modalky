(() => {
  const refsfour = {
    openModalBtn: document.querySelector("[data-modal-open-4]"),
    closeModalBtn: document.querySelector("[data-modal-close-4]"),
    modal: document.querySelector("[data-modal-4]"),
  };

  refsfour.openModalBtn.addEventListener("click", toggleModal);
  refsfour.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refsfour.modal.classList.toggle("is-hidden");
  }
})();