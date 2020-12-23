let sum = 0;
let lastOperator = "=";

function calculate() {
  const num = getInputNumber();
  if (lastOperator === "+") {
    sum += num;
  } else if (lastOperator === "-") {
    sum -= num;
  } else if (lastOperator === "=") {
    sum = num || 0;
  }
}

function getInputNumber() {
  const input = document.getElementById("number");
  return parseInt(input.value);
}

function cleanInput() {
  document.getElementById("number").value = "";
}

const operate = (operator) => {
  calculate();
  cleanInput();
  lastOperator = operator;
};

const operatorsButtons = document.querySelectorAll("button[data-operator]");
for (let i = 0; i < operatorsButtons.length; i++) {
  const operatorButton = operatorsButtons[i];
  operatorButton.addEventListener("click", (e) => {
    e.preventDefault();
    const operator = operatorButton.dataset.operator;
    operate(operator);
  });
}

document.getElementById("sum").addEventListener("click", (e) => {
  e.preventDefault();
  calculate();
  lastOperator = "=";
  document.getElementById("number").value = sum;
});
