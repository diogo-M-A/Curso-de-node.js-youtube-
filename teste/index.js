const express = require('express');
const app = express();

//.sendFile: envia o arquivo para ser carregado no servidor
//__dirname: o nome da variável que indica o caminho da pasta root do projeto dentro do pc
app.get('/', function(req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.get('/sobre', function(req, res){
    res.send('Esta é a rota "sobre" do meu servidor');
})

app.get('/blog', function(req, res){
    res.send('Esta é a rota "blog" deste servidor');
})

app.get('/ola/:cargo/:nome/:filme', function(req, res){
    res.send("<h1>olá " + req.params.nome+ "</h1>" + "<h2>Seu cargo é: " + req.params.cargo+ "</h2>" + "<h2>seu filme favorito é: " + req.params.filme + '</h2>');
})

app.listen(8081, function(req, res){
    console.log('servidor rodando na porta http://localhost:8081');
});