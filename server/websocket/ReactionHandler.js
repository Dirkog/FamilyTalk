class ReactionHandler {
  constructor(services) {
    this.services = services;
  }

  handle(socket, payload) {
    socket.send(JSON.stringify({ type: "ReactionHandler", payload, receivedAt: new Date().toISOString() }));
  }
}

module.exports = ReactionHandler;
