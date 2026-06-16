const { createId, nowIso } = require("../utils/Helpers");

class PasswordReset {
  constructor() {
    this.requests = [];
  }

  request(email) {
    const item = { id: createId(), email: email.trim().toLowerCase(), status: "email_sent", createdAt: nowIso() };
    this.requests.push(item);
    return item;
  }
}

module.exports = PasswordReset;
