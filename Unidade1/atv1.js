//Crie uma função chamada avaliarRiscoDeCredito que receba dois parâmetros: rendaMensal e dividaAtual.
//1.Converter ambos os parâmetros recebidos (que serão strings) para números (usando parseFloat).
//2.Calcular a Taxa de Endividamento (TE) usando a fórmula: TE=(dividaAtual/rendaMensal)×100.
//Retornar uma mensagem de classificação de risco conforme a tabela abaixo:
// de Endividamento (TE)	Risco de Crédito TE < 10%	"Risco Baixo" 10% <= TE < 30%	"Risco Moderado" TE>=30%	"Risco Alto"
//Antes de chamar a função, utilize o módulo prompt-sync ou readline (conforme sua preferência no Node.js) para solicitar e receber os valores de renda mensal e dívida atual diretamente do usuário no terminal. Chame a função com os valores obtidos do usuário e exiba o resultado no console utilizando Template Literals (crase e ${}).

const prompt = require("prompt-sync")(); 

function avaliarRiscoDeCredito(rendaMensal, dividaAtual) { 
  const rendamensal = parseFloat(rendaMensal); 
  const dividaatual = parseFloat(dividaAtual);
  const TE = (dividaatual / rendamensal) * 100; //Calculando taxa TE
  if (TE < 10) {      //
    return `Sua taxa de endividamento: ${TE.toFixed(2)}% ====  Risco Baixo`;
  } else if (TE >= 10 && TE < 30) {
    return `Sua taxa de endividamento: ${TE.toFixed(2)}% === Risco Moderado`;
  } else TE >= 30;
  {
    return `Sua taxa de endividamento: ${TE.toFixed(2)}% === Risco Alto`;
  }
}

const rendaMensal = prompt("Digite sua renda mensal: "); 
const dividaAtual = prompt("Digite sua divida atual: ");

const resultado = avaliarRiscoDeCredito(rendaMensal, dividaAtual); 
console.log(`RESULTADO: ${resultado}`);
