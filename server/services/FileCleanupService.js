class FileCleanupService {
  constructor(fileService) {
    this.fileService = fileService;
  }

  async markDownloaded(fileId) {
    return this.fileService.deleteTemporaryServerCopy(fileId);
  }
}

module.exports = FileCleanupService;
