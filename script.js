document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function (e) {
    const name    = this.name.value.trim();
    const email   = this.email.value.trim();
    const message = this.message.value.trim();
    const emailRGX = /^[\w.-]+@[\w.-]+\.\w+$/;

    if (!name || !email || !message || !emailRGX.test(email)) {
      alert("❗ Please fill in all fields with a valid email address.");
      e.preventDefault();
    } else {
      alert("Thank you! Your message has been sent.");
    }
  });
});

