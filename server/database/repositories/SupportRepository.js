const BaseRepository = require("./BaseRepository");

class SupportRepository extends BaseRepository {
  constructor(db = null) {
    super(db, "support_tickets");
  }
}

module.exports = SupportRepository;
