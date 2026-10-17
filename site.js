(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
  }
  document.querySelectorAll('[data-inquiry-form]').forEach(form => {
    const fileInputs = [...form.querySelectorAll('input[type="file"]')];
    const error = form.querySelector('[data-form-error]');
    const submit = form.querySelector('[type="submit"]');
    const maxBytes = 7.5 * 1024 * 1024; // keep safely under Netlify's 8 MB total request limit
    fileInputs.forEach(input => {
      input.addEventListener('change', () => {
        const status = form.querySelector(`[data-file-status="${input.name}"]`);
        if (!status) return;
        const file = input.files && input.files[0];
        status.textContent = file ? `${file.name} · ${(file.size / 1024 / 1024).toFixed(2)} MB` : 'No file selected';
      });
    });
    form.addEventListener('submit', event => {
      const files = fileInputs.flatMap(input => input.files ? [...input.files] : []);
      const total = files.reduce((sum, file) => sum + file.size, 0);
      const invalidType = files.find(file => !file.type.startsWith('image/'));
      if (invalidType) {
        event.preventDefault();
        if (error) { error.textContent = 'Please upload image files only.'; error.classList.add('show'); }
        return;
      }
      if (total > maxBytes) {
        event.preventDefault();
        if (error) { error.textContent = 'Your selected images are larger than 7.5 MB in total. Please choose smaller images before submitting.'; error.classList.add('show'); }
        return;
      }
      if (error) error.classList.remove('show');
      if (submit) { submit.disabled = true; submit.textContent = 'Sending your inquiry…'; }
      // Do not prevent default: Netlify Forms must receive the native multipart form submission.
    });
  });
  document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
