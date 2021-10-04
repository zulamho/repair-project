const { Router } = require("express");
const { serviceController } = require("../controllers/service.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/service", authMiddleware, serviceController.addService);
router.get("/service", serviceController.getServices);
router.post(
  "/service/adduser/:id",
  authMiddleware,
  serviceController.addApplicationUser
);
router.post(
  "/service/toggle-ticket/:id/:ticketId/:type",
  authMiddleware,
  serviceController.toggleTicket
);
router.get(
  "/service/getuser/:id",
  authMiddleware,
  serviceController.getApplicationUser
);
router.patch("/service/:id", serviceController.editService);
router.delete("/service/:id", authMiddleware, serviceController.deleteService);
router.get("/service/:id", serviceController.getServiceOne);
router.post("/service/upload", serviceController.addImage);
router.get("/service/category/:id", serviceController.getServicesCategory);
router.get("/admin", authMiddleware, serviceController.getUserService);
// router.get("/service/user/:id", serviceController.getUserServiceOne);

module.exports = router;
