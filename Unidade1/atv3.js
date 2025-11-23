//Crie um objeto literal chamado carro com as seguintes propriedades:
//– marca
//– modelo
//– ano
//– exibirInfo (um método que exibe no console as informações do carro no formato: "Marca: X | Modelo: Y | Ano: Z")
//Depois:
//a) Chame o método exibirInfo().
//b) Adicione dinamicamente uma nova propriedade chamada cor com o valor "Preto".
//c) Atualize o valor de ano para o ano atual (2025).
//d) Exiba o objeto completo no console para verificar as alterações.


const carro = {  
  Marca: "X",
  Modelo: "Y",
  Ano: "Z",
  exibirInfo: function () { 
    console.log(
      `Marca: ${this.Marca} | Modelo: ${this.Modelo} | Ano:${this.Ano}`
    );
  },
};

carro.exibirInfo();  
carro.Ano = 2025;   
carro.Cor = "Preto"; 
const entradas=Object.entries(carro); 
console.log(entradas)
