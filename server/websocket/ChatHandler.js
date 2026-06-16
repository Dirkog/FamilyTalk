class ChatHandler {
  constructor(services) {
    this.services = services;
  }

  handle(socket, payload) {
    socket.send(JSON.stringify({ type: "ChatHandler", payload, receivedAt: new Date().toISOString() }));
  }
}

module.exports = ChatHandler;
