// MODAL
const modalOverlay = document.querySelector('.modal_overlay');

// CARDS
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", function() {
    //VIDEO
    const videoId = card.getAttribute("id")
    //MODAL
    modalOverlay.classList.add('active')
    //IFRAME
    modalOverlay.querySelector(".iframe").src = `https://www.youtube.com/embed/${videoId}`;
  })
}
// FECHANDO O MODAL
document.querySelector('.close_modal').addEventListener("click", function() {
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector(".iframe").src = "";
});



