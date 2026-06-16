const BaseRepository = require("./BaseRepository");

class InviteRepository extends BaseRepository {
  constructor(db = null) {
    super(db, "invites");
  }
}

module.exports = InviteRepository;
