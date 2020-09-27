//測試用文字
console.log("Local host start running!!");

//Node.JS 測試伺服器
//const http = require('http');
//const hostname = '127.0.0.1';
//const port = 3000;

//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/html'); //純文字 text/plain，改為text/html
//  res.end('Hello, <u>My Server!</u>');
//});

//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});



//Assignment 2: Build Backend API for Front-End
const express = require('express');  
const server = express()
const port = 3000

server.get('/', (req, res) => {
  res.send('Hello My Server!')
})

server.get('/getData', (req, res) => {
  console.log(req.query.number);
  if (!req.query.number) {
    res.send('Lack of Parameter')
  } else if (req.query.number%1 === 0 && req.query.number > 0 ) {
    let i = Number(req.query.number);
    res.send('The result is ' + (i * (i + 1)) / 2 + ".");
        //let sum = 0
    //for (i = i; i > 0; i--) {
    //  sum += i 
    //}
    //res.send(`${sum}`)
  } else {
    res.send('Wrong Parameter')
  }
})

server.listen(port, () => {
  console.log(`Example server listening at http://localhost:${port}`)
})

//Assignment 3: Connect to Backend API by AJAX
server.use(express.static('public'))