const { createId, nowIso } = require("../utils/Helpers");

class SessionManager {
  constructor() {
    this.sessions = new Map();
  }

  createSession(userId, tokenId, ipAddress, userAgent) {
    const session = {
      id: createId(),
      userId,
      tokenId,
      ipAddress,
      userAgent,
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
      createdAt: nowIso()
    };
    this.sessions.set(tokenId, session);
    return session;
  }

  isActive(tokenId) {
    const session = this.sessions.get(tokenId);
    return Boolean(session && new Date(session.expiresAt) > new Date());
  }
}

module.exports = SessionManager;
