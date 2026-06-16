class StatusHandler {
  constructor(services) {
    this.services = services;
  }

  handle(socket, payload) {
    socket.send(JSON.stringify({ type: "StatusHandler", payload, receivedAt: new Date().toISOString() }));
  }
}

module.exports = StatusHandler;
