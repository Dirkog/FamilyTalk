class BaseRepository {
  constructor(db, tableName) {
    this.db = db;
    this.tableName = tableName;
    this.memory = new Map();
  }

  async findById(id) {
    if (!this.db) return this.memory.get(id) || null;
    const result = await this.db.query(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);
    return result.rows[0] || null;
  }

  async insert(entity) {
    this.memory.set(entity.id, entity);
    return entity;
  }

  async all() {
    return Array.from(this.memory.values());
  }
}

module.exports = BaseRepository;
