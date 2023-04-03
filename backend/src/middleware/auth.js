const { decodeJWT } = require("../helpers/jwt.helper.js");

const authorization = (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) throw new Error("token missing");

    const data = decodeJWT(token);

    req.userId = data.id;
    req.userName = data.name;
    req.roles = data.roles;

    return next();
  } catch (e) {console.log(e);
;    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authorization;