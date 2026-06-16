class GroupHandler {
  constructor(services) {
    this.services = services;
  }

  handle(socket, payload) {
    socket.send(JSON.stringify({ type: "GroupHandler", payload, receivedAt: new Date().toISOString() }));
  }
}

module.exports = GroupHandler;
