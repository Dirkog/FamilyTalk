const BaseRepository = require("./BaseRepository");

class FileRepository extends BaseRepository {
  constructor(db = null) {
    super(db, "files");
  }
}

module.exports = FileRepository;
