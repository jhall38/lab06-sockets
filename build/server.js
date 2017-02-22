"use strict";
var net = require("net");
;
var server = net.createServer();
server.on('connection', function (socket) {
    socket.write('Hello!\n');
    socket.on('data', function (data) {
        var echo = data.toString().toUpperCase();
        if (echo === 'EXIT') {
            socket.write("Goodbye!");
            socket.end();
        }
        else {
            socket.write("Did you say '" + echo + "'?");
        }
    });
    socket.on('close', function () {
    });
    socket.end();
});
server.on('listening', function () {
    var addr = server.address();
    console.log('server listening on port %d', addr.port);
});
server.listen({
    host: "localhost",
    port: 3000
});
