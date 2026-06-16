class MessageManager {
  snapshot() {
    return { manager: "MessageManager", status: "ready", createdAt: new Date().toISOString() };
  }
}

module.exports = MessageManager;
