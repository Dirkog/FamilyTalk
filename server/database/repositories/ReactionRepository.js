const BaseRepository = require("./BaseRepository");

class ReactionRepository extends BaseRepository {
  constructor(db = null) {
    super(db, "reactions");
  }
}

module.exports = ReactionRepository;
