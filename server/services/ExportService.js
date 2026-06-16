class ExportService {
  constructor(messageService) {
    this.messageService = messageService;
  }

  exportChat(chatId) {
    return {
      chatId,
      exportedAt: new Date().toISOString(),
      messages: this.messageService.list(chatId)
    };
  }
}

module.exports = ExportService;
