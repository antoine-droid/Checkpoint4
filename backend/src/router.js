const express = require("express");
const router = express.Router();


const {
  getOne,
  createOne,
  browse,
  updateOneUser, deleteOneUser
} = require("./controllers/userControllers.js");

const { login, logout } = require("./controllers/authController.js");
const auth = require("./middleware/auth.js");
const rolesCheck = require("./middleware/rolesCheck.js");
const { browseAssets } = require("./controllers/assetsController.js")

router.get("/assets", browseAssets);

router.post("/login", login);
router.get("/logout", logout);




router.get("/login/profile", login,  browse);
router.put("/login/profile/:id", updateOneUser);
router.delete("/login/profile/:id", deleteOneUser);
router.get("/:id", auth, rolesCheck("admin"), getOne);
router.post("/registration", createOne);



module.exports = router;
