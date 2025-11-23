//Peça ao usuário que informe uma palavra.
//a) Exiba a quantidade de caracteres da palavra.
//b) Verifique se a palavra é um palíndromo (ou seja, se ela é igual quando lida de trás para frente). Exiba no console uma mensagem indicando se é ou não um palíndromo.
//Dica: Use split(''), reverse() e join('') para inverter a palavra.

const prompt = require("prompt-sync")();

const palavra = prompt("Informe uma palavra:");

console.log(`Quantidade de caracteres da paralavra "${palavra}": ${palavra.length}`) 

const palavrainvertida = palavra.split("").reverse().join(""); //invertendo a palavra
console.log(`Palavra "${palavra}" invertida: ${palavrainvertida}`)


if (palavra.toLowerCase==palavrainvertida.toLowerCase){ 
    console.log("A palavra é um palíndromo.")
}
else {
    console.log("A palavra não é um palíndromo.")
}


