// MODAL
const modalOverlay = document.querySelector('.modal_overlay');

// CARDS
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", function() {
    modalOverlay.classList.add('active');
  })
}
// FECHANDO O MODAL
document.querySelector('.close_modal').addEventListener("click", function() {
  modalOverlay.classList.remove("active");
});

