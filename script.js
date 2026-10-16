for (const form of document.querySelectorAll("form")) {
  const statusMessage = form.querySelector(".form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    statusMessage.textContent = "Form completed successfully. No information was sent.";
  });

  form.addEventListener("input", function () {
    statusMessage.textContent = "";
  });
}
