const { createId, nowIso } = require("../utils/Helpers");

class LogManager {
  constructor() {
    this.logs = [];
  }

  write(level, scope, message, meta = {}) {
    const item = { id: createId(), level, scope, message, meta, createdAt: nowIso() };
    this.logs.push(item);
    return item;
  }

  list() {
    return this.logs;
  }

  remove(id) {
    const before = this.logs.length;
    this.logs = this.logs.filter((item) => item.id !== id);
    return this.logs.length !== before;
  }
}

module.exports = LogManager;
