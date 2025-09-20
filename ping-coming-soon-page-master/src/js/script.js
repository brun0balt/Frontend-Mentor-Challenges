const emailInput = document.getElementsByClassName("email");
const emailAlert = document.querySelector(".error-message");
const notifyBtn = document.getElementById("notify-btn");

function validateEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;
    return emailRegex.test(email);
}

notifyBtn.addEventListener('click', () => {
    // const email = emailInput.value.trim();
    const active = document.querySelector(".dactive");
    console.log(active)

    if(emailInput.value === "") {
        emailAlert.classList.add("active");
    } else {
        emailAlert.classList.remove("active");
    }
})