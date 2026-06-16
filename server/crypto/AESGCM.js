const crypto = require("crypto");

class AESGCM {
  encrypt(key, plaintext) {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
    const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
    return {
      iv: iv.toString("base64"),
      ciphertext: encrypted.toString("base64"),
      tag: cipher.getAuthTag().toString("base64")
    };
  }

  decrypt(key, payload) {
    const decipher = crypto.createDecipheriv("aes-256-gcm", key, Buffer.from(payload.iv, "base64"));
    decipher.setAuthTag(Buffer.from(payload.tag, "base64"));
    return Buffer.concat([
      decipher.update(Buffer.from(payload.ciphertext, "base64")),
      decipher.final()
    ]).toString("utf8");
  }
}

module.exports = AESGCM;
