class KeyExchange {
  createEnvelope(userId, encryptedKey) {
    return { userId, encryptedKey, createdAt: new Date().toISOString() };
  }
}

module.exports = KeyExchange;
