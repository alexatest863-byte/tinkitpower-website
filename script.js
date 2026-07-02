document.addEventListener("DOMContentLoaded", () => {
  const disabledButton = document.querySelector(".secondary");
  disabledButton?.addEventListener("click", (event) => event.preventDefault());
});
