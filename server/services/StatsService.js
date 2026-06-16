class StatsService {
  snapshot({ users, messages, groups }) {
    return {
      users: users?.size || 0,
      messages: messages?.size || 0,
      groups: groups?.size || 0,
      createdAt: new Date().toISOString()
    };
  }
}

module.exports = StatsService;
