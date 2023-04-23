(() => {
  const refsTwo = {
    openModalBtn: document.querySelector("[data-modal-open-2]"),
    closeModalBtn: document.querySelector("[data-modal-close-2]"),
    modal: document.querySelector("[data-modal-2]"),
  };

  refsTwo.openModalBtn.addEventListener("click", toggleModal);
  refsTwo.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refsTwo.modal.classList.toggle("is-hidden");
  }
})();