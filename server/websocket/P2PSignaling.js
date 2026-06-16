class P2PSignaling {
  constructor(services) {
    this.services = services;
  }

  handle(socket, payload) {
    socket.send(JSON.stringify({ type: "P2PSignaling", payload, receivedAt: new Date().toISOString() }));
  }
}

module.exports = P2PSignaling;
