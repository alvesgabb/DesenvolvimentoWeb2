                                                //EXERCICIO 2
//Treinar o uso de res.send(), res.json() e res.status() para personalizar a resposta do servidor

/*rie uma rota /produto que receba uma query id. Dependendo do valor, envie uma resposta diferente:
Se id for "1", envie: { "nome": "Mouse", "preco": 100 }
Se id for "2", envie: { "nome": "Teclado", "preco": 200 }
Para qualquer outro valor, envie:
Status HTTP: 404
Mensagem: "Produto não encontrado"*/


//importa o express e instância o app
const express = require("express");     
const app = express(); 
const porta = 600;

//Rota raiz
app.get("/", (req, res) => { 
  res.send("Servidor funcionando! ");
});

 //Rota produto 
app.get("/produto", (req, res) => { 
  const id = req.query.id;

  //Se o ID for "1" retorna um mouse
  if (id == "1") { 
    res.json({
      "nome": "Mouse",
      "preco": "100",
    });

  //Se o ID for "2" retorna um teclado
  } else if (id == "2") {
    res.json({
      "nome": "Teclado",
      "preco": "200",
    });
   
  // Se for qualquer outro ID exibe o retorna o erro 404 
  } else {
    res.status(404).send("Produto não encontrado."); 
  }
});

//inicia o app na porta 600
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
