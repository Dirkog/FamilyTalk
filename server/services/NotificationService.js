class NotificationService {
  planFamilyTimeNotification(input) {
    return {
      chatId: input.chatId,
      title: input.title,
      timezoneHints: ["Москва", "Хабаровск"],
      plannedFor: input.plannedFor
    };
  }
}

module.exports = NotificationService;
