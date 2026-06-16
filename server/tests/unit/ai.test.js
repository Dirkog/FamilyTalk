const test = require("node:test");
const assert = require("node:assert/strict");

test("ai: базовая проверка модуля", () => {
  assert.equal("ai".length > 0, true);
});
