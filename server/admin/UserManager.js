class UserManager {
  snapshot() {
    return { manager: "UserManager", status: "ready", createdAt: new Date().toISOString() };
  }
}

module.exports = UserManager;
