const test = require("node:test");
const assert = require("node:assert/strict");
const KeyManager = require("../../crypto/KeyManager");
const AESGCM = require("../../crypto/AESGCM");

test("AES-256-GCM шифрует и расшифровывает сообщение", () => {
  const key = new KeyManager().createMessageKey();
  const aes = new AESGCM();
  const encrypted = aes.encrypt(key, "семейный секрет");
  assert.equal(aes.decrypt(key, encrypted), "семейный секрет");
});
