const { findOne, addOne, findAll, updateUser, deleteUser } = require("../models/UserManager.js");
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

const updateOneUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { newName, newEmail } = req.body;

    if (isNaN(userId)) throw new Error();

   const result = await updateUser(userId, newName, newEmail);

    res.status(201).send({newName, newEmail});
  } catch (e) {
    res.sendStatus(500);
  }
};

const deleteOneUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) throw new Error();

    const result = await deleteUser(userId);

    res.status(201).send(result);
  } catch (e) {
    res.status(500).json({error: "Une erreur est survenue lors de la suppression de l'utilisateur."});
  }
};


module.exports = { getOne, createOne, browse , updateOneUser, deleteOneUser };