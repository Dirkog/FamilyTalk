const crypto = require("crypto");

class KeyManager {
  createMessageKey() {
    return crypto.randomBytes(32);
  }

  fingerprint(publicKeyPem) {
    return crypto.createHash("sha256").update(publicKeyPem).digest("hex");
  }
}

module.exports = KeyManager;
