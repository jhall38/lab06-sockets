'use strict';
var net = require('net'), readline = require('readline'), client = new net.Socket(), io = readline.createInterface(process.stdin, process.stdout);
client.on('data', function (data) {
    console.log("Received: " + data);
});
client.on('close', function () {
    console.log('Connection closed');
});
var HOST = "69.91.148.57";
var PORT = 3000;
client.connect(PORT, HOST, function () {
    console.log('Connected to: ' + HOST + ':' + PORT);
    client.write("Hello server, I'm the client!");
});
