//captura dos elementos no DOM
const idfilme = document.getElementById("id-filme");
const botaoBuscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

//criando um evento ao cliclar no botão de busca 
botaoBuscar.addEventListener("click", () => {
  const idFilme = idfilme.value.trim();

//validação caso o usuario não digite nada
if (idFilme === "") {
    resultado.textContent = "Digite um ID de filme.";
    return; 
  }

  resultado.textContent = "Buscando filme....";
  const url = `https://ghibliapi.vercel.app/films/${idFilme}`;

  // requisição à API
  fetch(url)
    .then (response => {
      //Se a requisição não for OK, lança um erro pra cair no catch
      if (!response.ok) {
      throw new Error("Filme não encontrado.");
    }
      return response.json();
    })
    
   //exibindo os dados do filme no DOM
    .then(data => {
        resultado.innerHTML = `<p><strong>Filme:</strong> ${data.title}</p>
        <p><strong>Título original:</strong> ${data.original_title}</p>
        <img src="${data.image}">
        <p><strong>Descrição:</strong>${data.description}</p>
        <p><strong>Produtor:</strong>${data.producer}</p>
        <p><strong>Diretor:</strong> ${data.director}</p>
        <p><strong>Data de lançamento:</strong> ${data.release_date}</p>
        <p><strong>Duração:</strong>${data.running_time}min</p>`;
    })

    .catch (error => {
      //Mensagem no DOM e no console
      resultado.textContent=error.message
      console.error("Erro ao buscar o filme:", error);
    });
});

/*Alguns filmes pra buscar:
0440483e-ca0e-4120-8c50-4c8cd9b965d6
ea660b10-85c4-4ae3-8a5f-41cea3648e3e
*/
