const database = require("./index.js");




const findOne = async (id) => {
  try {
    const user = await database.query("select * from `user` where id = ?", [
      id,
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

const updateUser = async (userId, newName, newEmail) => {
  try {
    const [result] = await database.query(
      "UPDATE user SET name = ?, email = ? WHERE id = ?",
      [newName, newEmail, userId]
    );
    return result;
  } catch (e) {
    console.log(e);
    throw new SQLGenericError("🧦");
  }
};

const deleteUser = async (user) => {
  try {
    const [result] = await database.query("DELETE  FROM user WHERE id = ?", [user]);
    return result;
  } catch (e) {
    console.log(e);
    throw new SQLGenericError("🧦");
  }
};





module.exports = { findOne, addOne, findByEmail, findAll, updateUser,deleteUser };