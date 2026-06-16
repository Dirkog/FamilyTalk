class NotificationHandler {
  constructor(services) {
    this.services = services;
  }

  handle(socket, payload) {
    socket.send(JSON.stringify({ type: "NotificationHandler", payload, receivedAt: new Date().toISOString() }));
  }
}

module.exports = NotificationHandler;
