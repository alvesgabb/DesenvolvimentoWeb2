//Crie uma classe chamada Livro com os atributos titulo, autor e ano.
//Adicione um método chamado detalhes() que exiba:
//"Livro: [titulo] | Autor: [autor] | Ano: [ano]"
//Depois:
//a) Crie duas instâncias da classe Livro, com dados diferentes.
//b) Chame o método detalhes() para ambos os livros.

class Livro {
  constructor(titulo, autor, ano) {  
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  detalhes() { 
    console.log(
      `Livro: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`
    );
  }
}

const livro1 = new Livro("A Metamorfose", "Franz Kafka", 1915);
const livro2 = new Livro("Frankenstein", "Mary Shelley", 1818);

livro1.detalhes(); 
livro2.detalhes();
