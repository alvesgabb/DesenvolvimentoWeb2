                                              //EXERCICIO 1
//Compreender como acessar dados vindos da URL: parâmetros de rota (req.params) e parâmetros de query (req.query).


/*Crie um servidor Express com duas rotas:
Rota com parâmetro de rota  Caminho: /saudacao/:nome
Acesse o nome enviado e responda com a mensagem: "Olá, [nome]!"
Exemplo: Requisição para http://localhost:3000/saudacao/Ana
Resposta: "Olá, Ana!"
Rota com parâmetros de query
Caminho: /soma
Deve receber dois números a e b via query string.
Calcule a soma e retorne a resposta em JSON:*/



const express = require ("express");//importa o express
const app = express (); //instancia o app
const porta = 3000

app.get("/",(req,res) =>{
    res.send ("Servidor funcionando com Express!")

});

//1. Rota com parâmetro de rota

app.get("/saudacao/:nome",(req,res) =>{  

     const nome = req.params.nome;
     res.send(`Olá,${nome}!`)

});

//2. Rota com parâmetros de query

app.get("/soma",(req,res)=>{

    const a =  req.query.a;
    const b = req.query.b;

    //Convertendo para inteiro para conseguir somar
    const aInt = parseInt(a);
    const bInt= parseInt (b);

    const soma = aInt+bInt;

    res.json({
        a: aInt,
        b: bInt,
        resultado : soma
    })

})

//escuta na porta 3000
app.listen(porta,()=>{
    console.log(`Servirdor rodando em http://localhost:${porta}`)
});
