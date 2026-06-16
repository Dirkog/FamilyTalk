const config = require("../config");
const { AI_MODERATOR_FALLBACK_STATUS } = require("../utils/Constants");

class AssistantService {
  constructor(trainingManager) {
    this.trainingManager = trainingManager;
  }

  async ask(question, requesterId) {
    if (!config.nvidiaNimApiKey) {
      return this.trainingManager.forwardToModerator(question, requesterId, "NVIDIA NIM API key не настроен");
    }
    return { status: AI_MODERATOR_FALLBACK_STATUS, message: "Запрос отправлен модератору" };
  }
}

module.exports = AssistantService;
