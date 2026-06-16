class InviteManager {
  snapshot() {
    return { manager: "InviteManager", status: "ready", createdAt: new Date().toISOString() };
  }
}

module.exports = InviteManager;
