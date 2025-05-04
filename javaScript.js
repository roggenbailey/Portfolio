/* fade when scrolling */
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: stop observing
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

/* full image */
function openModal(src) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

/* close image */
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
