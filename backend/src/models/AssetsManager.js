
 

const AbstractManager = require("./AbstractManager");

class AssetsManager extends AbstractManager {
  constructor() {
    super({ table: "assets" });
  }
//   insert(video) {
//     return this.database.query(`insert into ${this.table} (title) values (?)`, [
//       video.title,
//     ]);
//   }

//   update(video) {
//     return this.database.query(
//       `update ${this.table} set title = ? where id = ?`,
//       [video.title, video.id]
//     );
//   }

//   findAllByCategory() {
//     return this.database.query(
//       `select ${this.table}.*, c.name AS category_name from ${this.table} JOIN category AS c ON ${this.table}.category_id = c.id`
//     );
//   }

  getAllAssets(asset) {
  return this.database.query(`SELECT * FROM ${this.table}`,[asset.id, asset.name, asset.wort, asset.quantity, asset.image]);
}
}
module.exports = AssetsManager;