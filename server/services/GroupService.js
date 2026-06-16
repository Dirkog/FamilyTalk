const { GROUP_MEMBER_UI_LIMIT } = require("../utils/Constants");
const { badRequest } = require("../utils/Errors");
const { createId, nowIso } = require("../utils/Helpers");

class GroupService {
  constructor() {
    this.groups = new Map();
  }

  create({ title, creatorId, memberIds }) {
    if (memberIds.length > GROUP_MEMBER_UI_LIMIT) {
      throw badRequest("Интерфейс не позволяет создать группу больше 100 участников");
    }
    const group = {
      id: createId(),
      chatId: createId(),
      title,
      createdBy: creatorId,
      adminIds: [creatorId],
      memberIds: Array.from(new Set([creatorId, ...memberIds])),
      createdAt: nowIso()
    };
    this.groups.set(group.id, group);
    return group;
  }
}

module.exports = GroupService;
