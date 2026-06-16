const BaseRepository = require("./BaseRepository");

class GroupRepository extends BaseRepository {
  constructor(db = null) {
    super(db, "groups");
  }
}

module.exports = GroupRepository;
