const BaseRepository = require("./BaseRepository");

class MessageRepository extends BaseRepository {
  constructor(db = null) {
    super(db, "messages");
  }
}

module.exports = MessageRepository;
