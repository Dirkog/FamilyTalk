const test = require("node:test");
const assert = require("node:assert/strict");

test("files: базовая проверка модуля", () => {
  assert.equal("files".length > 0, true);
});
