document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const registerInputs = document.querySelectorAll(".register-input");
  const errorMessages = document.querySelectorAll(".error-msg");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    registerInputs.forEach((input, index) => {
      if (input.value.trim() === "") {
        errorMessages[index].style.visibility = "visible";
        input.style.border = "1px solid red";
        isValid = false;
      } else {
        errorMessages[index].style.visibility = "hidden";
        input.style.border = "none";
      }

      if (input.type === "email" && input.value.trim() !== "") {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(input.value)) {
          errorMessages[index].innerText =
            "Please enter a valid email address *";
          errorMessages[index].style.visibility = "visible";
          isValid = false;
        }
      }

      if (registerInputs[index].value.trim().length < 7) {
        errorMessages[index].style.visibility = "visible";
        isValid = false;
      }
    });

    if (isValid) {
      window.location.href = "index.html";
    }
  });
});

const siginupButton = document.querySelector(".signup-btn");
siginupButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "register.html";
});

const houseButton = document.querySelector(".fa-house");
houseButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "index.html"
});
