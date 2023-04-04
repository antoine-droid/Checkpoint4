const database = require("./index.js");

const findAssets = async () => {
  try {
    const [result] = await database.query("select * from assets");

    return result;
  } catch (e) {
    console.log(e);
    throw new SQLGenericError();
  }
};
module.exports = { findAssets };