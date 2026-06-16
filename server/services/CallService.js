const { createId, nowIso } = require("../utils/Helpers");

class CallService {
  constructor() {
    this.calls = new Map();
  }

  start(chatId, callerId) {
    const call = { id: createId(), chatId, callerId, status: "ringing", startedAt: nowIso(), endedAt: null };
    this.calls.set(call.id, call);
    return call;
  }

  end(callId) {
    const call = this.calls.get(callId);
    if (!call) return null;
    call.status = "ended";
    call.endedAt = nowIso();
    return call;
  }
}

module.exports = CallService;
