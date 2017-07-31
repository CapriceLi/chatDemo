/**
 * Created by liaoguanqiang on 29/04/2017.
 */
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
       if (message.type === 'utf8') {
           console.log("Received: '" + message.utf8Data + "'");
        }
        // console.log("Received: '" + message);
    });

    function sendNumber() {
        if (connection.connected) {
            // var number = Math.round(Math.random() * 0xFFFFFF);
            // connection.sendUTF(number.toString());
            var str  = '456:send from client1';
            connection.sendUTF(str.toString());
            setTimeout(sendNumber, 6000);
        }
    }
   sendNumber();
});

client.connect('ws://localhost:3000/123', 'echo-protocol');