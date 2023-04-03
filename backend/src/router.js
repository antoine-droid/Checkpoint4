const express = require("express");
const router = express.Router();


const {
  getOne,
  createOne,
  browse,
} = require("./controllers/usercontrollerS.js");

const { login, logout } = require("./controllers/authController.js");
const auth = require("./middleware/auth.js");
const rolesCheck = require("./middleware/rolesCheck.js");
const assetsController = require("./controllers/assetsController.js")



router.post("/login", login);
router.get("/logout", logout);

// router.get("/admin", auth, rolesCheck("admin"), browse);
// router.get("/profile", auth, getOneUser);
// router.post("/registration", createOne);

// router.put("/user/:id", auth, updateUser);
// router.delete("/user-delete", deleteUser);

router.get("/assets", assetsController.getAllAssets);

router.get("/login/profile", login,  browse);
router.get("/:id", auth, rolesCheck("admin"), getOne);
router.post("/registration", createOne);



module.exports = router;
