class TurnServer {
  config() {
    return { enabled: false, reason: "TURN не используется по требованиям проекта" };
  }
}

module.exports = TurnServer;
