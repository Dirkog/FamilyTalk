const BaseRepository = require("./BaseRepository");

class UserRepository extends BaseRepository {
  constructor(db = null) {
    super(db, "users");
  }
}

module.exports = UserRepository;
