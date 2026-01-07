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

// Toggle mobile nav menu
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

//Form messages
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const successMessage = document.createElement("p");
  successMessage.textContent = "Thanks! Your message has been sent.";
  successMessage.style.color = "green";
  successMessage.style.display = "none"; // Hidden by default
  form.appendChild(successMessage);

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          successMessage.style.display = "block";
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      })
      .catch((error) => {
        alert("Error: Could not send message.");
      });
  });
});