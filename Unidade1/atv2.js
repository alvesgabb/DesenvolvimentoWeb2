//Crie um array chamado numeros e receba do usuário quantos números ele quiser.
//a) Exiba o maior e o menor valor do array (use Math.max(...array) e Math.min(...array)).
//b) Crie um novo array chamado dobro que contenha o dobro de cada número do array original (use map()).
//c) Filtre e exiba apenas os números maiores que 5 do array original (use filter()).

const prompt = require("prompt-sync")();

const quantidade = parseInt(
  prompt("Digite a quantidade de números que você deseja no array: ")
);

let numeros = new Array(quantidade);

for (let i = 0; i < quantidade; i++) {
  numeros[i] = parseInt(prompt(`Digite o número ${i + 1}:`));
}

const maiorNumero = Math.max(...numeros)
const menorNumero=Math.min(...numeros)


const maioresQueCinco = numeros
.filter((n) => n > 5);

const dobro = numeros
.map((n) => n * 2);



console.log(`Seu array: "${numeros}`)
console.log(`Maior número do seu array: ${maiorNumero}`)
console.log(`Menor número do seu array: ${menorNumero}`)
console.log(`Números maiores que 5: ${maioresQueCinco}`);
