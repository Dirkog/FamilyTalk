class SignalingServer {
  constructor() {
    this.peers = new Map();
  }

  register(userId, socket) {
    this.peers.set(userId, socket);
  }

  signal(toUserId, payload) {
    const peer = this.peers.get(toUserId);
    if (peer) peer.send(JSON.stringify({ type: "p2p_signal", payload }));
    return Boolean(peer);
  }
}

module.exports = SignalingServer;
