const express = require("express");
const router = express.Router();


const {
  getOne,
  createOne,
  browse,
  updateUser,
  deleteUser
} = require("./controllers/usercontrollerS.js");

const { login, logout } = require("./controllers/authController.js");
const auth = require("./middleware/auth.js");
const rolesCheck = require("./middleware/rolesCheck.js");



router.post("/login", login);
router.get("/logout", logout);

router.get("/", auth, rolesCheck("admin"), browse);
router.get("/:id", auth, rolesCheck("admin"), getOne);
router.post("/registration", createOne);

router.put("/user/:id", auth, updateUser);
router.delete("/user-delete", deleteUser);

module.exports = router;
