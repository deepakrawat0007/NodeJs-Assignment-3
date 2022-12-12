const fs = require('fs');
const http = require('http');

function CreatePage(name){
   const data = fs.writeFile('index.html' ,
    `<h1> Hello World </h1>  
    <p> This is ${name}... </p>`
   ,(err)=>{
    console.log(err);
   }
)}
CreatePage('Deepak');

const server = http.createServer()

server.on("request",(req,res) =>{
    if(req.url == "/"){
    fs.readFile('index.html' , (err , data)=>{
        res.end(data)
    })}
    else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.write("<h2> Error 404 Page Not Found </h2>");
        res.end();
    }
});

server.listen(5000,()=> console.log("Server is UP"));