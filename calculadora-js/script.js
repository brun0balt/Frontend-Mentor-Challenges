let display = document.querySelector("#display");
let currentOperator = "";

// o numero 0 irá aparecer sempre que abrir a calculadora
let currentInput = "0";
display.textContent = currentInput;

// pega o numero que foi digitado e apaga o 0
function appendNumber(value) {
  if (currentInput === "0") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

// se o numero for vazio e o operador for diferente de ponto nao acontece nada
function appendOperator(operator) {
  if (currentInput === "" && operator !== ".") return;

  //o includes verifica se o ultimo caractere(slice -1) foi um operador e se for o return impede que seja repetido
  let lastChar = currentInput.slice(-1);
  if ("+-*/.%".includes(lastChar)) return;

  // pega o operador que foi digitado
  currentInput += operator;
  display.textContent = currentInput;
}

// a função eval() retorna calculos em tipos strings
function calculate() {
  try {
    let result = eval(currentInput);
    // se o resultado nao for inteiro, ira aparecer apenas 2 casas depois do ponto
    if (!Number.isInteger(result)) {
      result = result.toFixed(2);
    }
    currentInput = result;
    display.textContent = currentInput;
  } catch (err) {
    // caso aconteça algum erro de operação aparecerá error na tela
    display.textContent = "Error";
    currentInput = "";
  }
}

function clearDisplay() {
  // irá aparecer 0 quando limpar o display
  currentInput = "0";
  display.textContent = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
}
