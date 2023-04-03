const database = require("./index.js");

const findOne = async (userId) => {
  try {
    const [user] = await database.query("select * from `user` where id = ?", [
      userId,
    ]);

    return user;
  } catch (e) {
    console.log(e);
    throw new SQLGenericError();
  }
};

const findByEmail = async (email) => {
  try {
    const [user] = await database.query("select * from `user` where email = ?", [
      email,
    ]);

    return user;
  } catch (e) {
    console.log(e);
    throw new SQLGenericError();
  }
};

const addOne = async (user) => {
  try {
    const { name, email, password } = user;

    const [result] = await database.query(
      "insert into `user` (name, email, password) values (?, ?, ?)",
      [name, email, password]
    );

    return { id: result.insertId, name, email };
  } catch (e) {
    console.log(e);
    throw new SQLGenericError();
  }
};

const findAll = async () => {
  try {
    const [result] = await database.query("select * from user");

    return result;
  } catch (e) {
    console.log(e);
    throw new SQLGenericError();
  }
};

const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

update(user) {
    const sql = [];
    const data = Object.keys(user).map((elem) => {
      sql.push(
        `${elem.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)} = ?`
      );
      return user[elem];
    });

    return this.database.query(
      `update ${this.table} set ${sql.join(",")} where id = ?`,
      [...data, user.id]
    );
  }


delete(user) {
    return this.database.query(`delete from ${this.table} where id = ?`, [
      user.name,
      user.email,
      user.password,
      user.id,
    ]);
  }
}


module.exports = { findOne, addOne, findByEmail, findAll, UserManager };