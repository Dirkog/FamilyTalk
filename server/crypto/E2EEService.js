const AESGCM = require("./AESGCM");
const KeyManager = require("./KeyManager");

class E2EEService {
  constructor() {
    this.aes = new AESGCM();
    this.keys = new KeyManager();
  }

  encryptForChat(plaintext) {
    const key = this.keys.createMessageKey();
    return {
      encryptedPayload: this.aes.encrypt(key, plaintext),
      messageKey: key.toString("base64")
    };
  }
}

module.exports = E2EEService;
