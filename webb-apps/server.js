// server.js

const { request } = require('http');

// const http = require('http'), server = http.createServer();

// server.on('request' ,(request, response) =>{
//     response.writeHead(200, {'Content-Type':'text/plain'});
//     response.write('Hello world');
//     response.end();
// });

// server.listen(3000,()=>{
//     console.log('Node server created at port 3000');
// });

// Routing 

// const http = require('http'), url = require('url'),

// makeServer = function (request, response) {
//     let path = url.parse(request.url).pathname;
//     console.log(path);
//     if(path === '/') {
//         response.writeHead(200,{'Content-Type':'text/plain'});
//         response.write('Hello world player!');
//     }
//     else if(path === '/about') {
//         response.writeHead(200, {'Content-Type': 'text/plain'});
//         response.write('About page');
//     }
//     else if(path === '/blog') {
//         response.writeHead(200, {'Content-Type': 'text/plain'});
//         response.write('Blog page');
//     }
//     else {
//         response.writeHead(404, {'Content-Type': 'text/plain'});
//         response.write('Error page');
//     }
//     response.end();
// },

// server = http.createServer(makeServer);
// server.listen(3000, () => {
//     console.log('Node server created at port 3000');
// });


//Routing with Express
const express = require('express'), server = express();

server.set('port', process.env.PORT || 3000);

//Basic routes 
server.get('/', (request,response)=>{
    response.send('Home page');
});

server.get('/about', (request,response)=>{
    response.send('About page');
});

//Express error handling middleware
server.use((request,response)=>{
    response.type('text/plain');
    response.status(505);
    response.send('Error page');
});

//Binding to a port
server.listen(3000, ()=>{
    console.log('Express server started at port 3000');
});