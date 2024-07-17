function clickModal(idModal) {
   modalSelected = document.getElementById(idModal);
   modalSelected.classList.toggle("hidden");
   bg = document.getElementById("modalbg");
   bg.classList.toggle("hidden");
}
