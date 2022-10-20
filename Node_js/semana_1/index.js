
/*const http=require("http")
 function handleServer(req, res){
    res.write('<h1>Respuesta del iusario</h1>')
    res.end();
 }


 const server = http.createServer(handleServer).listen(3007)
 
 
 /*const http = require('http');
const host = 'localhost';
const port = 3003;


const requestLister = function(req, resp){
    resp.writeHead(200);
    resp.apply("Esto es jm sjrvidor")
}

const server=http.createServer(requestLister);
server.listen(port, host),()=>{
    console.log(`servidor ejecutandos correctamente`)
}
const op = require('./ejercicio1.js');


op.sumar(8,5)
op.restar(10,7)
op.multiplicar(10,2)
op.diividir(10,5)*/


const express = require('express')
const app = express();
const port = 3007

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, ()=>{
    console.log(`Ejemplo del servidor en el puerto ${port}`)
})