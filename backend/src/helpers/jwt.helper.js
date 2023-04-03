const jwt = require("jsonwebtoken");

const encodeJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "1h" });
};

const decodeJWT = (token) => {
  return jwt.decode(token, process.env.JWT_TOKEN);
};

module.exports = { encodeJWT, decodeJWT };