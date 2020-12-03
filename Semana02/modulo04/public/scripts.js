// MODAL
const modalOverlay = document.querySelector('.modal_overlay');

// CARDS
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", function() {
    //VIDEO
    const videoId = card.getAttribute("id");
    window.location.href = `/video?id=${videoId}`;
    //MODAL
    modalOverlay.classList.add('active');
    //IFRAME
    modalOverlay.querySelector(".iframe").src = `https://www.youtube.com/embed/${videoId}`;
  })
}