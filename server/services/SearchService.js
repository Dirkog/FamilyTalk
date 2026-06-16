class SearchService {
  constructor(messageService) {
    this.messageService = messageService;
  }

  search(chatId, query) {
    const normalized = query.trim().toLowerCase();
    return this.messageService.list(chatId).filter((message) => (message.body || "").toLowerCase().includes(normalized));
  }
}

module.exports = SearchService;
