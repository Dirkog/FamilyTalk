const { createId, nowIso } = require("../utils/Helpers");

class MessageService {
  constructor() {
    this.messages = new Map();
  }

  list(chatId) {
    return Array.from(this.messages.values())
      .filter((message) => message.chatId === chatId && !message.deletedFromServerAt)
      .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  }

  send({ chatId, senderId, body, encryptedPayload, autoDeleteAt }) {
    const message = {
      id: createId(),
      chatId,
      senderId,
      body,
      encryptedPayload,
      autoDeleteAt: autoDeleteAt || null,
      deletedFromServerAt: null,
      createdAt: nowIso()
    };
    this.messages.set(message.id, message);
    return message;
  }

  sweepAutoDeleted(now = new Date()) {
    let count = 0;
    for (const message of this.messages.values()) {
      if (message.autoDeleteAt && !message.deletedFromServerAt && new Date(message.autoDeleteAt) <= now) {
        message.deletedFromServerAt = now.toISOString();
        count += 1;
      }
    }
    return count;
  }
}

module.exports = MessageService;
