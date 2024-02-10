import "./css/style.scss";

const signUp = document.getElementById("sign-up");
const success = document.getElementById("success");
const form = document.getElementById("sign-up-form");
const emailInput = document.getElementById("email");
const emailDisplay = document.getElementById("success-email");
const dismissBtn = document.getElementById("dismiss");

function toggleVisiblity(id) {
  id.classList.toggle("hidden");
}

function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

dismissBtn.addEventListener("click", () => {
  form.reset();
  toggleVisiblity(success);
  toggleVisiblity(signUp);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  var email = formData.get("email");
  var valid = validateEmail(email);
  if (!valid) {
    form.classList.add("error");
    emailInput.setAttribute("aria-invalid", true);
  } else {
    form.classList.remove("error");
    emailInput.setAttribute("aria-invalid", false);
    emailDisplay.innerHTML = email;
    toggleVisiblity(signUp);
    toggleVisiblity(success);
  }
});
