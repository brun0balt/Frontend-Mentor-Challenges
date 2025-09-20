const buttonAccess = document.querySelector(".button-access");
const errorInput = document.querySelector(".error-msg");
const emailInput = document.querySelector(".email-input");
let emailValue;

buttonAccess.addEventListener("click", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const isValid = validateEmail(email);

  if (isValid) {
    errorInput.style.visibility = "visible";
    errorInput.style.color = "#9bff2a";
    errorInput.innerText = "An email has been sent to your inbox";
  } else {
    errorInput.style.visibility = "visible";
  }
});

const validateEmail = (email) => {
  const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
  return regex.test(email);
};

const buttonSignup = document.querySelector(".signup");
buttonSignup.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "register.html";
});

const signinButton = document.querySelector(".signin-btn");
signinButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "login.html";
});
