const BaseRepository = require("./BaseRepository");

class SessionRepository extends BaseRepository {
  constructor(db = null) {
    super(db, "sessions");
  }
}

module.exports = SessionRepository;
