const WebSocket = require('ws')
const webSocketServer = new WebSocket.Server({ port: 3003 });
  
let listMessage = [];  
  
webSocketServer.on('connection', webSocket => {
	forEach.listMessage(message => webSocket.send(message));
    webSocket.onmessage = messageEvent => {
        const message = messageEvent.data;
		listMessage.push(message);
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    };
	
});

module.exports = webSocketServer;
