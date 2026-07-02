document.addEventListener("DOMContentLoaded", () => {
  const apkButton = document.querySelector(".btn-light");
  if (apkButton) {
    apkButton.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
});
