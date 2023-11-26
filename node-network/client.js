const net = require('net');
let client = net.connect({port:8080});

client.on('data', (data)=>{
    console.log(data.toString());
});