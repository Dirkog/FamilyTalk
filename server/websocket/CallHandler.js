class CallHandler {
  constructor(services) {
    this.services = services;
  }

  handle(socket, payload) {
    socket.send(JSON.stringify({ type: "CallHandler", payload, receivedAt: new Date().toISOString() }));
  }
}

module.exports = CallHandler;
