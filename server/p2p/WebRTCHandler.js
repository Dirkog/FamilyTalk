class WebRTCHandler {
  createOfferSession(callId, fromUserId, toUserId) {
    return { callId, fromUserId, toUserId, turn: false, createdAt: new Date().toISOString() };
  }
}

module.exports = WebRTCHandler;
