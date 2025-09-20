const questions = document.querySelectorAll(".title-question");
  const btnPlus = document.querySelectorAll(".plus");
  const btnMinus = document.querySelectorAll(".minus");
  const answer = document.querySelectorAll(".answer");

  questions.forEach((q, i) => {
    q.addEventListener("click", (e) => {
      answer[i].classList.toggle("active");
      btnPlus[i].classList.toggle("active");
      btnPlus[i].classList.toggle("inactive");
      btnMinus[i].classList.toggle("active");
      btnMinus[i].classList.toggle("inactive");
    });
  });