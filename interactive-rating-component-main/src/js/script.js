const choiceSection = document.querySelector(".choice"); 
const resultSection = document.querySelector(".result");
const divSubmit = document.querySelector(".submit"); //aqui é button submit
const score = document.querySelector(".score"); //aqui é onde vai aparecer o texto personalizado depois que selecionar a avaliação
const star = document.querySelectorAll(".nav"); //aqui é a nota da avaliação
const rating = document.querySelectorAll(".rating ");


//aqui vai ser o evento de clique do botão
divSubmit.addEventListener("click", () => {
  const selectRadio = document.querySelector('input[name="stars"]:checked')
  if(!selectRadio) return
  choiceSection.style.display = "none";
  resultSection.style.display = "flex";
  console.log(selectRadio.value)
});

/* 
mudar os circulos de li para inputs de radio
pegar qual input está selecionado
depois validar se existe um input selecionado, se não o botão não funciona
por fim só pegar o valor do input slecionado e apresentar junto ao texto
*/