class TypingHandler {
  constructor(services) {
    this.services = services;
  }

  handle(socket, payload) {
    socket.send(JSON.stringify({ type: "TypingHandler", payload, receivedAt: new Date().toISOString() }));
  }
}

module.exports = TypingHandler;
