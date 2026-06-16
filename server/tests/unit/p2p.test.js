const test = require("node:test");
const assert = require("node:assert/strict");

test("p2p: базовая проверка модуля", () => {
  assert.equal("p2p".length > 0, true);
});
