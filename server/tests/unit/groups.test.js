const test = require("node:test");
const assert = require("node:assert/strict");
const GroupService = require("../../services/GroupService");

test("интерфейс блокирует группу больше 100 участников", () => {
  const service = new GroupService();
  assert.throws(
    () => service.create({ title: "Большая семья", creatorId: "u0", memberIds: Array.from({ length: 101 }, (_, index) => `u${index}`) }),
    /100 участников/
  );
});
