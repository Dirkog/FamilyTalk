const { createId, nowIso } = require("../utils/Helpers");

class InviteService {
  createInvite(chatId, createdBy) {
    return { id: createId(), chatId, createdBy, code: createId().slice(0, 8), createdAt: nowIso() };
  }
}

module.exports = InviteService;
