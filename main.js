document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMobileNav = document.getElementById('close-mobile-nav');

  // Create overlay for mobile nav
  let overlay = document.createElement('div');
  overlay.id = 'mobile-nav-overlay';
  overlay.style.display = 'none';
  document.body.appendChild(overlay);

  function openMobileNav() {
    mobileNav.classList.add('open');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNavFn() {
    mobileNav.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMobileNav);
  closeMobileNav.addEventListener('click', closeMobileNavFn);
  overlay.addEventListener('click', closeMobileNavFn);

  // Close menu when a link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNavFn);
  });

  // Highlight active link
  document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Newsletter signup validation
  const newsletterForm = document.querySelector('.newsletter form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const errorSpan = newsletterForm.querySelector('.error');
      const successSpan = newsletterForm.querySelector('.success');
      const email = emailInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      errorSpan.textContent = '';
      successSpan.style.display = 'none';

      if (!email) {
        errorSpan.textContent = 'Please enter your email address.';
        emailInput.focus();
        return;
      }
      if (!emailRegex.test(email)) {
        errorSpan.textContent = 'Please enter a valid email address.';
        emailInput.focus();
        return;
      }

      // Simulate successful subscription
      errorSpan.textContent = '';
      successSpan.style.display = 'inline';
      emailInput.value = '';
    });
  }
});