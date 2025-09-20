const btnSubmit = document.querySelector(".submit");
const form = document.querySelector(".nav");
let result = null

btnSubmit.addEventListener("click", () => {
    const resultNumber = document.querySelector(".result-data")
    const resultSection = document.querySelector(".result");
    const choiceSection = document.querySelector(".choice")
    

    if (result) {
        resultNumber.textContent = result
        choiceSection.classList.add("hidden")
        resultSection.classList.remove("hidden")
    } else {
        
    }
});

form.addEventListener("change", (e) => {
    btnSubmit.disabled=false
    result = e.target.value
})