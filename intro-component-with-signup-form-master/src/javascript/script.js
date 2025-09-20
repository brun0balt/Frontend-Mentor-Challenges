fields = [
  {
    id: "first_name",
    validator: nameIsValid,
    errorMsg: "First Name cannot be empty",
  },
  {
    id: "last_name",
    validator: nameIsValid,
    errorMsg: "Last Name cannot be empty",
  },
  {
    id: "email",
    validator: emailIsValid,
    errorMsg: "Looks like this is not an email",
  },
  {
    id: "password",
    validator: passwordIsValid,
    errorMsg: "Password cannot be empty",
  },
];

const formBtn = document.querySelector(".form-btn");

formBtn.addEventListener("click", function (event) {
  event.preventDefault();

  fields.forEach(function (field) {
    // A mágica acontece aqui!
    const input = document.getElementById(field.id);
    const inputBox = input.closest(".input-box");
    const errorSpan = inputBox.querySelector(".error-msg");
    const errorIcon = inputBox.querySelector(".fa-solid");

    // Agora vamos verificar se o campo é válido ou não;
    if (!field.validator(input.value)) {
      // Se for inválido, mostramos o erro
      errorSpan.textContent = field.errorMsg;
      errorIcon.classList.add("active");
      input.classList.add("error"); // Adiciona a borda vermelha no input
    } else {
      // Se for válido, limpamos o erro
      errorSpan.textContent = "";
      errorIcon.classList.remove("active");
      input.classList.remove("error");
    }
  });
});

function nameIsValid(name) {
  return name.trim() !== "";
}

function emailIsValid(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function passwordIsValid(password) {
  return password.trim() !== "";
}
