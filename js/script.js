/* =============================================================
   Bailey Roggen — Portfolio JavaScript
   ============================================================= */


/* ── SCROLL FADE-IN ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});


/* ── MOBILE NAV TOGGLE ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});


/* ── IMAGE MODAL ──────────────────────────────────────────── */
function openModal(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'block';
  modalImg.src = src;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Also close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});


/* ── CONTACT FORM (Formspree AJAX) ────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  const successMsg = document.createElement('p');
  successMsg.textContent = '✓ Thanks! Your message has been sent.';
  successMsg.style.cssText = 'color:#4e5a43; margin-top:12px; font-size:0.9em; display:none;';
  form.appendChild(successMsg);

  form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          form.reset();
          successMsg.style.display = 'block';
        } else {
          alert('Oops! There was a problem submitting your form.');
        }
      })
      .catch(() => alert('Error: Could not send message.'));
  });
});