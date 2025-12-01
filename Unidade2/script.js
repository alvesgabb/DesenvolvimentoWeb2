//seleciona o display
const display = document.getElementById("display");
//seleciona os botões de números e operadores
const botoes = document.querySelectorAll(".bnt");

//evento de click para cada botão
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const valor = botao.textContent;
    //adiciona o valor ao display
    display.textContent += valor;
  });
});

//Seleciona o botão Clear
const clear = document.querySelector(".clear");
//quando clica remove tudo do display
clear.addEventListener("click", () => {
  display.textContent = "";
});

//Seleciona o botão para remover o último dígito
const btnRemover = document.querySelector(".removerultimo");
//quando clica remove o último digito do display
btnRemover.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
});

//Seleciona o botão para exibir o resultado
const bntResultado = document.querySelector(".botaoresultado");
//quando clica calcula o resultado no display 
bntResultado.addEventListener("click", () => {
  const expressao = display.textContent;

  let resultado;
  //Verifica qual operador existe na conta e faz a operação
  if (expressao.includes("+")) {
    const [num1, num2] = expressao.split("+");
    resultado = Number(num1) + Number(num2);
  } else if (expressao.includes("-")) {
    const [num1, num2] = expressao.split("-");
    resultado = Number(num1) - Number(num2);
  } else if (expressao.includes("*")) {
    const [num1, num2] = expressao.split("*");
    resultado = Number(num1) * Number(num2);
  } else if (expressao.includes("/")) {
    const [num1, num2] = expressao.split("/");
    resultado = Number(num1) / Number(num2);
  }
  //Mostra o resultado no display
  display.textContent = resultado;
});



















