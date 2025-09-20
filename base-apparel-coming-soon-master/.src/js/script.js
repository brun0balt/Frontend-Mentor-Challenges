const btn = document.querySelector(".btn-submit")
const error = document.querySelector(".icon-error")
const input = document.getElementById("input")
const errorText = document.querySelector(".error-alert")

btn.addEventListener("click", (event) => {
    event.preventDefault();
    if(input === "")
        error.classList.remove("icon-error")
        error.classList.add("active")
        input.classList.add("active")
        errorText.classList.add("active")
})