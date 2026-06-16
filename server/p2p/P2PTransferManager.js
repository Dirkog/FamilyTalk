const { MAX_DIRECT_UPLOAD_BYTES } = require("../utils/Constants");

class P2PTransferManager {
  chooseMode(sizeBytes) {
    return sizeBytes <= MAX_DIRECT_UPLOAD_BYTES ? "server" : "p2p-with-server-fallback";
  }

  fallbackToServer(reason) {
    return { mode: "server", reason, deleteTemporaryAfterDownload: true };
  }
}

module.exports = P2PTransferManager;
