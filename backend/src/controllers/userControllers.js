const { findOne, addOne, findAll } = require("../models/UserManager.js");
const models = require("../models");
const validateUser = require("../validator/user.validator.js");
const { hashPassword } = require("../helpers/argon.helper.js");

const browse = async (req, res) => {
  try {
    const users = await findAll();

    res.send(users);
  } catch (e) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) throw new Error();

    const [user] = await findOne(userId);

    res.send(user);
  } catch (e) {
    res.sendStatus(500);
  }
};

const createOne = async (req, res) => {
  try {
    const errors = validateUser(req.body, true);

    if (errors) return res.status(401).send(errors);

    const hashedPassword = await hashPassword(req.body.password);

    const result = await addOne({ ...req.body, password: hashedPassword });

    res.status(201).send(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const updateUser = (req, res) => {
  const user = req.body;

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        delete req.user.password;
        delete req.user.iat;
        delete req.user.exp;

        const token = encodeJWT({ ...req.user, ...user });
        res.cookie("auth_token", token, { httpOnly: true, secure: false });

        res.status(204).json({ user });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteUser = (req, res) => {
  models.user
    .deleteUser(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


module.exports = { getOne, createOne, browse, updateUser, deleteUser };