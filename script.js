document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.apk-coming-soon, .mobile-actions button').forEach((button) => {
    button.addEventListener('click', (event) => event.preventDefault());
  });
});
