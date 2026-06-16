class DeliveryHandler {
  constructor(services) {
    this.services = services;
  }

  handle(socket, payload) {
    socket.send(JSON.stringify({ type: "DeliveryHandler", payload, receivedAt: new Date().toISOString() }));
  }
}

module.exports = DeliveryHandler;
