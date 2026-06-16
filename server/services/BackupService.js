class BackupService {
  createManifest() {
    return {
      createdAt: new Date().toISOString(),
      includes: ["users", "chats", "messages", "groups", "files", "e2ee-public-keys"]
    };
  }
}

module.exports = BackupService;
