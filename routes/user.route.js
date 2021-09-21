const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/user", userController.registerUser);
router.post("/login", userController.login);
router.get("/user/:id", userController.getUser);
router.patch("/userr/:id", userController.editUser);
//router.post("/cart/:id", authMiddleware, userController.addProductBasket);
router.delete("/user/:id", userController.deleteUser);
//router.get("/user/basket/:id", userController.getUserBasket);

module.exports = router;
