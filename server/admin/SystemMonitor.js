class SystemMonitor {
  snapshot() {
    return { manager: "SystemMonitor", status: "ready", createdAt: new Date().toISOString() };
  }
}

module.exports = SystemMonitor;
