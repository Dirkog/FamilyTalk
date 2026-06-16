const { createId, nowIso } = require("../utils/Helpers");

class ReactionService {
  constructor() {
    this.reactions = [];
  }

  toggle({ messageId, userId, emoji }) {
    const index = this.reactions.findIndex((item) => item.messageId === messageId && item.userId === userId && item.emoji === emoji);
    if (index >= 0) return this.reactions.splice(index, 1)[0];
    const reaction = { id: createId(), messageId, userId, emoji, createdAt: nowIso() };
    this.reactions.push(reaction);
    return reaction;
  }
}

module.exports = ReactionService;
