for (const form of document.querySelectorAll("form")) {
  const statusMessage = form.querySelector(".form-status");
  const fields = form.querySelectorAll("input[required], textarea[required], select[required]");
  const password = form.querySelector('[name="password"]');
  const confirmPassword = form.querySelector('[name="confirm-password"]');
  const customValidation = form.hasAttribute("data-feedback");
  let submitted = false;

  function validateForm() {
    if (confirmPassword) {
      confirmPassword.setCustomValidity("");
      if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
      }
    }

    for (const field of fields) {
      const valid = field.validity.valid;
      field.classList.toggle("is-valid", valid);
      field.classList.toggle("is-invalid", !valid);
      field.setAttribute("aria-invalid", String(!valid));
    }

    const genderError = form.querySelector("#gender-error");
    if (genderError) {
      const selected = form.querySelector('input[name="gender"]:checked');
      genderError.classList.toggle("d-block", !selected);
      form.querySelector("#gender-valid").classList.toggle("d-block", Boolean(selected));
    }

    return form.checkValidity();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitted = true;
    statusMessage.classList.remove("error");

    if (customValidation && !validateForm()) {
      statusMessage.textContent = "Please check the highlighted fields.";
      statusMessage.classList.add("error");
      const firstInvalidField = form.querySelector("input:invalid, textarea:invalid, select:invalid");
      firstInvalidField.focus();
      return;
    }

    statusMessage.textContent = "Form completed successfully. No information was sent.";
  });

  form.addEventListener("input", function () {
    statusMessage.textContent = "";
    statusMessage.classList.remove("error");
    if (submitted && customValidation) {
      validateForm();
    }
  });

  form.addEventListener("reset", function () {
    submitted = false;
    statusMessage.textContent = "";
    statusMessage.classList.remove("error");

    for (const field of fields) {
      field.classList.remove("is-valid", "is-invalid");
      field.removeAttribute("aria-invalid");
      field.setCustomValidity("");
    }

    for (const message of form.querySelectorAll(".d-block")) {
      message.classList.remove("d-block");
    }
  });
}
