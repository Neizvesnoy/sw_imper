(() => {
    const refs = {
      openModalBtn: document.querySelector('.coment_button'),
      closeModalBtn: document.querySelector('.svg_close'),
      modal: document.querySelector('.pop_up'),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
  