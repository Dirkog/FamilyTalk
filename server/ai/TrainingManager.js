const { createId, nowIso } = require("../utils/Helpers");

class TrainingManager {
  constructor() {
    this.items = [];
  }

  forwardToModerator(question, requesterId, reason) {
    const item = { id: createId(), question, requesterId, reason, status: "pending_moderator", createdAt: nowIso() };
    this.items.push(item);
    return { status: "REQUEST_SENT_TO_MODERATOR", message: "Запрос отправлен модератору", ticket: item };
  }

  acceptModeratorAnswer(id, answer) {
    const item = this.items.find((entry) => entry.id === id);
    if (!item) return null;
    item.answer = answer;
    item.status = "answered";
    return item;
  }
}

module.exports = TrainingManager;
