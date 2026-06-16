const fs = require("fs/promises");
const { createId, nowIso } = require("../utils/Helpers");
const { MAX_DIRECT_UPLOAD_BYTES } = require("../utils/Constants");

class FileService {
  constructor() {
    this.files = new Map();
  }

  registerUpload({ ownerId, chatId, file }) {
    const transferMode = file.size > MAX_DIRECT_UPLOAD_BYTES ? "p2p-or-server-fallback" : "server";
    const item = {
      id: createId(),
      ownerId,
      chatId,
      originalName: file.originalname,
      storagePath: file.path,
      mimeType: file.mimetype,
      sizeBytes: file.size,
      transferMode,
      temporaryUntil: null,
      deletedFromServerAt: null,
      createdAt: nowIso()
    };
    this.files.set(item.id, item);
    return item;
  }

  async deleteTemporaryServerCopy(fileId) {
    const item = this.files.get(fileId);
    if (!item || item.deletedFromServerAt) return false;
    await fs.unlink(item.storagePath).catch(() => {});
    item.deletedFromServerAt = nowIso();
    return true;
  }
}

module.exports = FileService;
