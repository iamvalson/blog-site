import { validateEmail } from './utils.js';

  function wireForm(root){
    const form = root.querySelector('form');
    if (!form) return;
    const input = form.querySelector('input[type="email"]');
    const errorEl = form.querySelector('.error');
    const successEl = form.querySelector('.success');

    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (errorEl) errorEl.textContent = '';
      if (!input) return;
      const value = input.value.trim();
      if (!value){
        if (errorEl) errorEl.textContent = 'Please enter your email.';
        return;
      }
      if (!validateEmail(value)){
        if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
        return;
      }
      input.value = '';
      if (successEl){
        successEl.style.display = 'inline';
        setTimeout(()=> successEl.style.display = 'none', 3500);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.newsletter').forEach(wireForm);
  });

