const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/user", userController.registerUser);
router.post("/login", userController.login);
router.get("/user", authMiddleware, userController.getUser);
router.get("/users", userController.getUsers);
router.patch("/user", authMiddleware, userController.editUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/user/upload", userController.addAvatar);

module.exports = router;
