const test = require("node:test");
const assert = require("node:assert/strict");
const MessageService = require("../../services/MessageService");

test("автоудаление удаляет сообщение только с сервера", () => {
  const service = new MessageService();
  const message = service.send({
    chatId: "chat-1",
    senderId: "user-1",
    body: "таймер",
    autoDeleteAt: "2025-01-01T00:00:00.000Z"
  });

  const count = service.sweepAutoDeleted(new Date("2025-01-01T00:00:01.000Z"));

  assert.equal(count, 1);
  assert.equal(service.list("chat-1").length, 0);
  assert.ok(service.messages.get(message.id).deletedFromServerAt);
});
