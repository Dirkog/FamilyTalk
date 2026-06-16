class StatsManager {
  snapshot() {
    return { manager: "StatsManager", status: "ready", createdAt: new Date().toISOString() };
  }
}

module.exports = StatsManager;
