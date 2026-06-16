const config = require("../config");

class RoleManager {
  isModerator(user) {
    return user?.username === config.moderatorUsername || user?.role === "moderator";
  }

  canManageGroup(user, group) {
    return group.createdBy === user.id || group.adminIds?.includes(user.id);
  }

  canManageLogs(user) {
    return this.isModerator(user);
  }
}

module.exports = RoleManager;
