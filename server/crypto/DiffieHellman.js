const crypto = require("crypto");

class DiffieHellman {
  createKeyPair() {
    return crypto.generateKeyPairSync("x25519");
  }

  deriveSecret(privateKey, publicKey) {
    return crypto.diffieHellman({ privateKey, publicKey });
  }
}

module.exports = DiffieHellman;
