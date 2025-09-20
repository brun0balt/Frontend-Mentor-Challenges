const btn = document.querySelector(".btn");
const input = document.querySelector("#email");

let emailValue;

btn.addEventListener("click", () => {
  if (input.value !== "") {
    emailValue = input.value;
    localStorage.setItem("email", emailValue);
  }

  window.location.href = "email.html";
});

